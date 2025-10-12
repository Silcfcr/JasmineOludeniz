import React from 'react';

const HotelSection: React.FC = () => {
    return (
        <section id="hotel" className="hotel-section">
            <div className="container">
                <div className="hotel-section-card">
                    <div className="section-header">
                        <h2>Jasmine Hotel</h2>
                        <p>Comfortable family accommodation in the heart of Oludeniz</p>
                    </div>
                    <div className="hotel-content">
                        <div className="hotel-info">
                            <h3>Family-Friendly Accommodation</h3>
                            <p>Our hotel offers comfortable rooms and apartments perfect for families. Enjoy modern amenities, beautiful surroundings, and a warm, welcoming atmosphere that makes you feel at home.</p>
                            <ul className="features">
                                <li><i className="fas fa-wifi"></i> Free WiFi</li>
                                <li><i className="fas fa-swimming-pool"></i> Swimming Pool</li>
                                <li><i className="fas fa-car"></i> Free Parking</li>
                                <li><i className="fas fa-heart"></i> Family-Friendly Service</li>
                                <li><i className="fas fa-child"></i> Kid-Friendly Environment</li>
                            </ul>
                        </div>
                        <div className="hotel-image">
                            <img src="/Img/poolNight.jpeg" alt="Hotel Pool at Night" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelSection;
