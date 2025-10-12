import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-container">
                    <div className="logo">
                        <img src="/jasmine-logo.png" alt="Jasmine Logo" className="logo-img" />
                    </div>
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#restaurant" onClick={closeMenu}>Restaurant</a></li>
                        <li><a href="#hotel" onClick={closeMenu}>Hotel</a></li>
                        <li><a href="#rooms" onClick={closeMenu}>Rooms</a></li>
                        <li><a href="#car-rental" onClick={closeMenu}>Car Rental</a></li>
                        <li><a href="#customers" onClick={closeMenu}>Our Customers</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
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
