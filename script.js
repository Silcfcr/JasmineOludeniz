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
    }
});