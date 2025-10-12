import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Force alert on component load
    React.useEffect(() => {
        alert('HEADER COMPONENT LOADED - VERSION 2!');
    }, []);

    const toggleMenu = () => {
        console.log('Hamburger clicked, current state:', isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    console.log('Header component rendering, isMenuOpen:', isMenuOpen);

    return (
        <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'rgba(255,0,0,0.1)', 
            zIndex: 9999,
            pointerEvents: 'none'
        }}>
            <div style={{ 
                position: 'absolute', 
                top: '20px', 
                left: '20px', 
                background: 'yellow', 
                padding: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'black',
                zIndex: 10000,
                pointerEvents: 'auto'
            }}>
                HEADER COMPONENT IS RENDERING!
            </div>
        </div>
        <header className="header">
            <nav className="nav">
                <div className="nav-container">
                    <div className="logo">
                        <img src="/jasmine-logo.png" alt="Jasmine Logo" className="logo-img" />
                    </div>
                    
                    {/* Debug text */}
                    <div style={{ 
                        position: 'absolute', 
                        top: '10px', 
                        left: '10px', 
                        color: 'red', 
                        fontSize: '12px',
                        zIndex: 9999,
                        background: 'yellow',
                        padding: '5px'
                    }}>
                        DEBUG: Header loaded
                    </div>
                    
                    {/* Test button - always visible */}
                    <button 
                        onClick={() => {
                            console.log('TEST BUTTON CLICKED!');
                            alert('Test button works!');
                        }}
                        style={{ 
                            position: 'fixed',
                            top: '50px',
                            right: '10px',
                            background: 'green',
                            color: 'white',
                            border: 'none',
                            padding: '10px',
                            zIndex: 9999,
                            borderRadius: '5px'
                        }}
                    >
                        TEST
                    </button>
                    
                    {/* Desktop Menu */}
                    <ul className="nav-menu desktop-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#restaurant">Restaurant</a></li>
                        <li><a href="#hotel">Hotel</a></li>
                        <li><a href="#rooms">Rooms</a></li>
                        <li><a href="#car-rental">Car Rental</a></li>
                        <li><a href="#customers">Our Customers</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                    {/* Mobile Hamburger Button */}
                    <button 
                        className="mobile-hamburger"
                        onClick={toggleMenu}
                        style={{ 
                            display: 'block',
                            background: 'red',
                            border: '3px solid blue',
                            padding: '20px',
                            cursor: 'pointer',
                            position: 'fixed',
                            top: '10px',
                            right: '10px',
                            zIndex: 9999,
                            borderRadius: '5px'
                        }}
                    >
                        <div style={{ color: 'white', fontSize: '10px', marginBottom: '5px' }}>MENU</div>
                        <div style={{ 
                            width: '25px', 
                            height: '3px', 
                            backgroundColor: 'white', 
                            margin: '3px 0',
                            transition: '0.3s'
                        }}></div>
                        <div style={{ 
                            width: '25px', 
                            height: '3px', 
                            backgroundColor: 'white', 
                            margin: '3px 0',
                            transition: '0.3s'
                        }}></div>
                        <div style={{ 
                            width: '25px', 
                            height: '3px', 
                            backgroundColor: 'white', 
                            margin: '3px 0',
                            transition: '0.3s'
                        }}></div>
                    </button>
                    
                    {/* Mobile Menu */}
                    <div 
                        className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
                        style={{
                            position: 'fixed',
                            top: '70px',
                            left: isMenuOpen ? '0' : '-100%',
                            width: '100%',
                            height: 'calc(100vh - 70px)',
                            backgroundColor: 'white',
                            transition: 'left 0.3s ease',
                            zIndex: 1000,
                            padding: '2rem',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                        }}
                    >
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ margin: '1rem 0' }}>
                                <a href="#home" onClick={closeMenu} style={{ 
                                    display: 'block', 
                                    padding: '1rem', 
                                    textDecoration: 'none', 
                                    color: '#1e3a8a',
                                    fontSize: '1.2rem'
                                }}>Home</a>
                            </li>
                            <li style={{ margin: '1rem 0' }}>
                                <a href="#restaurant" onClick={closeMenu} style={{ 
                                    display: 'block', 
                                    padding: '1rem', 
                                    textDecoration: 'none', 
                                    color: '#1e3a8a',
                                    fontSize: '1.2rem'
                                }}>Restaurant</a>
                            </li>
                            <li style={{ margin: '1rem 0' }}>
                                <a href="#hotel" onClick={closeMenu} style={{ 
                                    display: 'block', 
                                    padding: '1rem', 
                                    textDecoration: 'none', 
                                    color: '#1e3a8a',
                                    fontSize: '1.2rem'
                                }}>Hotel</a>
                            </li>
                            <li style={{ margin: '1rem 0' }}>
                                <a href="#rooms" onClick={closeMenu} style={{ 
                                    display: 'block', 
                                    padding: '1rem', 
                                    textDecoration: 'none', 
                                    color: '#1e3a8a',
                                    fontSize: '1.2rem'
                                }}>Rooms</a>
                            </li>
                            <li style={{ margin: '1rem 0' }}>
                                <a href="#car-rental" onClick={closeMenu} style={{ 
                                    display: 'block', 
                                    padding: '1rem', 
                                    textDecoration: 'none', 
                                    color: '#1e3a8a',
                                    fontSize: '1.2rem'
                                }}>Car Rental</a>
                            </li>
                            <li style={{ margin: '1rem 0' }}>
                                <a href="#customers" onClick={closeMenu} style={{ 
                                    display: 'block', 
                                    padding: '1rem', 
                                    textDecoration: 'none', 
                                    color: '#1e3a8a',
                                    fontSize: '1.2rem'
                                }}>Our Customers</a>
                            </li>
                            <li style={{ margin: '1rem 0' }}>
                                <a href="#contact" onClick={closeMenu} style={{ 
                                    display: 'block', 
                                    padding: '1rem', 
                                    textDecoration: 'none', 
                                    color: '#1e3a8a',
                                    fontSize: '1.2rem'
                                }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
