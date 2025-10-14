import React from 'react';
import { createWhatsAppUrl } from '../constants/whatsapp';

const Footer: React.FC = () => {
    const contactWhatsApp = () => {
        const message = "Hi! I'm interested in booking at Jasmine Hotel. Can you provide more information about availability and rates?";
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
                            <h3>Jasmine Restaurant & Bar</h3>
                        </div>
                        <p>Experience comfortable family accommodation and delicious home-style dining in the heart of Oludeniz, Turkey.</p>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Oludeniz, Fethiye, Turkey</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>+90 553 728 3045</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>jasminerestaurantbar@gmail.com</span>
                            </div>
                        </div>
                        <button className="btn btn-whatsapp" onClick={contactWhatsApp}>
                            <i className="fab fa-whatsapp"></i> Contact us on WhatsApp
                        </button>
                    </div>

                    <div className="footer-map">
                        <h4>Find Us</h4>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.3565216025736!2d29.144372174432867!3d36.56962548066551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c0477a64b73fdd%3A0xb20abcf06ae0ea4c!2sJasmine%20Restaurant%26Bar!5e0!3m2!1ses-419!2str!4v1759172523807!5m2!1ses-419!2str"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Jasmine Hotel Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#restaurant">Restaurant</a>
                        <a href="#hotel">Hotel</a>
                        <a href="#car-rental">Car Rental</a>
                        <a href="#rooms">Rooms</a>
                        <a href="#customers">Reviews</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-social">
                        <a href="https://www.facebook.com/jasminerestaurantbar/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/jasminerestaurantbarr/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@jasminereataurantbar" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; 2024 Jasmine Restaurant & Bar. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
