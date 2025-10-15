import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>{t('hero.welcome')}</h1>
                    <h2>{t('hero.subtitle')}</h2>
                    <p>{t('hero.description')}</p>
                    <div className="hero-buttons">
                        <a href="#restaurant" className="btn btn-primary">{t('hero.explore-restaurant')}</a>
                        <a href="#rooms" className="btn btn-secondary">{t('hero.view-rooms')}</a>
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
