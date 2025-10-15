import React from 'react';

interface FloatingCartIconProps {
    cartTotal: number;
    cartItemCount: number;
    onClick: () => void;
}

const FloatingCartIcon: React.FC<FloatingCartIconProps> = ({ cartTotal, cartItemCount, onClick }) => {
    // Only show if there are items in the cart
    if (cartItemCount === 0) return null;

    return (
        <div className="floating-cart-icon" onClick={onClick}>
            <div className="cart-icon-container">
                <i className="fas fa-shopping-cart"></i>
                {cartItemCount > 0 && (
                    <span className="cart-badge">{cartItemCount}</span>
                )}
            </div>
            <div className="cart-total-display">
                ₺{cartTotal.toFixed(2)}
            </div>
        </div>
    );
};

export default FloatingCartIcon;
