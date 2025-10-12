import React from 'react';

const SpecialOffer: React.FC = () => {
    const contactPickupWhatsApp = () => {
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

    return (
        <section className="special-offer">
            <div className="container">
                <div className="offer-content">
                    <div className="offer-header">
                        <div className="offer-icon">
                            <i className="fas fa-plane-departure"></i>
                        </div>
                        <h2>Special Departure Day Offer</h2>
                        <p className="offer-subtitle">Make the most of your last day in Oludeniz</p>
                    </div>

                    <div className="offer-description">
                        <p>Don't let your departure day go to waste! Whether you have a late flight, early arrival, or just want to enjoy our beautiful facilities one more time, we've got you covered.</p>
                    </div>

                    <div className="offer-features-grid">
                        <div className="offer-feature">
                            <i className="fas fa-suitcase"></i>
                            <h4>Luggage Storage</h4>
                            <p>Store your bags safely while you explore</p>
                        </div>
                        <div className="offer-feature">
                            <i className="fas fa-shower"></i>
                            <h4>Shower Facilities</h4>
                            <p>Fresh and clean before your journey</p>
                        </div>
                        <div className="offer-feature">
                            <i className="fas fa-swimming-pool"></i>
                            <h4>Pool Access</h4>
                            <p>Relax by our beautiful pool</p>
                        </div>
                        <div className="offer-feature">
                            <i className="fas fa-sun"></i>
                            <h4>Sunbeds</h4>
                            <p>Comfortable lounging in the sun</p>
                        </div>
                        <div className="offer-feature">
                            <i className="fas fa-car"></i>
                            <h4>Hotel Pickup</h4>
                            <p>Free transportation from your hotel</p>
                        </div>
                        <div className="offer-feature">
                            <i className="fas fa-utensils"></i>
                            <h4>Restaurant Access</h4>
                            <p>Enjoy our delicious meals and drinks</p>
                        </div>
                    </div>

                    <div className="offer-note">
                        <i className="fas fa-info-circle"></i>
                        <p><strong>Terms:</strong> Free facilities available when dining at our restaurant. Perfect for making your departure day comfortable and memorable!</p>
                    </div>

                    <div className="offer-contact">
                        <button className="btn btn-primary offer-btn" onClick={contactPickupWhatsApp}>
                            <i className="fab fa-whatsapp"></i> Book This Service
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
