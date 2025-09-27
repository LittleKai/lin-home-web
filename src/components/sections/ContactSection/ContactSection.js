// src/components/sections/ContactSection/ContactSection.js
import React, { useState } from 'react';
import { contactInfo } from '../../../data/menuData';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const contactInfoItems = [
        {
            icon: 'fa-phone',
            title: 'Điện thoại',
            content: contactInfo.phone
        },
        {
            icon: 'fa-envelope',
            title: 'Email',
            content: contactInfo.email
        },
        {
            icon: 'fa-map-marker-alt',
            title: 'Địa chỉ',
            content: contactInfo.address
        },
        {
            icon: 'fa-clock',
            title: 'Giờ làm việc',
            content: contactInfo.workingHours
        }
    ];

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Form validation
    const validateForm = () => {
        const { name, email, phone } = formData;

        if (!name.trim()) {
            throw new Error('Vui lòng nhập họ và tên');
        }

        if (!email.trim()) {
            throw new Error('Vui lòng nhập email');
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error('Email không hợp lệ');
        }

        if (!phone.trim()) {
            throw new Error('Vui lòng nhập số điện thoại');
        }

        if (!/^[0-9+\-\s()]+$/.test(phone)) {
            throw new Error('Số điện thoại không hợp lệ');
        }
    };

    // Handle form submission (without API)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);
            setSubmitStatus(null);

            // Validate form
            validateForm();

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Log form data (in real app, this would be sent to API)
            console.log('Form submitted:', formData);

            // Success
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });

            // Auto hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);

        } catch (error) {
            console.error('Contact form submission failed:', error);
            setSubmitStatus('error');

            // Show user-friendly error message
            alert(error.message || 'Có lỗi xảy ra khi gửi form. Vui lòng thử lại.');

            // Auto hide error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Liên hệ với chúng tôi</div>
                    <h2 className="section-title">Bắt đầu dự án của bạn</h2>
                    <p className="section-subtitle">
                        Hãy để chúng tôi biết về dự án mơ ước của bạn.
                        Đội ngũ chuyên gia sẽ tư vấn miễn phí và chi tiết nhất.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Form */}
                    <div className="contact-form">
                        <h3>Gửi yêu cầu tư vấn</h3>

                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <div className="alert alert-success" role="alert">
                                <i className="fas fa-check-circle"></i>
                                <p>Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
                            </div>
                        )}

                        {/* Error Message */}
                        {submitStatus === 'error' && (
                            <div className="alert alert-error" role="alert">
                                <i className="fas fa-exclamation-circle"></i>
                                <p>Có lỗi xảy ra khi gửi form. Vui lòng thử lại hoặc liên hệ trực tiếp qua điện thoại.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="name">
                                    Họ và tên <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Nhập họ và tên của bạn"
                                    required
                                    disabled={isSubmitting}
                                    aria-describedby="name-error"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Nhập địa chỉ email"
                                    required
                                    disabled={isSubmitting}
                                    aria-describedby="email-error"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">
                                    Số điện thoại <span className="required">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Nhập số điện thoại"
                                    required
                                    disabled={isSubmitting}
                                    aria-describedby="phone-error"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Dịch vụ quan tâm</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                >
                                    <option value="">Chọn dịch vụ</option>
                                    <option value="thiet-ke-kien-truc">Thiết kế kiến trúc</option>
                                    <option value="thi-cong-xay-dung">Thi công xây dựng</option>
                                    <option value="thiet-ke-noi-that">Thiết kế nội thất</option>
                                    <option value="thiet-ke-san-vuon">Thiết kế sân vườn</option>
                                    <option value="sua-chua-cai-tao">Sửa chữa cải tạo</option>
                                    <option value="tu-van-bao-gia">Tư vấn báo giá</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Tin nhắn</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Mô tả chi tiết về dự án hoặc yêu cầu của bạn..."
                                    rows="5"
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`form-submit ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                                aria-describedby="submit-status"
                            >
                                {isSubmitting ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
                                        Đang gửi...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-paper-plane" aria-hidden="true"></i>
                                        Gửi yêu cầu
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info">
                        <div className="note_contact">
                            <h2>Cty TNHH Xây Dựng LinHome</h2>

                            <div className="address">
                                <div className="address_list">
                                    <div className="address_item">
                                        <h3>+/ Văn phòng chính</h3>
                                        <p><b>Địa chỉ:</b> {contactInfo.address}</p>
                                        <p><b>Điện thoại:</b> {contactInfo.phone}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact_details">
                                <h3><strong><span style={{color: '#ff3300', fontSize: '20px'}}>Hotline: {contactInfo.phone}</span></strong></h3>
                                <p>Website: lin-home.vn</p>
                                <p>Email: {contactInfo.email}</p>
                                <p>Giờ làm việc: {contactInfo.workingHours}</p>
                            </div>

                            {/* Social Links */}
                            <div className="contact-social">
                                <h4>Theo dõi chúng tôi</h4>
                                <div className="social-links">
                                    <a
                                        href={contactInfo.facebook}
                                        className="social-link facebook"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                    >
                                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                    </a>
                                    <a
                                        href={contactInfo.zalo}
                                        className="social-link zalo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Zalo"
                                    >
                                        <span className="zalo-icon" aria-hidden="true"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;