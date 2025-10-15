import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HotelSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="hotel" className="hotel-section">
            <div className="container">
                <div className="section-header">
                    <h2>{t('hotel.title')}</h2>
                    <p>{t('hotel.subtitle')}</p>
                </div>
                <div className="hotel-content">
                    <div className="hotel-info">
                        <h3>{t('hotel.family-accommodation')}</h3>
                        <p>{t('hotel.description')}</p>
                        <ul className="features">
                            <li><i className="fas fa-wifi"></i> {t('hotel.features.wifi')}</li>
                            <li><i className="fas fa-swimming-pool"></i> {t('hotel.features.pool')}</li>
                            <li><i className="fas fa-car"></i> {t('hotel.features.parking')}</li>
                            <li><i className="fas fa-heart"></i> {t('hotel.features.family-service')}</li>
                            <li><i className="fas fa-child"></i> {t('hotel.features.kid-friendly')}</li>
                        </ul>
                    </div>
                    <div className="hotel-image">
                        <img src="/Img/poolNight.jpeg" alt="Hotel Pool at Night" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelSection;
