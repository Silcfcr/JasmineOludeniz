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


                    {/* Desktop Menu */}
                    <ul className="nav-menu desktop-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#restaurant">Restaurant</a></li>
                        <li><a href="#hotel">Hotel</a></li>
                        <li><a href="#rooms">Rooms</a></li>
                        <li><a href="#car-rental">Car Rental</a></li>
                        <li><a href="#customers">Our Customers</a></li>
                        <li><a href="#dogs">Our Dogs</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="mobile-hamburger"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>

                    {/* Mobile Menu */}
                    <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                        <ul className="mobile-menu-list">
                            <li><a href="#home" onClick={closeMenu}>Home</a></li>
                            <li><a href="#restaurant" onClick={closeMenu}>Restaurant</a></li>
                            <li><a href="#hotel" onClick={closeMenu}>Hotel</a></li>
                            <li><a href="#rooms" onClick={closeMenu}>Rooms</a></li>
                            <li><a href="#car-rental" onClick={closeMenu}>Car Rental</a></li>
                            <li><a href="#customers" onClick={closeMenu}>Our Customers</a></li>
                            <li><a href="#dogs" onClick={closeMenu}>Our Dogs</a></li>
                            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
