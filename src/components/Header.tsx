import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();

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
                        <li><a href="#home">{t('nav.home')}</a></li>
                        <li><a href="#restaurant">{t('nav.restaurant')}</a></li>
                        <li><a href="#hotel">{t('nav.hotel')}</a></li>
                        <li><a href="#rooms">{t('nav.rooms')}</a></li>
                        <li><a href="#car-rental">{t('nav.car-rental')}</a></li>
                        <li><a href="#customers">{t('nav.customers')}</a></li>
                        <li><a href="#dogs">{t('nav.dogs')}</a></li>
                        <li><a href="#contact">{t('nav.contact')}</a></li>
                    </ul>

                    {/* Language Switcher */}
                    <LanguageSwitcher />

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
                            <li><a href="#home" onClick={closeMenu}>{t('nav.home')}</a></li>
                            <li><a href="#restaurant" onClick={closeMenu}>{t('nav.restaurant')}</a></li>
                            <li><a href="#hotel" onClick={closeMenu}>{t('nav.hotel')}</a></li>
                            <li><a href="#rooms" onClick={closeMenu}>{t('nav.rooms')}</a></li>
                            <li><a href="#car-rental" onClick={closeMenu}>{t('nav.car-rental')}</a></li>
                            <li><a href="#customers" onClick={closeMenu}>{t('nav.customers')}</a></li>
                            <li><a href="#dogs" onClick={closeMenu}>{t('nav.dogs')}</a></li>
                            <li><a href="#contact" onClick={closeMenu}>{t('nav.contact')}</a></li>
                        </ul>
                        <div className="mobile-language-switcher">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
