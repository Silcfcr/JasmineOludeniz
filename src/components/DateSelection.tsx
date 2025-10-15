import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface DateSelectionProps {
    onContactWithDates: (checkin: string, checkout: string, numberOfPeople: number) => void;
}

const DateSelection: React.FC<DateSelectionProps> = ({ onContactWithDates }) => {
    const { t } = useLanguage();
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

    // Call onContactWithDates whenever all required fields are selected
    useEffect(() => {
        if (checkin && checkout && numberOfPeople > 0) {
            onContactWithDates(checkin, checkout, numberOfPeople);
        }
    }, [checkin, checkout, numberOfPeople, onContactWithDates]);



    return (
        <div className="date-selection">
            <div className="rooms-header">
                <h2>{t('rooms.title')}</h2>
                <p>{t('rooms.subtitle')}</p>
            </div>
            <h3>📅 {t('rooms.select-dates')}</h3>
            <p className="date-requirement">Please select your check-in and check-out dates to view seasonal prices.</p>
            <div className="date-inputs">
                <div className="date-input">
                    <label htmlFor="checkin">{t('rooms.checkin')} *</label>
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
                    <label htmlFor="checkout">{t('rooms.checkout')} *</label>
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
                    <label htmlFor="numberOfPeople">{t('rooms.guests')} *</label>
                    <div className="people-counter">
                        <button
                            type="button"
                            className="counter-btn minus"
                            onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
                            disabled={numberOfPeople <= 1}
                        >
                            −
                        </button>
                        <span className="counter-display">{numberOfPeople}</span>
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
