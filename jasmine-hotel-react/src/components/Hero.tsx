import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Welcome to Jasmine</h1>
                        <h2 className="hero-subtitle">
                            <span>Restaurant & Bar</span>
                            <span className="separator">•</span>
                            <span>Hotel</span>
                        </h2>
                        <p className="hero-description">
                            Experience comfortable family accommodation and delicious home-style dining in the heart of Oludeniz, Turkey.
                            Where every guest becomes part of our family.
                        </p>
                        <div className="hero-features">
                            <div className="hero-feature">
                                <i className="fas fa-utensils"></i>
                                <span>Traditional Turkish Cuisine</span>
                            </div>
                            <div className="hero-feature">
                                <i className="fas fa-swimming-pool"></i>
                                <span>Beautiful Pool Area</span>
                            </div>
                            <div className="hero-feature">
                                <i className="fas fa-heart"></i>
                                <span>Family-Friendly</span>
                            </div>
                        </div>
                        <div className="hero-buttons">
                            <a href="#restaurant" className="btn btn-primary">
                                <i className="fas fa-utensils"></i>
                                <span>Explore Restaurant</span>
                            </a>
                            <a href="#rooms" className="btn btn-secondary">
                                <i className="fas fa-bed"></i>
                                <span>View Rooms</span>
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-image-container">
                            <div className="hero-image">
                                <img src="/Img/poolFromR.jpeg" alt="Jasmine Pool Area" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
