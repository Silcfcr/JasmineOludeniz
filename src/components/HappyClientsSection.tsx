import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HappyClientsSection: React.FC = () => {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const customerImages = [
        { src: '/Img/costumers/cos1.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos2.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos3.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos4.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos5.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos6.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos7.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos8.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos9.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos10.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos11.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos12.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos13.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos14.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos15.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos16.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos17.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos18.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos19.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos20.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos21.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos22.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos23.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos24.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos25.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos26.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos27.jpeg', alt: 'Happy customers at Jasmine' }
    ];

    const openGallery = (index: number) => {
        setSelectedImage(index);
    };

    const closeGallery = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % customerImages.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? customerImages.length - 1 : selectedImage - 1);
        }
    };

    return (
        <section id="customers" className="customers-section">
            <div className="container">
                <div className="customers-content">
                    <div className="customers-header">
                        <h2>{t('clients.title')}</h2>
                        <p>{t('clients.subtitle')}</p>
                    </div>

                    <div className="customers-layout">
                        <div className="customer-gallery">
                            <h3>{t('clients.gallery')}</h3>
                            <div className="gallery-grid">
                                {customerImages.map((image, index) => (
                                    <div key={index} className="gallery-item" onClick={() => openGallery(index)}>
                                        <img src={image.src} alt={image.alt} />
                                        <div className="gallery-overlay">
                                            <i className="fas fa-search-plus"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="customer-testimonials">
                            <h3>{t('clients.testimonials')}</h3>
                            <div className="testimonials-grid">
                                <div className="testimonial" onClick={() => window.open('https://www.tripadvisor.com/ShowUserReviews-g312737-d26286044-r1028933671-Jasmine_Restaurant_Bar-Oludeniz_Fethiye_Mugla_Province_Turkish_Aegean_Coast.html', '_blank')}>
                                    <div className="testimonial-content">
                                        <div className="testimonial-quote">
                                            <i className="fas fa-quote-left"></i>
                                        </div>
                                        <p>"{t('clients.review1')}"</p>
                                        <div className="testimonial-author">
                                            <strong>{t('clients.review1.author')}</strong>
                                            <span>{t('clients.review1.location')}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial" onClick={() => window.open('https://www.tripadvisor.com/ShowUserReviews-g312737-d26286044-r1028933671-Jasmine_Restaurant_Bar-Oludeniz_Fethiye_Mugla_Province_Turkish_Aegean_Coast.html', '_blank')}>
                                    <div className="testimonial-content">
                                        <div className="testimonial-quote">
                                            <i className="fas fa-quote-left"></i>
                                        </div>
                                        <p>"{t('clients.review2')}"</p>
                                        <div className="testimonial-author">
                                            <strong>{t('clients.review2.author')}</strong>
                                            <span>{t('clients.review2.location')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonials-cta">
                                <a
                                    href="https://www.tripadvisor.com/ShowUserReviews-g312737-d26286044-r1028933671-Jasmine_Restaurant_Bar-Oludeniz_Fethiye_Mugla_Province_Turkish_Aegean_Coast.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary testimonials-btn"
                                >
                                    <i className="fa fa-tripadvisor"></i>
                                    {t('clients.read-reviews')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Modal */}
                {selectedImage !== null && (
                    <div className="gallery-modal" onClick={closeGallery}>
                        <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="gallery-close" onClick={closeGallery}>
                                <i className="fas fa-times"></i>
                            </button>
                            <button className="gallery-prev" onClick={prevImage}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <img src={customerImages[selectedImage].src} alt={customerImages[selectedImage].alt} />
                            <button className="gallery-next" onClick={nextImage}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HappyClientsSection;
