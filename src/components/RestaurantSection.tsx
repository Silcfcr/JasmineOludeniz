import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface RestaurantSectionProps {
    onToggleMenu: () => void;
    menuToggleText: string;
}

const RestaurantSection: React.FC<RestaurantSectionProps> = ({ onToggleMenu, menuToggleText }) => {
    const { t } = useLanguage();
    return (
        <section id="restaurant" className="hotel-section">
            <div className="container">
                <div className="section-header">
                    <h2>{t('restaurant.title')}</h2>
                    <p>{t('restaurant.subtitle')}</p>
                </div>
                <div className="hotel-content">
                    <div className="hotel-info">
                        <h3>{t('restaurant.family-dining')}</h3>
                        <p>{t('restaurant.description')}</p>
                        <ul className="features">
                            <li><i className="fas fa-utensils"></i> {t('restaurant.features.traditional')}</li>
                            <li><i className="fas fa-cocktail"></i> {t('restaurant.features.drinks')}</li>
                            <li><i className="fas fa-swimming-pool"></i> {t('restaurant.features.poolside')}</li>
                            <li><i className="fas fa-heart"></i> {t('restaurant.features.kid-friendly')}</li>
                        </ul>
                    </div>
                    <div className="hotel-image">
                        <img src="/Img/front.jpeg" alt="Hotel Exterior" />
                    </div>
                </div>
            </div>
            {/* Menu Center Section */}
            <section className="menu-center-section">
                <div className="menu-center-container">
                    <button className="btn btn-primary menu-center-btn" onClick={onToggleMenu}>
                        <i className="fas fa-utensils"></i>
                        <span id="menuToggleText">{menuToggleText}</span>
                        <i className="fas fa-chevron-down" id="menuToggleIcon"></i>
                    </button>
                </div>
            </section>
        </section>
    );
};

export default RestaurantSection;
