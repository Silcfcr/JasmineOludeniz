import React, { useState, useEffect } from 'react';

const DepartureModal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already seen the modal
        const hasSeenModal = localStorage.getItem('hasSeenDepartureModal');
        if (!hasSeenModal) {
            // Show modal after a short delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Remember that user has seen the modal
        localStorage.setItem('hasSeenDepartureModal', 'true');
    };

    const handleContactPickup = () => {
        const message = `Hello! I'm interested in using the free facilities on my departure day.

🏨 Free facilities on departure day:
• Free luggage storage
• Free shower facilities  
• Free pool access
• Free sunbeds
• Free pickup from my hotel

Please let me know more details about this service. Thank you!`;

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
                        <i className="fas fa-gift"></i>
                    </div>
                    <h2>Free Facilities on Departure Day!</h2>
                </div>

                <div className="modal-body">
                    <p>Checking out today from your hotel? If you have a late flight, early arrival, or just want to use our facilities during the day, we offer:</p>
                    
                    <ul className="modal-features">
                        <li><i className="fas fa-suitcase"></i> Free luggage storage</li>
                        <li><i className="fas fa-shower"></i> Free shower facilities</li>
                        <li><i className="fas fa-swimming-pool"></i> Free pool access</li>
                        <li><i className="fas fa-sun"></i> Free sunbeds</li>
                        <li><i className="fas fa-car"></i> Free pickup from your hotel</li>
                    </ul>
                    
                    <p className="modal-note">
                        <strong>Please note:</strong> You need to eat and drink at our restaurant to use these facilities.
                    </p>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={handleClose}>
                        Maybe Later
                    </button>
                    <button className="btn btn-primary" onClick={handleContactPickup}>
                        <i className="fab fa-whatsapp"></i> Request Hotel Pick Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DepartureModal;
