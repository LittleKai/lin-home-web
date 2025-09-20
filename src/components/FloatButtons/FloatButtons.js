import React from 'react';
import './FloatButtons.css';
import { contactInfo } from '../../data/menuData';

const FloatButtons = () => {
    // Handle button clicks
    const handleButtonClick = (type) => {
        switch (type) {
            case 'phone':
                window.open(`tel:${contactInfo.phone}`, '_self');
                break;
            case 'facebook':
                window.open(contactInfo.facebook, '_blank', 'noopener,noreferrer');
                break;
            case 'zalo':
                window.open(contactInfo.zalo, '_blank', 'noopener,noreferrer');
                break;
            case 'map':
                window.open(contactInfo.maps, '_blank', 'noopener,noreferrer');
                break;
            default:
                console.log('Unknown button type:', type);
        }
    };

    return (
        <div className="float-buttons">
            <button
                className="float-btn phone"
                onClick={() => handleButtonClick('phone')}
                data-tooltip="Gọi ngay"
                aria-label={`Gọi điện: ${contactInfo.phone}`}
            >
                <i className="fas fa-phone" aria-hidden="true"></i>
            </button>

            <button
                className="float-btn facebook"
                onClick={() => handleButtonClick('facebook')}
                data-tooltip="Chat Facebook"
                aria-label="Chat Facebook Messenger"
            >
                <i className="fab fa-facebook-messenger" aria-hidden="true"></i>
            </button>

            <button
                className="float-btn zalo"
                onClick={() => handleButtonClick('zalo')}
                data-tooltip="Chat Zalo"
                aria-label="Chat Zalo"
            >
                <span className="zalo-icon" aria-hidden="true"></span>
            </button>

            <button
                className="float-btn map"
                onClick={() => handleButtonClick('map')}
                data-tooltip="Xem bản đồ"
                aria-label="Xem vị trí trên bản đồ"
            >
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default FloatButtons;
