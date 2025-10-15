import React from 'react';
import { createWhatsAppUrl } from '../constants/whatsapp';
import { useLanguage } from '../contexts/LanguageContext';

const SpecialOffer: React.FC = () => {
    const { t } = useLanguage();
    const contactPickupWhatsApp = () => {
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

    return (
        <section className="special-offer">
            <div className="container">
                <div className="offer-content">
                    <div className="offer-header">
                        <div className="offer-icon">
                            <i className="fas fa-plane-departure"></i>
                        </div>
                        <h2>{t('special.title')}</h2>
                        <p className="offer-subtitle">{t('special.subtitle')}</p>
                    </div>

                    <div className="offer-description">
                        <p>{t('special.description')}</p>
                    </div>

                    <div className="offer-features-grid">
                        <div className="offer-feature">
                            <i className="fas fa-suitcase"></i>
                            <h4>{t('special.feature1.title')}</h4>
                            <p>{t('special.feature1.desc')}</p>
                        </div>
                        <div className="offer-feature">
                            <i className="fas fa-shower"></i>
                            <h4>{t('special.feature2.title')}</h4>
                            <p>{t('special.feature2.desc')}</p>
                        </div>
                        <div className="offer-feature">
                            <i className="fas fa-swimming-pool"></i>
                            <h4>{t('special.feature3.title')}</h4>
                            <p>{t('special.feature3.desc')}</p>
                        </div>
                        <div className="offer-feature">
                            <i className="fas fa-sun"></i>
                            <h4>{t('special.feature4.title')}</h4>
                            <p>{t('special.feature4.desc')}</p>
                        </div>
                        <div className="offer-feature">
                            <i className="fas fa-car"></i>
                            <h4>{t('special.feature5.title')}</h4>
                            <p>{t('special.feature5.desc')}</p>
                        </div>
                        <div className="offer-feature">
                            <i className="fas fa-utensils"></i>
                            <h4>{t('special.feature6.title')}</h4>
                            <p>{t('special.feature6.desc')}</p>
                        </div>
                    </div>

                    <div className="offer-note">
                        <i className="fas fa-info-circle"></i>
                        <p><strong>{t('special.terms')}</strong></p>
                    </div>

                    <div className="offer-contact">
                        <button className="btn btn-primary offer-btn" onClick={contactPickupWhatsApp}>
                            <i className="fab fa-whatsapp"></i> {t('special.book-now')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
