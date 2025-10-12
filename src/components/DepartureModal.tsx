import React, { useState, useEffect } from 'react';

const DepartureModal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show modal after 3 seconds on every page load
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Remember that user has seen the modal
        localStorage.setItem('hasSeenDepartureModal', 'true');
    };

    const handleContactPickup = () => {
        const message = `Hello! I'm interested in using the free facilities on my departure day at Jasmine Restaurant & Bar.

🏨 Free Departure Day Facilities:
• Free luggage storage
• Free shower facilities  
• Free pool access
• Free sunbeds
• Free pickup from my hotel

Please let me know more details about this service and how to arrange it. Thank you!`;

        const whatsappUrl = `https://wa.me/50689268481?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    if (!isVisible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={handleClose}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="modal-header">
                    <div className="modal-icon">
                        <i className="fas fa-plane-departure"></i>
                    </div>
                    <h2>Special Departure Day Offer!</h2>
                    <p className="modal-subtitle">Make the most of your last day in Oludeniz</p>
                </div>

                <div className="modal-body">
                    <div className="offer-highlight">
                        <p>Don't let your departure day go to waste! Whether you have a late flight, early arrival, or just want to enjoy our beautiful facilities one more time, we've got you covered.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <i className="fas fa-suitcase"></i>
                            <h4>Luggage Storage</h4>
                            <p>Store your bags safely while you explore</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-shower"></i>
                            <h4>Shower Facilities</h4>
                            <p>Fresh and clean before your journey</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-swimming-pool"></i>
                            <h4>Pool Access</h4>
                            <p>Relax by our beautiful pool</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-sun"></i>
                            <h4>Sunbeds</h4>
                            <p>Comfortable lounging in the sun</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-car"></i>
                            <h4>Hotel Pickup</h4>
                            <p>Free transportation from your hotel</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-utensils"></i>
                            <h4>Restaurant Access</h4>
                            <p>Enjoy our delicious meals and drinks</p>
                        </div>
                    </div>

                    <div className="modal-note">
                        <i className="fas fa-info-circle"></i>
                        <p><strong>Terms:</strong> Free facilities available when dining at our restaurant. Perfect for making your departure day comfortable and memorable!</p>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={handleClose}>
                        <i className="fas fa-times"></i> Not Today
                    </button>
                    <button className="btn btn-primary" onClick={handleContactPickup}>
                        <i className="fab fa-whatsapp"></i> Book This Service
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DepartureModal;
