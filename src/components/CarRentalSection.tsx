import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface CarRentalSectionProps {
    onContactClick: (message: string) => void;
}

const CarRentalSection: React.FC<CarRentalSectionProps> = ({ onContactClick }) => {
    const { t } = useLanguage();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [today] = useState(new Date().toISOString().split('T')[0]);

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

    const calculateDays = (startDate: string, endDate: string) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDiff = end.getTime() - start.getTime();
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    };

    const handleContactClick = () => {
        if (!startDate || !endDate) {
            alert('Please select both start and end dates for your car rental.');
            return;
        }

        if (new Date(endDate) <= new Date(startDate)) {
            alert('End date must be after start date.');
            return;
        }

        const startFormatted = formatDate(startDate);
        const endFormatted = formatDate(endDate);
        const days = calculateDays(startDate, endDate);

        const message = `Hello! I'm interested in car rental at Jasmine Restaurant & Bar Hotel.

🚗 Car Rental Inquiry:
📅 Start Date: ${startFormatted}
📅 End Date: ${endFormatted}
📅 Duration: ${days} days
📞 Please contact me for availability and pricing details.

Thank you!`;

        onContactClick(message);
    };

    return (
        <section id="car-rental" className="car-rental-section">
            <div className="container">
                <div className="car-rental-card">
                    <div className="car-rental-header">
                        <h2>{t('car.title')}</h2>
                        <p>{t('car.subtitle')}</p>
                    </div>

                    <div className="car-rental-content">
                        <div className="car-rental-form">
                            <h3>{t('car.request-title')}</h3>
                            <p className="booking-note">{t('car.booking-note')}</p>

                            <div className="date-selection">
                                <div className="date-inputs">
                                    <div className="date-input">
                                        <label htmlFor="startDate">{t('car.start-date')} *</label>
                                        <input
                                            type="date"
                                            id="startDate"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            min={today}
                                            required
                                        />
                                    </div>
                                    <div className="date-input">
                                        <label htmlFor="endDate">{t('car.end-date')} *</label>
                                        <input
                                            type="date"
                                            id="endDate"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            min={startDate || today}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary car-rental-btn"
                                onClick={handleContactClick}
                            >
                                <i className="fab fa-whatsapp"></i>
                                {t('car.contact-whatsapp')}
                            </button>
                        </div>

                        <div className="car-rental-image">
                            <img src="/Img/cars/egea2018.jpg" alt="Car Rental Service - Fiat Egea 2018" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarRentalSection;
