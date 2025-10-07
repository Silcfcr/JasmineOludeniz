import React from 'react';

const SpecialOffer: React.FC = () => {
    const contactPickupWhatsApp = () => {
        const message = "Hi! I would like to request hotel pickup for the free facilities use on departure day. Can you help me arrange this?";
        const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="special-offer">
            <div className="container">
                <div className="offer-content">
                    <div className="offer-icon">
                        <i className="fas fa-gift"></i>
                    </div>
                    <div className="offer-text">
                        <p><strong>Free facilities use on departure day!</strong></p>
                        <p>Checking out today from your hotel? If you have a late flight, early arrival, or just want to use our facilities during the day, we offer:</p>
                        <ul className="offer-features">
                            <li><i className="fas fa-suitcase"></i> Free luggage storage</li>
                            <li><i className="fas fa-shower"></i> Free shower facilities</li>
                            <li><i className="fas fa-swimming-pool"></i> Free pool access</li>
                            <li><i className="fas fa-sun"></i> Free sunbeds</li>
                            <li><i className="fas fa-car"></i> Free pickup from your hotel</li>
                        </ul>
                        <p className="offer-note"><strong>Please note:</strong> You need to eat and drink at our restaurant to use these facilities.</p>
                        <div className="offer-contact">
                            <button className="btn btn-whatsapp offer-btn" onClick={contactPickupWhatsApp}>
                                <i className="fab fa-whatsapp"></i> Request Hotel Pickup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
