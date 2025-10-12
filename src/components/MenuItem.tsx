import React from 'react';

interface MenuItemProps {
    name: string;
    description: string;
    price: number;
    quantity: number;
    onQuantityChange: (quantity: number) => void;
    onAddToCart: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
    name,
    description,
    price,
    quantity,
    onQuantityChange,
    onAddToCart
}) => {
    return (
        <div className="selectable-menu-item">
            <div className="item-info">
                <div className="item-name">{name}</div>
                <div className="item-description">{description}</div>
                <div className="item-price">${price.toFixed(2)}</div>
            </div>
            <div className="item-controls">
                <button
                    className="quantity-btn"
                    onClick={() => onQuantityChange(quantity - 1)}
                    disabled={quantity <= 0}
                >
                    -
                </button>
                <span className="quantity">{quantity}</span>
                <button
                    className="quantity-btn"
                    onClick={() => onQuantityChange(quantity + 1)}
                >
                    +
                </button>
                <button
                    className="btn btn-primary"
                    onClick={onAddToCart}
                    disabled={quantity <= 0}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default MenuItem;
