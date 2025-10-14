import React, { useState } from 'react';
import { menuData } from '../data/menuData';

interface MenuToggleSectionProps {
    showMenu: boolean;
    cart: { [key: string]: number };
    cartTotal: number;
    onQuantityChange: (itemId: string, quantity: number) => void;
    onAddToCart: (itemId: string) => void;
    onClearCart: () => void;
    onSendWhatsAppOrder: () => void;
}

const MenuToggleSection: React.FC<MenuToggleSectionProps> = ({
    showMenu,
    cart,
    cartTotal,
    onQuantityChange,
    onAddToCart,
    onClearCart,
    onSendWhatsAppOrder
}) => {
    const [activeTab, setActiveTab] = useState('breakfast');

    return (
        <section className="menu-toggle-section">
            <div className="container">
                {/* Menu Content */}
                <div id="menu-content" className={`menu-content ${showMenu ? 'menu-visible' : 'menu-hidden'}`}>
                    <div className="interactive-menu">
                        <h3>Take Away Menu - Order Here</h3>
                        <p>Select your items and quantities, then place your order!</p>

                        {/* Shopping Cart Summary */}
                        <div className="cart-summary" id="cartSummary" style={{ display: cartTotal > 0 ? 'block' : 'none' }}>
                            <div className="cart-header">
                                <h4><i className="fas fa-shopping-cart"></i> Your Order</h4>
                                <span className="cart-total" id="cartTotal">₺{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="cart-items" id="cartItems">
                                {Object.entries(cart).map(([itemId, quantity]) => {
                                    if (quantity <= 0) return null;

                                    // Find the item in menu data
                                    let item = null;
                                    for (const tabData of Object.values(menuData)) {
                                        for (const category of tabData.categories) {
                                            if (category.items) {
                                                const foundItem = category.items.find(catItem => catItem.id === itemId);
                                                if (foundItem) {
                                                    item = foundItem;
                                                    break;
                                                }
                                            }
                                            if (category.subcategories) {
                                                for (const subcategory of category.subcategories) {
                                                    const foundItem = subcategory.items.find(catItem => catItem.id === itemId);
                                                    if (foundItem) {
                                                        item = foundItem;
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    if (!item) return null;

                                    return (
                                        <div key={itemId} className="cart-item">
                                            <span className="item-name">{item.name}</span>
                                            <div className="item-controls">
                                                <button onClick={() => onQuantityChange(itemId, quantity - 1)}>-</button>
                                                <span className="quantity">{quantity}</span>
                                                <button onClick={() => onQuantityChange(itemId, quantity + 1)}>+</button>
                                            </div>
                                            <span className="item-price">₺{(item.price * quantity).toFixed(2)}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="cart-actions">
                                <button className="btn btn-secondary" onClick={onClearCart}>
                                    <i className="fas fa-trash"></i> Clear Cart
                                </button>
                                <button className="btn btn-whatsapp" onClick={onSendWhatsAppOrder}>
                                    <i className="fab fa-whatsapp"></i> Send Order via WhatsApp
                                </button>
                            </div>
                        </div>

                        {/* Menu Tabs */}
                        <div className="menu-tabs">
                            {Object.entries(menuData).map(([tabKey, tabData]) => (
                                <button
                                    key={tabKey}
                                    className={`menu-tab ${activeTab === tabKey ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tabKey)}
                                >
                                    <i className={tabData.icon}></i>
                                    {tabData.title}
                                </button>
                            ))}
                        </div>

                        {/* Menu Content Tabs */}
                        <div className="menu-content-tabs">
                            {Object.entries(menuData).map(([tabKey, tabData]) => (
                                <div
                                    key={tabKey}
                                    className={`menu-tab-content ${activeTab === tabKey ? 'active' : ''}`}
                                >
                                    <div className="menu-categories">
                                        {tabData.categories.map((category, categoryIndex) => (
                                            <div key={categoryIndex} className="menu-category">
                                                <h4><i className="fas fa-utensils"></i> {category.title}</h4>
                                                {category.subtitle && (
                                                    <p className="category-subtitle">{category.subtitle}</p>
                                                )}
                                                {category.note && (
                                                    <p className="category-note">{category.note}</p>
                                                )}

                                                {/* Main items */}
                                                {category.items && (
                                                    <div className="selectable-menu-items">
                                                        {category.items.map((item) => (
                                                            <div key={item.id} className="selectable-menu-item">
                                                                <div className="item-info">
                                                                    <div className="item-name">{item.name}</div>
                                                                    {item.description && (
                                                                        <div className="item-description">{item.description}</div>
                                                                    )}
                                                                    <div className="item-price">₺{item.price}</div>
                                                                </div>
                                                                <div className="item-controls">
                                                                    <button
                                                                        className="quantity-btn"
                                                                        onClick={() => onQuantityChange(item.id, (cart[item.id] || 0) - 1)}
                                                                        disabled={(cart[item.id] || 0) <= 0}
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <span className="quantity">{cart[item.id] || 0}</span>
                                                                    <button
                                                                        className="quantity-btn"
                                                                        onClick={() => onQuantityChange(item.id, (cart[item.id] || 0) + 1)}
                                                                    >
                                                                        +
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-primary"
                                                                        onClick={() => onAddToCart(item.id)}
                                                                        disabled={(cart[item.id] || 0) <= 0}
                                                                    >
                                                                        Add to Cart
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Subcategories (for Light Meals) */}
                                                {category.subcategories && (
                                                    <div className="subcategories">
                                                        {category.subcategories.map((subcategory, subIndex) => (
                                                            <div key={subIndex} className="subcategory">
                                                                <h5>{subcategory.title}</h5>
                                                                <div className="selectable-menu-items">
                                                                    {subcategory.items.map((item) => (
                                                                        <div key={item.id} className="selectable-menu-item">
                                                                            <div className="item-info">
                                                                                <div className="item-name">{item.name}</div>
                                                                                {item.description && (
                                                                                    <div className="item-description">{item.description}</div>
                                                                                )}
                                                                                <div className="item-price">₺{item.price}</div>
                                                                            </div>
                                                                            <div className="item-controls">
                                                                                <button
                                                                                    className="quantity-btn"
                                                                                    onClick={() => onQuantityChange(item.id, (cart[item.id] || 0) - 1)}
                                                                                    disabled={(cart[item.id] || 0) <= 0}
                                                                                >
                                                                                    -
                                                                                </button>
                                                                                <span className="quantity">{cart[item.id] || 0}</span>
                                                                                <button
                                                                                    className="quantity-btn"
                                                                                    onClick={() => onQuantityChange(item.id, (cart[item.id] || 0) + 1)}
                                                                                >
                                                                                    +
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary"
                                                                                    onClick={() => onAddToCart(item.id)}
                                                                                    disabled={(cart[item.id] || 0) <= 0}
                                                                                >
                                                                                    Add to Cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Add-ons */}
                                                {category.addOns && (
                                                    <div className="add-ons">
                                                        <h5>Add Ons:</h5>
                                                        <div className="selectable-menu-items">
                                                            {category.addOns.map((addOn) => (
                                                                <div key={addOn.id} className="selectable-menu-item">
                                                                    <div className="item-info">
                                                                        <div className="item-name">{addOn.name}</div>
                                                                        <div className="item-price">₺{addOn.price}</div>
                                                                    </div>
                                                                    <div className="item-controls">
                                                                        <button
                                                                            className="quantity-btn"
                                                                            onClick={() => onQuantityChange(addOn.id, (cart[addOn.id] || 0) - 1)}
                                                                            disabled={(cart[addOn.id] || 0) <= 0}
                                                                        >
                                                                            -
                                                                        </button>
                                                                        <span className="quantity">{cart[addOn.id] || 0}</span>
                                                                        <button
                                                                            className="quantity-btn"
                                                                            onClick={() => onQuantityChange(addOn.id, (cart[addOn.id] || 0) + 1)}
                                                                        >
                                                                            +
                                                                        </button>
                                                                        <button
                                                                            className="btn btn-primary"
                                                                            onClick={() => onAddToCart(addOn.id)}
                                                                            disabled={(cart[addOn.id] || 0) <= 0}
                                                                        >
                                                                            Add to Cart
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuToggleSection;
