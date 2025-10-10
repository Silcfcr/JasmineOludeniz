import React, { useState } from 'react';

const HappyClientsSection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const customerImages = [
        { src: '/Img/costumers/cos1.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos2.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos3.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos4.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos5.jpeg', alt: 'Happy customers at Jasmine' },
        { src: '/Img/costumers/cos6.jpeg', alt: 'Happy customers at Jasmine' }
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
                        <h2>Our Happy Customers</h2>
                        <p>See the wonderful moments our guests have shared with us</p>
                    </div>

                    <div className="customer-gallery">
                        {customerImages.map((image, index) => (
                            <div key={index} className="gallery-item" onClick={() => openGallery(index)}>
                                <img src={image.src} alt={image.alt} />
                                <div className="gallery-overlay">
                                    <i className="fas fa-search-plus"></i>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="customer-testimonials">
                        <div className="testimonial" onClick={() => window.open('https://www.tripadvisor.com/ShowUserReviews-g312737-d26286044-r1028933671-Jasmine_Restaurant_Bar-Oludeniz_Fethiye_Mugla_Province_Turkish_Aegean_Coast.html', '_blank')}>
                            <div className="testimonial-content">
                                <p>"Amazing place! The food was delicious and the staff was so friendly. We had a wonderful time at Jasmine Restaurant & Hotel."</p>
                                <div className="testimonial-author">
                                    <strong>Sarah & John</strong>
                                    <span>UK Visitors</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial" onClick={() => window.open('https://www.tripadvisor.com/ShowUserReviews-g312737-d26286044-r1028933671-Jasmine_Restaurant_Bar-Oludeniz_Fethiye_Mugla_Province_Turkish_Aegean_Coast.html', '_blank')}>
                            <div className="testimonial-content">
                                <p>Excellent food,excellent hosts and the dogs made it even more special we will certainly be back again , well worth a visit!"</p>
                                <div className="testimonial-author">
                                    <strong>Maria & Carlos</strong>
                                    <span>Spanish Tourists</span>
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
                                Read More Reviews on TripAdvisor
                            </a>
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
