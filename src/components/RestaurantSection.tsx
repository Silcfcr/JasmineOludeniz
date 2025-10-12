import React from 'react';

interface RestaurantSectionProps {
    onToggleMenu: () => void;
    menuToggleText: string;
}

const RestaurantSection: React.FC<RestaurantSectionProps> = ({ onToggleMenu, menuToggleText }) => {
    return (
        <section id="restaurant" className="hotel-section">
            <div className="container">
                <div className="hotel-section-card">
                    <div className="section-header">
                        <h2>Our Restaurant & Bar</h2>
                        <p>Enjoy delicious home-style Turkish meals in a relaxed family atmosphere</p>
                    </div>
                    <div className="hotel-content">
                        <div className="hotel-info">
                            <h3>Family-Friendly Dining</h3>
                            <p>Our restaurant offers a warm, welcoming atmosphere perfect for families. Enjoy traditional Turkish home cooking, fresh local ingredients, and a comfortable setting where everyone feels at home.</p>
                            <ul className="features">
                                <li><i className="fas fa-utensils"></i> Traditional Turkish Home Cooking</li>
                                <li><i className="fas fa-cocktail"></i> Local Drinks & Refreshments</li>
                                <li><i className="fas fa-swimming-pool"></i> Poolside Family Meals</li>
                                <li><i className="fas fa-heart"></i> Kid-Friendly Menu</li>
                            </ul>
                        </div>
                        <div className="hotel-image">
                            <img src="/Img/front.jpeg" alt="Hotel Exterior" />
                        </div>
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
