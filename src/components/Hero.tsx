import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Welcome to Jasmine</h1>
                    <h2>Restaurant & Bar • Hotel</h2>
                    <p>Experience comfortable family accommodation and delicious home-style dining in the heart of Oludeniz, Turkey.</p>
                    <div className="hero-buttons">
                        <a href="#restaurant" className="btn btn-primary">Explore Restaurant</a>
                        <a href="#rooms" className="btn btn-secondary">View Rooms</a>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/Img/poolFromR.jpeg" alt="Jasmine Pool Area" />
            </div>
        </section>
    );
};

export default Hero;
