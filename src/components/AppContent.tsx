import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from './Header';
import Hero from './Hero';
import RestaurantSection from './RestaurantSection';
import MenuToggleSection from './MenuToggleSection';
import HotelSection from './HotelSection';
import RoomsSection from './RoomsSection';
import SpecialOffer from './SpecialOffer';
import HappyClientsSection from './HappyClientsSection';
import CarRentalSection from './CarRentalSection';
import DogsSection from './DogsSection';
import Footer from './Footer';
import DepartureModal from './DepartureModal';
import FloatingCartIcon from './FloatingCartIcon';
import { menuData } from '../data/menuData';
import { createWhatsAppUrl } from '../constants/whatsapp';

const AppContent: React.FC = () => {
    const { t } = useLanguage();
    const [showMenu, setShowMenu] = useState(false);
    const [cart, setCart] = useState<{ [key: string]: number }>({});
    const [cartTotal, setCartTotal] = useState(0);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleQuantityChange = (itemId: string, quantity: number) => {
        setCart(prev => ({
            ...prev,
            [itemId]: Math.max(0, quantity)
        }));
    };

    const handleAddToCart = (itemId: string) => {
        setCart(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const clearCart = () => {
        setCart({});
    };

    const sendWhatsAppOrder = () => {
        if (Object.keys(cart).length === 0) {
            alert('Your cart is empty!');
            return;
        }

        let orderMessage = '🍽️ *Take Away Order from Jasmine Restaurant*\n\n';

        Object.entries(cart).forEach(([itemId, quantity]) => {
            if (quantity > 0) {
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

                if (item) {
                    orderMessage += `• ${item.name} x${quantity} - ₺${(item.price * quantity).toFixed(2)}\n`;
                }
            }
        });
        orderMessage += `\nTotal: ₺${cartTotal}`;

        const whatsappUrl = createWhatsAppUrl(orderMessage);
        window.open(whatsappUrl, '_blank');
    };

    // Calculate cart total whenever cart changes
    useEffect(() => {
        let total = 0;
        Object.entries(cart).forEach(([itemId, quantity]) => {
            if (quantity > 0) {
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

                if (item) {
                    total += item.price * quantity;
                }
            }
        });
        setCartTotal(total);
    }, [cart]);

    const handleWhatsAppClick = (roomTitle: string, price: number, selectedDates?: { checkin: string; checkout: string; numberOfPeople: number } | null) => {
        let message = `🏨 *Room Booking Inquiry*\n\n`;
        message += `Room: ${roomTitle}\n`;
        message += `Price: £${price} per night\n`;

        if (selectedDates) {
            message += `Check-in: ${selectedDates.checkin}\n`;
            message += `Check-out: ${selectedDates.checkout}\n`;
            const numberOfPeople = selectedDates.numberOfPeople || 2;
            message += `👥 Guests: ${numberOfPeople}`;
        }

        message += `\n\nI'm interested in booking this room. Please provide more information about availability.`;

        const whatsappUrl = createWhatsAppUrl(message);
        window.open(whatsappUrl, '_blank');
    };

    const handleCarRentalContact = () => {
        const message = "🚗 *Car Rental Inquiry*\n\nI'm interested in renting a car. Could you provide more information about available vehicles, rates, and rental terms?";
        const whatsappUrl = createWhatsAppUrl(message);
        window.open(whatsappUrl, '_blank');
    };

    const scrollToCart = () => {
        const cartElement = document.getElementById('cartSummary');
        if (cartElement) {
            cartElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else {
            // If cart summary is not visible, scroll to the menu section
            const menuElement = document.querySelector('.menu-toggle-section');
            if (menuElement) {
                menuElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    // Calculate total number of items in cart
    const cartItemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);

    return (
        <div className="App">
            <Header />

            <Hero />

            <RestaurantSection
                onToggleMenu={toggleMenu}
                menuToggleText={showMenu ? t('common.hide-menu') : t('common.view-menu')}
            />

            <MenuToggleSection
                showMenu={showMenu}
                cart={cart}
                cartTotal={cartTotal}
                onQuantityChange={handleQuantityChange}
                onAddToCart={handleAddToCart}
                onClearCart={clearCart}
                onSendWhatsAppOrder={sendWhatsAppOrder}
            />

            <HotelSection />

            <RoomsSection onWhatsAppClick={handleWhatsAppClick} />

            <SpecialOffer />

            <CarRentalSection onContactClick={handleCarRentalContact} />

            <HappyClientsSection />

            <DogsSection />

            <Footer />

            <DepartureModal />

            <FloatingCartIcon
                cartTotal={cartTotal}
                cartItemCount={cartItemCount}
                onClick={scrollToCart}
            />
        </div>
    );
};

export default AppContent;
