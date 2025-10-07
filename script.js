// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Menu Toggle Function
function toggleMenu() {
    console.log('toggleMenu function called'); // Debug log
    const menuContent = document.getElementById('menu-content');
    const toggleText = document.getElementById('menuToggleText');
    const toggleIcon = document.getElementById('menuToggleIcon');

    console.log('Elements found:', {
        menuContent: !!menuContent,
        toggleText: !!toggleText,
        toggleIcon: !!toggleIcon
    }); // Debug log

    if (!menuContent || !toggleText || !toggleIcon) {
        console.error('Some elements not found');
        return;
    }

    if (menuContent.classList.contains('menu-hidden')) {
        // Show menu
        console.log('Showing menu');
        menuContent.classList.remove('menu-hidden');
        menuContent.classList.add('menu-visible');
        toggleText.textContent = 'Hide Menu';
        toggleIcon.classList.remove('fa-chevron-down');
        toggleIcon.classList.add('fa-chevron-up');
    } else {
        // Hide menu
        console.log('Hiding menu');
        menuContent.classList.remove('menu-visible');
        menuContent.classList.add('menu-hidden');
        toggleText.textContent = 'View Our Menu';
        toggleIcon.classList.remove('fa-chevron-up');
        toggleIcon.classList.add('fa-chevron-down');
    }
}

// Dynamic Pricing System
const pricingData = {
    "1 BR (all types)": {
        low: 30,    // Jan–Apr, Oct–Dec
        shoulder: 35, // May, Sep
        high: 40,   // Jun
        peak: 60    // Jul–Aug
    },
    "2 BR (all types)": {
        low: 30,    // Jan–Apr, Oct–Dec
        shoulder: 45, // May, Sep
        high: 45,   // Jun
        peak: 70    // Jul–Aug
    },
    "3 BR top floor": {
        low: 40,    // Jan–Apr, Oct–Dec
        shoulder: 50, // May, Sep
        high: 50,   // Jun
        peak: 80    // Jul–Aug
    },
    "Studio (all types)": {
        low: 25,    // Jan–Apr, Oct–Dec
        shoulder: 30, // May, Sep
        high: 35,   // Jun
        peak: 55    // Jul–Aug
    }
};

// Get current season based on month
function getCurrentSeason() {
    const month = new Date().getMonth() + 1; // 1-12

    if (month >= 7 && month <= 8) {
        return 'peak';    // Jul–Aug
    } else if (month === 6) {
        return 'high';    // Jun
    } else if (month === 5 || month === 9) {
        return 'shoulder'; // May, Sep
    } else {
        return 'low';     // Jan–Apr, Oct–Dec
    }
}

// Get price for room type and season
function getRoomPrice(roomType, season = null) {
    if (!season) {
        season = getCurrentSeason();
    }

    const roomCategory = getRoomCategory(roomType);
    return pricingData[roomCategory][season];
}

// Map room types to pricing categories
function getRoomCategory(roomType) {
    if (roomType.includes('1 Bedroom') || roomType.includes('1 BR')) {
        return "1 BR (all types)";
    } else if (roomType.includes('2 Bedroom') || roomType.includes('2 BR')) {
        return "2 BR (all types)";
    } else if (roomType.includes('3 Bed') || roomType.includes('3 BR')) {
        return "3 BR top floor";
    } else if (roomType.includes('Studio')) {
        return "Studio (all types)";
    }
    return "1 BR (all types)"; // Default fallback
}

// Update all room prices on page load
function updateRoomPrices() {
    const currentSeason = getCurrentSeason();

    // Update each room card price
    document.querySelectorAll('.room-card').forEach(card => {
        const roomTitle = card.querySelector('h3').textContent;
        const priceElement = card.querySelector('.room-price');
        const whatsappButton = card.querySelector('.btn-whatsapp');

        if (priceElement && whatsappButton) {
            const newPrice = getRoomPrice(roomTitle, currentSeason);
            priceElement.textContent = `€${newPrice}/night`;

            // Update WhatsApp button onclick with new price
            const roomType = roomTitle;
            whatsappButton.setAttribute('onclick', `contactWhatsApp('${roomType}', ${newPrice})`);
        }
    });
}

// Date selection functionality
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
checkinInput.min = today;

// Update checkout minimum date when checkin changes
checkinInput.addEventListener('change', () => {
    if (checkinInput.value) {
        const checkinDate = new Date(checkinInput.value);
        checkinDate.setDate(checkinDate.getDate() + 1);
        checkoutInput.min = checkinDate.toISOString().split('T')[0];

        // Clear checkout if it's before the new minimum
        if (checkoutInput.value && new Date(checkoutInput.value) <= new Date(checkinInput.value)) {
            checkoutInput.value = '';
        }

        // Reset visual feedback
        checkinInput.style.borderColor = '';
    }
});

// Reset visual feedback when dates are selected
checkoutInput.addEventListener('change', () => {
    if (checkoutInput.value) {
        checkoutInput.style.borderColor = '';
    }
});

// WhatsApp contact function
function contactWhatsApp(roomType, price) {
    const checkinDate = checkinInput.value;
    const checkoutDate = checkoutInput.value;

    // Check if dates are selected
    if (!checkinDate || !checkoutDate) {
        alert('Please select both check-in and check-out dates before contacting us.');

        // Scroll to date selection
        const dateSection = document.querySelector('.date-selection');
        if (dateSection) {
            dateSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Highlight date inputs with visual feedback
        if (!checkinDate) {
            checkinInput.style.borderColor = 'var(--secondary-color)';
            checkinInput.classList.add('required');
            checkinInput.focus();
            setTimeout(() => checkinInput.classList.remove('required'), 1000);
        }
        if (!checkoutDate) {
            checkoutInput.style.borderColor = 'var(--secondary-color)';
            checkoutInput.classList.add('required');
            if (checkinDate) checkoutInput.focus();
            setTimeout(() => checkoutInput.classList.remove('required'), 1000);
        }

        return; // Stop execution if dates are missing
    }

    // Validate dates
    if (new Date(checkoutDate) <= new Date(checkinDate)) {
        alert('Check-out date must be after check-in date.');
        checkoutInput.style.borderColor = 'var(--secondary-color)';
        checkoutInput.focus();
        return;
    }

    // WhatsApp phone number
    const phoneNumber = '50689268481'; // Costa Rica format without +

    const checkinFormatted = formatDate(checkinDate);
    const checkoutFormatted = formatDate(checkoutDate);
    const nights = calculateNights(checkinDate, checkoutDate);
    const totalPrice = price * nights;

    let message = `Hello! I'm interested in booking the ${roomType} at Jasmine Restaurant & Bar Hotel.`;
    message += `\n\n🏨 Room: ${roomType}`;
    message += `\n📅 Check-in: ${checkinFormatted}`;
    message += `\n📅 Check-out: ${checkoutFormatted}`;
    message += `\n💰 Price: €${price}/night (${nights} nights = €${totalPrice} total)`;
    message += `\n\nPlease let me know about availability and booking process. Thank you!`;

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');
}

// WhatsApp contact for hotel pickup
function contactPickupWhatsApp() {
    // WhatsApp phone number
    const phoneNumber = '50689268481'; // Costa Rica format without +

    let message = `Hello! We would like to visit you today, could you pick us up at...`;

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');
}

// Submenu functionality
function showSubmenuContent(contentType) {
    // Hide all content
    document.querySelectorAll('.submenu-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.submenu-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected content
    document.getElementById(contentType + '-content').classList.add('active');

    // Add active class to clicked tab
    if (event && event.target) {
        event.target.closest('.submenu-tab').classList.add('active');
    } else {
        // If called programmatically, find the correct tab
        const tabToActivate = document.querySelector(`[onclick*="${contentType}"]`);
        if (tabToActivate) {
            tabToActivate.classList.add('active');
        }
    }
}

// Navigation functions for main menu
function showMenuTab() {
    // First scroll to restaurant section
    setTimeout(() => {
        showSubmenuContent('menu');
    }, 500); // Small delay to allow scroll to complete
}

function showDeliveryTab() {
    // First scroll to restaurant section
    setTimeout(() => {
        showSubmenuContent('delivery');
    }, 500); // Small delay to allow scroll to complete
}

// WhatsApp order delivery function
function orderDeliveryWhatsApp() {
    const phoneNumber = '905537283045'; // Turkish format without +

    let message = `Hello! I would like to place a delivery order.`;
    message += `\n\n🍽️ Please send me your menu and I'll choose what I want.`;
    message += `\n📍 My delivery address is: [Please provide your address]`;
    message += `\n⏰ Preferred delivery time: [Please specify]`;
    message += `\n\nThank you!`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// WhatsApp menu inquiry function
function contactMenuWhatsApp() {
    const phoneNumber = '905537283045'; // Turkish format without +

    let message = `Hello! I'm interested in your restaurant menu.`;
    message += `\n\n🍽️ Could you please send me your full menu with prices?`;
    message += `\n📅 I'm planning to visit: [Please specify date/time]`;
    message += `\n👥 Number of people: [Please specify]`;
    message += `\n\nThank you!`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Helper function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
}

// Helper function to calculate nights
function calculateNights(checkin, checkout) {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

// Swiper Carousel initialization
let room5Swiper;

function initializeSwipers() {
    // Small delay to ensure DOM is fully loaded
    setTimeout(() => {
        // Initialize the 3 Bed apartment carousel
        const swiperElement = document.querySelector('.room5-swiper');
        if (swiperElement) {
            room5Swiper = new Swiper('.room5-swiper', {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                effect: 'slide',
                speed: 500,
                on: {
                    init: function () {
                        console.log('Room 5 Swiper initialized successfully');
                    }
                }
            });
        } else {
            console.log('Room 5 Swiper element not found');
        }
    }, 100);
}

// Initialize room image carousels on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Swiper carousels...');

    // Update room prices based on current season
    updateRoomPrices();

    // Initialize Swiper carousels
    initializeSwipers();
});

// Test function for Swiper debugging
window.testSwiper = function () {
    if (room5Swiper) {
        console.log('Room 5 Swiper status:');
        console.log('- Initialized: YES');
        console.log('- Active slide:', room5Swiper.activeIndex);
        console.log('- Total slides:', room5Swiper.slides.length);
        console.log('- Is autoplay running:', room5Swiper.autoplay.running);
    } else {
        console.log('Room 5 Swiper not initialized!');
    }
};

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        // Close gallery modal if open
        closeGallery();
    }

    // Gallery navigation with arrow keys
    if (document.getElementById('galleryModal').style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            changeGalleryImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeGalleryImage(1);
        }
    }
});

// Gallery functionality
const galleryImages = [
    "Img/costumers/cos1.jpeg",
    "Img/costumers/cos2.jpeg",
    "Img/costumers/cos3.jpeg",
    "Img/costumers/cos4.jpeg",
    "Img/costumers/cos5.jpeg",
    "Img/costumers/cos6.jpeg"
];

let currentGalleryIndex = 0;

function openGallery(index) {
    currentGalleryIndex = index;
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('galleryImage');
    const counter = document.getElementById('galleryCounter');

    modal.style.display = 'block';
    modalImg.src = galleryImages[index];
    counter.textContent = `${index + 1} / ${galleryImages.length}`;

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';

    // Restore body scroll
    document.body.style.overflow = 'auto';
}

function changeGalleryImage(direction) {
    currentGalleryIndex += direction;

    // Loop around if at the beginning or end
    if (currentGalleryIndex < 0) {
        currentGalleryIndex = galleryImages.length - 1;
    } else if (currentGalleryIndex >= galleryImages.length) {
        currentGalleryIndex = 0;
    }

    const modalImg = document.getElementById('galleryImage');
    const counter = document.getElementById('galleryCounter');

    modalImg.src = galleryImages[currentGalleryIndex];
    counter.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length}`;
}

// Close gallery when clicking outside the image
document.getElementById('galleryModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeGallery();
    }
});

// Interactive Menu Functionality
let cart = {};
let cartTotal = 0;

function updateQuantity(button, change) {
    const menuItem = button.closest('.selectable-menu-item');
    const quantitySpan = menuItem.querySelector('.quantity');
    const itemName = menuItem.dataset.name;
    const itemPrice = parseFloat(menuItem.dataset.price);

    let currentQuantity = parseInt(quantitySpan.textContent);
    let newQuantity = Math.max(0, currentQuantity + change);

    // Update display
    quantitySpan.textContent = newQuantity;

    // Update cart
    if (newQuantity > 0) {
        cart[itemName] = {
            quantity: newQuantity,
            price: itemPrice,
            total: newQuantity * itemPrice
        };
        menuItem.classList.add('selected');
    } else {
        delete cart[itemName];
        menuItem.classList.remove('selected');
    }

    // Disable minus button if quantity is 0
    const minusBtn = menuItem.querySelector('.quantity-btn.minus');
    minusBtn.disabled = newQuantity === 0;

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartSummary = document.getElementById('cartSummary');
    const cartItems = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    // Calculate total
    cartTotal = Object.values(cart).reduce((sum, item) => sum + item.total, 0);

    // Show/hide cart
    if (Object.keys(cart).length > 0) {
        cartSummary.style.display = 'block';

        // Update cart items
        cartItems.innerHTML = '';
        Object.entries(cart).forEach(([name, item]) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span class="cart-item-name">${name}</span>
                <div class="cart-item-details">
                    <span>${item.quantity}x</span>
                    <span>₺${item.total}</span>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        // Update total
        cartTotalElement.textContent = `₺${cartTotal}`;
    } else {
        cartSummary.style.display = 'none';
    }
}

function clearCart() {
    cart = {};
    cartTotal = 0;

    // Reset all quantities to 0
    document.querySelectorAll('.selectable-menu-item').forEach(item => {
        const quantitySpan = item.querySelector('.quantity');
        const minusBtn = item.querySelector('.quantity-btn.minus');

        quantitySpan.textContent = '0';
        minusBtn.disabled = true;
        item.classList.remove('selected');
    });

    updateCartDisplay();
}

function sendWhatsAppOrder() {
    if (Object.keys(cart).length === 0) {
        alert('Please add items to your cart before ordering.');
        return;
    }

    const phoneNumber = '905537283045'; // Turkish format without +

    let message = `🍽️ *ORDER FROM JASMINE RESTAURANT*\n\n`;
    message += `📋 *Order Details:*\n`;

    Object.entries(cart).forEach(([name, item]) => {
        message += `• ${name} x${item.quantity} - ₺${item.total}\n`;
    });

    message += `\n💰 *Total: ₺${cartTotal}*\n\n`;
    message += `📍 *Delivery Address:* [Please provide your address]\n`;
    message += `📞 *Contact Number:* [Please provide your phone number]\n`;
    message += `⏰ *Preferred Delivery Time:* [Please specify]\n\n`;
    message += `💳 *Payment:* Cash on delivery\n\n`;
    message += `Thank you for your order! 🙏`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', function () {
    // Load menu dynamically
    loadMenu();

    // Disable all minus buttons initially
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.disabled = true;
    });
});

// Function to load menu from menu-data.js
function loadMenu() {
    const tabsContainer = document.getElementById('menu-tabs');
    const contentContainer = document.getElementById('menu-content-tabs');

    if (tabsContainer && contentContainer && typeof generateMenuHTML === 'function') {
        const menuData = generateMenuHTML();
        tabsContainer.innerHTML = menuData.tabs;
        contentContainer.innerHTML = menuData.content;

        // Re-initialize minus buttons after loading menu
        const minusButtons = document.querySelectorAll('.quantity-btn.minus');
        minusButtons.forEach(button => {
            button.disabled = true;
        });
    }
}

// Function to switch between menu tabs
function switchMenuTab(tabKey) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.menu-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.menu-tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Add active class to clicked tab and corresponding content
    const activeTab = document.querySelector(`.menu-tab[onclick="switchMenuTab('${tabKey}')"]`);
    const activeContent = document.getElementById(`tab-${tabKey}`);

    if (activeTab && activeContent) {
        activeTab.classList.add('active');
        activeContent.classList.add('active');
    }
}