// src/services/GeminiService.js
class GeminiService {
    constructor() {
        this.geminiKeys = [];
        this.currentKeyIndex = 0;
        this.lastFetchTime = 0;
        this.cacheExpiry = 5 * 60 * 1000; // 5 minutes cache
        this.isLoading = false;

        // Google Sheets URL - MUST be updated with correct public URL
        this.sheetsUrl = 'https://docs.google.com/spreadsheets/d/1kqjlY92HDWIvYNg9phsatzuMd9WTSaVt/export?format=csv&gid=0';

        // Alternative methods to try
        this.alternativeUrls = [
            'https://docs.google.com/spreadsheets/d/1kqjlY92HDWIvYNg9phsatzuMd9WTSaVt/export?format=csv',
            'https://docs.google.com/spreadsheets/d/1kqjlY92HDWIvYNg9phsatzuMd9WTSaVt/export?format=csv&gid=0&single=true&output=csv'
        ];
    }

    // Fetch API keys from Google Sheets with multiple URL attempts
    async fetchKeysFromSheets() {
        const urlsToTry = [this.sheetsUrl, ...this.alternativeUrls];

        for (let i = 0; i < urlsToTry.length; i++) {
            const url = urlsToTry[i];

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'text/csv,application/csv,text/plain',
                        'Cache-Control': 'no-cache',
                    },
                    mode: 'cors',
                });

                if (!response.ok) {
                    if (i === urlsToTry.length - 1) {
                        throw new Error(`Tất cả URL đều thất bại. Status cuối: ${response.status}`);
                    }
                    continue;
                }

                const csvText = await response.text();

                if (!csvText || csvText.trim().length === 0) {
                    if (i === urlsToTry.length - 1) {
                        throw new Error('Google Sheets trả về dữ liệu rỗng');
                    }
                    continue;
                }

                const keys = this.parseCSVKeys(csvText);

                if (keys.length > 0) {
                    this.geminiKeys = keys;
                    this.lastFetchTime = Date.now();
                    return true;
                } else {
                    if (i === urlsToTry.length - 1) {
                        throw new Error('Không tìm thấy API keys hợp lệ trong Google Sheets');
                    }
                    continue;
                }
            } catch (fetchError) {
                if (i === urlsToTry.length - 1) {
                    throw new Error(`Không thể kết nối Google Sheets: ${fetchError.message}`);
                }
            }
        }
    }

    // Parse CSV data to extract API keys
    parseCSVKeys(csvText) {
        try {
            // Handle different line endings
            const lines = csvText.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim().split('\n');
            const keys = [];

            if (lines.length < 2) {
                throw new Error('CSV file must have at least header and one data row');
            }

            // Skip header row (first line) and process data
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;

                // Parse CSV line (handle commas in quotes)
                const columns = this.parseCSVLine(line);

                if (columns.length >= 2) {
                    const user = columns[0].trim().replace(/^"|"$/g, ''); // Remove quotes
                    const key = columns[1].trim().replace(/^"|"$/g, ''); // Remove quotes

                    // Validate API key format
                    if (key && key.startsWith('AIzaSy') && key.length > 30) {
                        keys.push(key);
                    }
                }
            }

            return keys;
        } catch (error) {
            throw new Error(`Lỗi phân tích dữ liệu CSV: ${error.message}`);
        }
    }

    // Parse a single CSV line (handle quoted strings with commas)
    parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;

        for (let i = 0; i < line.length; i++) {
            const char = line[i];

            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(current);
                current = '';
            } else {
                current += char;
            }
        }

        result.push(current);
        return result;
    }

    // Get next available API key
    async getNextApiKey() {
        // Check if we need to fetch keys for the first time or refresh
        const now = Date.now();
        if (this.geminiKeys.length === 0 || now - this.lastFetchTime > this.cacheExpiry) {
            if (!this.isLoading) {
                this.isLoading = true;
                try {
                    await this.fetchKeysFromSheets();
                } catch (error) {
                    console.error('Failed to fetch API keys:', error);
                    throw new Error(`Không thể lấy API keys: ${error.message}`);
                } finally {
                    this.isLoading = false;
                }
            } else {
                // Wait for current loading to finish
                let attempts = 0;
                while (this.isLoading && attempts < 50) { // Max 5 seconds wait
                    await new Promise(resolve => setTimeout(resolve, 100));
                    attempts++;
                }
                if (this.isLoading) {
                    throw new Error('Timeout waiting for API keys to load');
                }
            }
        }

        // Ensure we have keys
        if (this.geminiKeys.length === 0) {
            throw new Error('Không có API keys khả dụng. Vui lòng kiểm tra Google Sheets và đảm bảo file được public.');
        }

        const key = this.geminiKeys[this.currentKeyIndex];
        this.currentKeyIndex = (this.currentKeyIndex + 1) % this.geminiKeys.length;
        return key;
    }

    // Send request to Gemini API with retry logic
    async sendToGemini(prompt, maxRetries = 3) {
        let lastError = null;

        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                const apiKey = await this.getNextApiKey();

                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: prompt
                            }]
                        }],
                        generationConfig: {
                            temperature: 0.7,
                            topK: 40,
                            topP: 0.95,
                            maxOutputTokens: 2048,
                        }
                    })
                });

                if (!response.ok) {
                    if (response.status === 429 && attempt < maxRetries - 1) {
                        lastError = new Error(`Rate limit exceeded on key ${this.currentKeyIndex}`);
                        continue;
                    }

                    if (response.status === 400) {
                        throw new Error('Yêu cầu không hợp lệ. Vui lòng kiểm tra thông tin đầu vào.');
                    }

                    if (response.status === 403) {
                        throw new Error('API key không hợp lệ hoặc bị từ chối quyền truy cập.');
                    }

                    throw new Error(`Lỗi API: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                    return this.formatResponse(data.candidates[0].content.parts[0].text);
                } else if (data.error) {
                    throw new Error(`API Error: ${data.error.message}`);
                } else {
                    throw new Error('Phản hồi không hợp lệ từ API Gemini');
                }
            } catch (error) {
                lastError = error;

                if (attempt === maxRetries - 1) {
                    break;
                }

                // Wait before retry
                await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
            }
        }

        // If all attempts failed, throw the last error
        throw lastError || new Error('Tất cả các lần thử đều thất bại');
    }

    // Format response to clean up formatting issues
    formatResponse(rawResponse) {
        if (!rawResponse) return '';

        let formatted = rawResponse
            // Remove excessive asterisks
            .replace(/\*{3,}/g, '')
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/\*([^*]+)\*/g, '$1')

            // Clean up excessive line breaks
            .replace(/\n{3,}/g, '\n\n')
            .replace(/^\s+|\s+$/g, '')

            // Add proper bullet points where appropriate
            .replace(/^(\s*)•\s+/gm, '$1- ')
            .replace(/^(\s*)→\s+/gm, '$1- ')
            .replace(/^(\s*)-\s*/gm, '$1- ')

            // Format numbered lists
            .replace(/^(\s*)(\d+\.\s*)(.*):$/gm, '$1$2<strong>$3:</strong>')

            // Format section headers
            .replace(/^([A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ\s]+):$/gm, '<h3>$1:</h3>')

            // Ensure proper spacing around headers
            .replace(/(<h3>[^<]+<\/h3>)/g, '\n\n$1\n')

            // Clean up final formatting
            .replace(/\n{3,}/g, '\n\n')
            .trim();

        return formatted;
    }

    // Create consultation based on page type
    async getConsultation(type, formData) {
        try {
            const prompt = this.createPrompt(type, formData);
            const response = await this.sendToGemini(prompt);

            return {
                success: true,
                data: response
            };
        } catch (error) {

            // Return specific error messages
            if (error.message.includes('Google Sheets') || error.message.includes('API keys')) {
                return {
                    success: false,
                    error: `❌ Lỗi kết nối Google Sheets: ${error.message}\n\n💡 Hướng dẫn khắc phục:\n1. Đảm bảo Google Sheets được public\n2. Kiểm tra URL trong GeminiService.js\n3. Xem Console để biết chi tiết`
                };
            } else if (error.message.includes('API key')) {
                return {
                    success: false,
                    error: `❌ Lỗi API key: ${error.message}\n\n💡 Hãy kiểm tra các API keys trong Google Sheets có đúng format không.`
                };
            } else {
                return {
                    success: false,
                    error: error.message || 'Đã xảy ra lỗi khi kết nối với dịch vụ tư vấn. Vui lòng thử lại sau.'
                };
            }
        }
    }

    // Create specific prompts for each consultation type
    createPrompt(type, formData) {
        const basePrompt = `Bạn là chuyên gia phong thủy Việt Nam với 20 năm kinh nghiệm. Hãy tư vấn chi tiết, chính xác và dễ hiểu.

Thông tin khách hàng:
${this.formatUserInfo(type, formData)}

Yêu cầu format phản hồi:
- Trả lời bằng tiếng Việt
- Phân tích chi tiết và khoa học
- Sử dụng dấu gạch đầu dòng (-) thay vì dấu sao (*)
- Không sử dụng quá nhiều dấu sao hoặc ký tự đặc biệt
- Chia thành các mục rõ ràng
- Đưa ra lời khuyên thực tế và cụ thể

`;

        return basePrompt + this.getSpecificPrompt(type);
    }

    // Format user information based on page type
    formatUserInfo(type, formData) {
        let info = `- Năm sinh: ${formData.namSinh}\n- Giới tính: ${formData.gioiTinh}`;

        if (formData.thangSinh && formData.ngaySinh) {
            info += `\n- Ngày tháng sinh: ${formData.ngaySinh}/${formData.thangSinh}`;
        }

        switch (type) {
            case 'xem-tuoi-lam-nha':
                info += `\n- Năm dự định làm nhà: ${formData.namLamNha}\n- Loại công trình: ${formData.loaiCongTrinh}`;
                break;
            case 'huong-nha-hop-tuoi':
                info += `\n- Hướng nhà hiện tại: ${formData.huongNha}`;
                break;
            case 'mau-hop-tuoi':
                info += `\n- Mệnh: ${formData.menhData}\n- Mục đích: ${formData.mucDich}`;
                break;
        }

        return info;
    }

    // Get specific prompt content for each page type
    getSpecificPrompt(type) {
        switch (type) {
            case 'xem-tuoi-lam-nha':
                return `Hãy phân tích và tư vấn theo các mục sau:

1. PHÂN TÍCH MỆNH VÀ TUỔI
   - Xác định mệnh theo năm sinh
   - Phân tích đặc điểm tuổi tác và vận khí năm dự định làm nhà

2. ĐÁNH GIÁ NĂM DỰ ĐỊNH LÀM NHÀ
   - Năm này có phù hợp để làm nhà ở không
   - Điểm tốt và điểm cần lưu ý
   - Mức độ phù hợp (thang điểm 1-10)

3. THÁNG TỐT TRONG NĂM
   - Top 3-5 tháng tốt nhất để khởi công
   - Tháng nào nên tránh và tại sao
   - Giai đoạn nào phù hợp cho từng công việc (động thổ, đổ móng, cất nóc)

4. LỜI KHUYÊN CHO NHÀ Ở
   - Hướng nhà và vị trí đặt công trình phù hợp
   - Màu sắc chủ đạo nên chọn
   - Bố cục không gian theo phong thủy

5. NGHI LỄ VÀ CÚNG KHỞI CÔNG
   - Cách chọn ngày giờ tốt để động thổ
   - Vật phẩm và lễ vật cần chuẩn bị
   - Các bước thực hiện nghi lễ khởi công

6. GỢI Ý NĂM KHÁC (nếu cần)
   - Những năm khác gần đây cũng tốt
   - Năm nào tốt nhất trong 5 năm tới

7. CÁCH HÓA GIẢI (nếu có bất lợi)
   - Biện pháp khắc phục những yếu tố không thuận
   - Vật phẩm phong thủy hỗ trợ
   - Cách bố trí để cải thiện vận khí`;

            case 'huong-nha-hop-tuoi':
                return `Hãy phân tích và tư vấn theo các mục sau:

1. PHÂN TÍCH MỆNH VÀ HƯỚNG
   - Xác định mệnh theo năm sinh
   - Phân tích hướng nhà theo hệ thống Bát Trạch
   - Độ tương hợp giữa mệnh và hướng nhà (điểm từ 1-10)

2. ĐÁNH GIÁ HƯỚNG NHÀ HIỆN TẠI
   - Ưu điểm của hướng này cho người này
   - Nhược điểm và những điều cần lưu ý
   - Tác động đến sức khỏe, tài vận, gia đình

3. LỜI KHUYÊN CẢI THIỆN
   - Cách tối ưu hóa hướng hiện tại
   - Màu sắc, vật liệu nên sử dụng
   - Bố trí nội thất và không gian
   - Cây cảnh và vật phẩm phong thủy

4. CÁC HƯỚNG TỐT KHÁC
   - Top 3 hướng tốt nhất cho người này
   - Lý do tại sao những hướng này phù hợp
   - So sánh với hướng hiện tại

5. BIỆN PHÁP HÓA GIẢI (nếu cần)
   - Cách khắc phục nếu hướng không hoàn toàn phù hợp
   - Vật phẩm phong thủy để cải thiện năng lượng
   - Thời gian tốt để thực hiện các thay đổi

6. LỜI KHUYÊN TỔNG QUAN
   - Kế hoạch dài hạn để tối ưu phong thủy
   - Những điều tuyệt đối nên tránh
   - Cách duy trì năng lượng tích cực`;

            case 'mau-hop-tuoi':
                return `Hãy phân tích và tư vấn theo các mục sau:

1. PHÂN TÍCH MỆNH VÀ MÀU SẮC
   - Xác định/xác nhận mệnh theo năm sinh
   - Nguyên tắc màu sắc trong ngũ hành
   - Tương quan giữa mệnh và màu sắc

2. MÀU SẮC HỢP MỆNH
   - Màu sắc chủ đạo hợp mệnh (ít nhất 5 màu cụ thể)
   - Màu sắc hỗ trợ và bổ sung
   - Cách phối hợp màu sắc hài hòa

3. MÀU SẮC NÊN TRÁNH
   - Màu sắc xung khắc với mệnh
   - Lý do tại sao nên tránh
   - Cách hóa giải nếu buộc phải sử dụng

4. ÁP DỤNG CHO KHÔNG GIAN CỤ THỂ
   - Màu sắc cho phòng khách
   - Màu sắc cho phòng ngủ
   - Màu sắc cho nhà bếp
   - Màu sắc cho văn phòng/workspace

5. MÀU SẮC CHO TRANG PHỤC VÀ PHỤ KIỆN
   - Màu sắc tốt cho quần áo hằng ngày
   - Màu sắc cho trang sức và phụ kiện
   - Màu sắc may mắn cho sự kiện quan trọng

6. MÀU SẮC CHO CÔNG VIỆC/KINH DOANH
   - Màu sắc tốt cho sự nghiệp
   - Màu sắc chiêu tài lộc
   - Màu sắc cho logo, danh thiếp

7. LỜI KHUYÊN THỰC TẾ
   - Cách áp dụng màu sắc từng bước
   - Tỷ lệ màu sắc hợp lý
   - Cách kết hợp màu với ánh sáng và không gian`;

            default:
                return 'Hãy tư vấn phong thủy chi tiết dựa trên thông tin được cung cấp.';
        }
    }

    // Method to manually refresh keys
    async refreshKeys() {
        this.isLoading = true;
        try {
            await this.fetchKeysFromSheets();
            return true;
        } catch (error) {
            return false;
        } finally {
            this.isLoading = false;
        }
    }

    // Get current keys status
    getKeysStatus() {
        return {
            totalKeys: this.geminiKeys.length,
            currentIndex: this.currentKeyIndex,
            lastFetch: this.lastFetchTime ? new Date(this.lastFetchTime).toLocaleString() : 'Never',
            sheetsUrl: this.sheetsUrl,
            isLoading: this.isLoading,
            alternativeUrls: this.alternativeUrls
        };
    }

    // Test connection to Google Sheets
    async testConnection() {
        try {
            await this.fetchKeysFromSheets();
            return {
                success: true,
                message: `✅ Kết nối thành công! Đã tải ${this.geminiKeys.length} API keys.`
            };
        } catch (error) {
            return {
                success: false,
                message: `❌ ${error.message}`
            };
        }
    }

    // Update sheets URL
    updateSheetsUrl(newUrl) {
        this.sheetsUrl = newUrl;
        this.geminiKeys = []; // Clear existing keys
        this.lastFetchTime = 0; // Force refresh
    }
}

export default new GeminiService();