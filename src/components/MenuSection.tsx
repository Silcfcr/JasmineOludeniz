import React from 'react';
import MenuItem from './MenuItem';

interface MenuItemData {
    id: string;
    name: string;
    description: string;
    price: number;
}

interface MenuSectionProps {
    title: string;
    items: MenuItemData[];
    cart: { [key: string]: number };
    onQuantityChange: (itemId: string, quantity: number) => void;
    onAddToCart: (itemId: string) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({
    title,
    items,
    cart,
    onQuantityChange,
    onAddToCart
}) => {
    return (
        <div className="menu-category">
            <h4>{title}</h4>
            <div className="selectable-menu-items">
                {items.map((item) => (
                    <MenuItem
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        quantity={cart[item.id] || 0}
                        onQuantityChange={(quantity) => onQuantityChange(item.id, quantity)}
                        onAddToCart={() => onAddToCart(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuSection;
