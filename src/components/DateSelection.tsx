import React, { useState, useEffect } from 'react';

interface DateSelectionProps {
    onContactWithDates: (checkin: string, checkout: string, numberOfPeople: number) => void;
}

const DateSelection: React.FC<DateSelectionProps> = ({ onContactWithDates }) => {
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(2);
    const [today] = useState(new Date().toISOString().split('T')[0]);

    // Update checkout minimum date when checkin changes
    useEffect(() => {
        if (checkin) {
            // Clear checkout if it's before the new minimum
            if (checkout && new Date(checkout) <= new Date(checkin)) {
                setCheckout('');
            }
        }
    }, [checkin, checkout]);

    // Call onContactWithDates whenever both dates are selected
    useEffect(() => {
        if (checkin && checkout) {
            onContactWithDates(checkin, checkout, numberOfPeople);
        }
    }, [checkin, checkout, numberOfPeople, onContactWithDates]);



    return (
        <div className="date-selection">
            <div className="rooms-header">
                <h2>Our Rooms</h2>
                <p>Choose from our comfortable accommodations</p>
            </div>
            <h3>📅 Select Your Dates</h3>
            <p className="date-requirement">Please select your check-in and check-out dates to view seasonal prices.</p>
            <div className="date-inputs">
                <div className="date-input">
                    <label htmlFor="checkin">Check-in Date *</label>
                    <input
                        type="date"
                        id="checkin"
                        name="checkin"
                        value={checkin}
                        onChange={(e) => setCheckin(e.target.value)}
                        min={today}
                        required
                    />
                </div>
                <div className="date-input">
                    <label htmlFor="checkout">Check-out Date *</label>
                    <input
                        type="date"
                        id="checkout"
                        name="checkout"
                        value={checkout}
                        onChange={(e) => setCheckout(e.target.value)}
                        min={checkin ? new Date(checkin).toISOString().split('T')[0] : today}
                        required
                    />
                </div>
                <div className="date-input">
                    <label htmlFor="numberOfPeople">Number of People *</label>
                    <div className="people-counter">
                        <button 
                            type="button" 
                            className="counter-btn minus"
                            onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
                            disabled={numberOfPeople <= 1}
                        >
                            −
                        </button>
                        <span className="counter-display">{numberOfPeople} {numberOfPeople === 1 ? 'Person' : 'People'}</span>
                        <button 
                            type="button" 
                            className="counter-btn plus"
                            onClick={() => setNumberOfPeople(Math.min(6, numberOfPeople + 1))}
                            disabled={numberOfPeople >= 6}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateSelection;
