import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-container">
                    <div className="logo">
                        <img src="/jasmine-logo.png" alt="Jasmine Logo" className="logo-img" />
                    </div>
                    <ul className="nav-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#restaurant">Restaurant</a></li>
                        <li><a href="#hotel">Hotel</a></li>
                        <li><a href="#rooms">Rooms</a></li>
                        <li><a href="#car-rental">Car Rental</a></li>
                        <li><a href="#customers">Our Customers</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
