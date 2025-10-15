import React, { useState, useEffect } from 'react';
import { createWhatsAppUrl } from '../constants/whatsapp';
import { useLanguage } from '../contexts/LanguageContext';

const DepartureModal: React.FC = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show modal after 3 seconds on every page load
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Remember that user has seen the modal
        localStorage.setItem('hasSeenDepartureModal', 'true');
    };

    const handleContactPickup = () => {
        const message = `Hello! I'm interested in using the free facilities on my departure day at Jasmine Restaurant & Bar.

🏨 Free Departure Day Facilities:
• Free luggage storage
• Free shower facilities  
• Free pool access
• Free sunbeds
• Free pickup from my hotel

Please let me know more details about this service and how to arrange it. Thank you!`;

        const whatsappUrl = createWhatsAppUrl(message);
        window.open(whatsappUrl, '_blank');
    };

    if (!isVisible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={handleClose}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="modal-header">
                    <div className="modal-icon">
                        <i className="fas fa-plane-departure"></i>
                    </div>
                    <h2>{t('special.title')}!</h2>
                    <p className="modal-subtitle">{t('special.subtitle')}</p>
                </div>

                <div className="modal-body">
                    <div className="offer-highlight">
                        <p>{t('special.description')}</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <i className="fas fa-suitcase"></i>
                            <h4>{t('special.feature1.title')}</h4>
                            <p>{t('special.feature1.desc')}</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-shower"></i>
                            <h4>{t('special.feature2.title')}</h4>
                            <p>{t('special.feature2.desc')}</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-swimming-pool"></i>
                            <h4>{t('special.feature3.title')}</h4>
                            <p>{t('special.feature3.desc')}</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-sun"></i>
                            <h4>{t('special.feature4.title')}</h4>
                            <p>{t('special.feature4.desc')}</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-car"></i>
                            <h4>{t('special.feature5.title')}</h4>
                            <p>{t('special.feature5.desc')}</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-utensils"></i>
                            <h4>{t('special.feature6.title')}</h4>
                            <p>{t('special.feature6.desc')}</p>
                        </div>
                    </div>

                    <div className="modal-note">
                        <i className="fas fa-info-circle"></i>
                        <p><strong>{t('special.terms')}</strong></p>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={handleClose}>
                        <i className="fas fa-times"></i> {t('special.not-today')}
                    </button>
                    <button className="btn btn-primary" onClick={handleContactPickup}>
                        <i className="fab fa-whatsapp"></i> {t('special.book-now')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DepartureModal;
