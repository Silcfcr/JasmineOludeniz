import React, { useState, useEffect } from 'react';

interface DateSelectionProps {
    onContactWithDates: (checkin: string, checkout: string) => void;
}

const DateSelection: React.FC<DateSelectionProps> = ({ onContactWithDates }) => {
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
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
            onContactWithDates(checkin, checkout);
        }
    }, [checkin, checkout, onContactWithDates]);



    return (
        <div className="date-selection">
            <h3>📅 Select Your Dates</h3>
            <p className="date-requirement">Please select your check-in and check-out dates to contact us about room availability.</p>
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
            </div>
        </div>
    );
};

export default DateSelection;
