import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RestaurantSection from './components/RestaurantSection';
import MenuToggleSection from './components/MenuToggleSection';
import HotelSection from './components/HotelSection';
import RoomsSection from './components/RoomsSection';
import SpecialOffer from './components/SpecialOffer';
import HappyClientsSection from './components/HappyClientsSection';
import CarRentalSection from './components/CarRentalSection';
import Footer from './components/Footer';
import DepartureModal from './components/DepartureModal';
import { menuData } from './data/menuData';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [cartTotal, setCartTotal] = useState(0);

  // Update cart total when cart changes
  useEffect(() => {
    let total = 0;
    Object.entries(cart).forEach(([itemId, quantity]) => {
      // Find the item price from the complete menu data
      // Search through all categories and subcategories to find the item
      for (const tabData of Object.values(menuData)) {
        for (const category of tabData.categories) {
          if (category.items) {
            const item = category.items.find(item => item.id === itemId);
            if (item) {
              total += item.price * quantity;
              break;
            }
          }
          if (category.subcategories) {
            for (const subcategory of category.subcategories) {
              const item = subcategory.items.find(item => item.id === itemId);
              if (item) {
                total += item.price * quantity;
                break;
              }
            }
          }
        }
      }
    });
    setCartTotal(total);
  }, [cart]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  const calculateNights = (checkinDate: string, checkoutDate: string) => {
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    const timeDiff = checkout.getTime() - checkin.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const handleWhatsAppClick = (roomTitle: string, price: number, selectedDates?: { checkin: string; checkout: string } | null) => {
    let message = `Hello! I'm interested in booking the ${roomTitle} at Jasmine Restaurant & Bar Hotel.`;

    if (selectedDates && selectedDates.checkin && selectedDates.checkout) {
      const checkinFormatted = formatDate(selectedDates.checkin);
      const checkoutFormatted = formatDate(selectedDates.checkout);
      const nights = calculateNights(selectedDates.checkin, selectedDates.checkout);
      const totalPrice = price * nights;

      message += `\n\n🏨 Room: ${roomTitle}`;
      message += `\n📅 Check-in: ${checkinFormatted}`;
      message += `\n📅 Check-out: ${checkoutFormatted}`;
      message += `\n💰 Price: £${price}/night (${nights} nights = £${totalPrice} total)`;
      message += `\n\nPlease let me know about availability and booking process. Thank you!`;
    } else {
      message += `\n\n💰 Price: £${price}/night`;
      message += `\n\nPlease let me know about availability and booking process. Thank you!`;
    }

    const whatsappUrl = `https://wa.me/901234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCarRentalContact = (message: string) => {
    const whatsappUrl = `https://wa.me/901234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
    let orderMessage = 'I would like to order:\n\n';
    Object.entries(cart).forEach(([itemId, quantity]) => {
      if (quantity > 0) {
        // Search through all categories and subcategories to find the item
        for (const tabData of Object.values(menuData)) {
          for (const category of tabData.categories) {
            if (category.items) {
              const item = category.items.find(item => item.id === itemId);
              if (item) {
                orderMessage += `${item.name} x${quantity} - ₺${(item.price * quantity)}\n`;
                break;
              }
            }
            if (category.subcategories) {
              for (const subcategory of category.subcategories) {
                const item = subcategory.items.find(item => item.id === itemId);
                if (item) {
                  orderMessage += `${item.name} x${quantity} - ₺${(item.price * quantity)}\n`;
                  break;
                }
              }
            }
          }
        }
      }
    });
    orderMessage += `\nTotal: ₺${cartTotal}`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(orderMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="App">
      <Header />

      <Hero />

      <RestaurantSection
        onToggleMenu={toggleMenu}
        menuToggleText={showMenu ? 'Hide Menu' : 'View Our Menu'}
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

      <Footer />

      <DepartureModal />
    </div>
  );
}

export default App;