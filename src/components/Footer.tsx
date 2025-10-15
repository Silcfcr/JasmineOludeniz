import React from 'react';
import { createWhatsAppUrl } from '../constants/whatsapp';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const contactWhatsApp = () => {
        const message = t('footer.whatsapp-message');
        const whatsappUrl = createWhatsAppUrl(message);
        window.open(whatsappUrl, '_blank');
    };

    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <div className="footer-logo">
                            <img src="/jasmine.png" alt="Jasmine Logo" />
                            <h3>{t('footer.title')}</h3>
                        </div>
                        <p>{t('footer.description')}</p>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{t('common.address')}</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>{t('common.phone')}</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>{t('common.email')}</span>
                            </div>
                        </div>
                        <button className="btn btn-whatsapp" onClick={contactWhatsApp}>
                            <i className="fab fa-whatsapp"></i> {t('footer.contact-whatsapp')}
                        </button>
                    </div>

                    <div className="footer-map">
                        <h4>{t('footer.find-us')}</h4>
                        <div className="map-container">
                            <img
                                src="/Img/jasmine-map.png"
                                alt={t('footer.map-alt')}
                                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-links">
                        <a href="#home">{t('nav.home')}</a>
                        <a href="#restaurant">{t('nav.restaurant')}</a>
                        <a href="#hotel">{t('nav.hotel')}</a>
                        <a href="#car-rental">{t('nav.car-rental')}</a>
                        <a href="#rooms">{t('nav.rooms')}</a>
                        <a href="#customers">{t('nav.customers')}</a>
                        <a href="#contact">{t('nav.contact')}</a>
                    </div>
                    <div className="footer-social">
                        <a href="https://www.facebook.com/jasminerestaurantbar/" aria-label={t('footer.social.facebook')} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/jasminerestaurantbarr/" aria-label={t('footer.social.instagram')} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@jasminereataurantbar" aria-label={t('footer.social.tiktok')} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                    <div className="footer-copyright">
                        <p>{t('footer.copyright')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
