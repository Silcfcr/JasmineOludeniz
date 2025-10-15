import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { getRoomPrice, getSeasonFromDate } from '../utils/pricing';
import { useLanguage } from '../contexts/LanguageContext';

interface RoomImage {
    src: string;
    alt: string;
}

interface RoomFeature {
    icon: string;
    text: string;
}

interface RoomCardProps {
    id: string;
    title: string;
    description: string;
    images: RoomImage[];
    features: RoomFeature[];
    onWhatsAppClick: (roomTitle: string, price: number, selectedDates?: { checkin: string; checkout: string; numberOfPeople: number } | null) => void;
    selectedDates?: { checkin: string; checkout: string; numberOfPeople: number } | null;
}

const RoomCard: React.FC<RoomCardProps> = ({
    id,
    title,
    description,
    images,
    features,
    onWhatsAppClick,
    selectedDates
}) => {
    const { t } = useLanguage();
    const [price, setPrice] = useState<number>(0);

    useEffect(() => {
        let roomPrice: number;

        // If dates are selected, use the check-in date to determine season and number of people
        if (selectedDates && selectedDates.checkin) {
            const season = getSeasonFromDate(selectedDates.checkin);
            const numberOfPeople = selectedDates.numberOfPeople || 2;
            roomPrice = getRoomPrice(title, season, numberOfPeople);
            console.log(`RoomCard - ${title}: Using ${season} season pricing for ${selectedDates.checkin} (${numberOfPeople} guests): £${roomPrice}`);
        } else {
            // Default to current season if no dates selected
            roomPrice = getRoomPrice(title);
            console.log(`RoomCard - ${title}: Using current season pricing: £${roomPrice}`);
        }

        setPrice(roomPrice);
    }, [title, selectedDates?.checkin, selectedDates?.checkout, selectedDates?.numberOfPeople]);

    const handleWhatsAppClick = () => {
        console.log('RoomCard - selectedDates:', selectedDates);
        if (!selectedDates || !selectedDates.checkin || !selectedDates.checkout || !selectedDates.numberOfPeople) {
            alert(t('common.select-dates-first'));
            return;
        }
        onWhatsAppClick(title, price, selectedDates);
    };
    return (
        <div className="room-card">
            <div className="room-image">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: `.${id}-next`,
                        prevEl: `.${id}-prev`,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={500}
                    className={`${id}-swiper`}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image.src} alt={image.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Navigation buttons */}
                <div className={`swiper-button-next ${id}-next`}></div>
                <div className={`swiper-button-prev ${id}-prev`}></div>
            </div>
            <div className="room-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="room-features">
                    {features.map((feature, index) => (
                        <li key={index}>
                            <i className={feature.icon}></i> {feature.text}
                        </li>
                    ))}
                </ul>
                <div className="room-price">£{price}/{t('rooms.per-night')}</div>
                <button
                    className="btn btn-whatsapp"
                    onClick={handleWhatsAppClick}
                >
                    <i className="fab fa-whatsapp"></i> {t('rooms.contact-whatsapp')}
                </button>
            </div>
        </div>
    );
};

export default RoomCard;
