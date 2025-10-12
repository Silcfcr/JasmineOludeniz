import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Hamburger clicked, current state:', isMenuOpen);
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
                    {/* Debug info */}
                    <div style={{ color: 'red', fontSize: '12px', position: 'absolute', top: '10px', right: '10px' }}>
                        Menu: {isMenuOpen ? 'OPEN' : 'CLOSED'}
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
                    <div 
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                        onClick={toggleMenu}
                        style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            cursor: 'pointer',
                            padding: '10px',
                            backgroundColor: 'rgba(255,0,0,0.1)' // Temporary red background for debugging
                        }}
                    >
                        <span style={{ width: '25px', height: '3px', backgroundColor: '#1e3a8a', margin: '3px 0' }}></span>
                        <span style={{ width: '25px', height: '3px', backgroundColor: '#1e3a8a', margin: '3px 0' }}></span>
                        <span style={{ width: '25px', height: '3px', backgroundColor: '#1e3a8a', margin: '3px 0' }}></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
