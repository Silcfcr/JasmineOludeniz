import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import { useLanguage } from '../contexts/LanguageContext';

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
    const { t } = useLanguage();

    // Helper function to get translated menu item
    const getTranslatedMenuItem = (item: any) => {
        const translatedName = t(`menu.${item.id}.name`);
        const translatedDesc = t(`menu.${item.id}.desc`);

        return {
            ...item,
            name: translatedName !== `menu.${item.id}.name` ? translatedName : item.name,
            description: translatedDesc !== `menu.${item.id}.desc` ? translatedDesc : item.description
        };
    };

    // Helper function to get translated category
    const getTranslatedCategory = (category: any, tabKey: string) => {
        // Create a mapping of actual category titles to translation keys
        const categoryKeyMap: { [key: string]: string } = {
            'BREAKFAST PLATES': 'breakfast-plates',
            'EGGS & OMELETTES': 'eggs-omelettes',
            'TOAST & PANCAKES': 'toast-pancakes',
            'BREAKFAST DRINKS': 'breakfast-drinks',
            'BREAKFAST ADD ONS': 'breakfast-add-ons',
            'STARTERS': 'starters',
            'SALADS': 'salads',
            'BURGERS': 'burgers',
            'PIZZA': 'pizza',
            'PASTA': 'pasta',
            'CHICKEN DISHES': 'chicken-dishes',
            'MEAT DISHES': 'meat-dishes',
            'TRADITIONAL TURKISH MEALS': 'traditional-turkish-meals',
            'WRAPS': 'wraps',
            'TOASTIES': 'toasties',
            'SANDWICHES': 'sandwiches',
            'SOFT DRINKS': 'soft-drinks',
            'TEA & COFFEE': 'tea-coffee',
            'ALCOHOLIC DRINKS': 'alcoholic-drinks',
            'KIDS MENU': 'kids-menu',
            'DESSERTS': 'desserts'
        };

        const categoryKey = categoryKeyMap[category.title] || category.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        const translatedTitle = t(`menu.${tabKey}.${categoryKey}.title`);
        const translatedSubtitle = t(`menu.${tabKey}.${categoryKey}.subtitle`);

        return {
            ...category,
            title: translatedTitle !== `menu.${tabKey}.${categoryKey}.title` ? translatedTitle : category.title,
            subtitle: translatedSubtitle !== `menu.${tabKey}.${categoryKey}.subtitle` ? translatedSubtitle : category.subtitle
        };
    };

    return (
        <section className="menu-toggle-section">
            <div className="container">
                {/* Menu Content */}
                <div id="menu-content" className={`menu-content ${showMenu ? 'menu-visible' : 'menu-hidden'}`}>
                    <div className="interactive-menu">
                        <h3>{t('menu.title')}</h3>
                        <p>{t('menu.description')}</p>

                        {/* Shopping Cart Summary */}
                        <div className="cart-summary" id="cartSummary" style={{ display: cartTotal > 0 ? 'block' : 'none' }}>
                            <div className="cart-header">
                                <h4><i className="fas fa-shopping-cart"></i> {t('menu.your-order')}</h4>
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
                                                const foundItem = category.items.find((menuItem: any) => menuItem.id === itemId);
                                                if (foundItem) {
                                                    item = foundItem;
                                                    break;
                                                }
                                            }
                                            if (category.subcategories) {
                                                for (const subcategory of category.subcategories) {
                                                    const foundItem = subcategory.items.find((menuItem: any) => menuItem.id === itemId);
                                                    if (foundItem) {
                                                        item = foundItem;
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                        if (item) break;
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
                                    <i className="fas fa-trash"></i> {t('menu.clear-cart')}
                                </button>
                                <button className="btn btn-whatsapp" onClick={onSendWhatsAppOrder}>
                                    <i className="fab fa-whatsapp"></i> {t('menu.send-order')}
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
                                    {t(`menu.${tabKey}.title`)}
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
                                        {tabData.categories.map((category: any, categoryIndex: number) => {
                                            const translatedCategory = getTranslatedCategory(category, tabKey);
                                            return (
                                                <div key={categoryIndex} className="menu-category">
                                                    <h4><i className="fas fa-utensils"></i> {translatedCategory.title}</h4>
                                                    {translatedCategory.subtitle && (
                                                        <p className="category-subtitle">{translatedCategory.subtitle}</p>
                                                    )}
                                                    {translatedCategory.note && (
                                                        <p className="category-note">{translatedCategory.note}</p>
                                                    )}

                                                    {/* Main items */}
                                                    {translatedCategory.items && (
                                                        <div className="selectable-menu-items">
                                                            {translatedCategory.items.map((item: any) => {
                                                                const translatedItem = getTranslatedMenuItem(item);
                                                                return (
                                                                    <div key={item.id} className="selectable-menu-item">
                                                                        <div className="item-info">
                                                                            <div className="item-name">{translatedItem.name}</div>
                                                                            {translatedItem.description && (
                                                                                <div className="item-description">{translatedItem.description}</div>
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
                                                                                {t('menu.add-to-cart')}
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    )}

                                                    {/* Subcategories (for Light Meals) */}
                                                    {translatedCategory.subcategories && (
                                                        <div className="subcategories">
                                                            {translatedCategory.subcategories.map((subcategory: any, subIndex: number) => (
                                                                <div key={subIndex} className="subcategory">
                                                                    <h5>{subcategory.title}</h5>
                                                                    <div className="selectable-menu-items">
                                                                        {subcategory.items.map((item: any) => {
                                                                            const translatedSubItem = getTranslatedMenuItem(item);
                                                                            return (
                                                                                <div key={item.id} className="selectable-menu-item">
                                                                                    <div className="item-info">
                                                                                        <div className="item-name">{translatedSubItem.name}</div>
                                                                                        {translatedSubItem.description && (
                                                                                            <div className="item-description">{translatedSubItem.description}</div>
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
                                                                                            {t('menu.add-to-cart')}
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Add-ons */}
                                                    {category.addOns && (
                                                        <div className="add-ons">
                                                            <h5>{t('menu.add-ons-title')}</h5>
                                                            <div className="selectable-menu-items">
                                                                {category.addOns.map((addOn: any) => (
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
                                                                                {t('menu.add-to-cart')}
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
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