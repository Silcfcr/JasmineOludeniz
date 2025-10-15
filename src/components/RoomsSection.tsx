import React, { useState } from 'react';
import RoomCard from './RoomCard';
import DateSelection from './DateSelection';
import { useLanguage } from '../contexts/LanguageContext';

interface RoomData {
    id: string;
    title: string;
    description: string;
    images: Array<{ src: string; alt: string }>;
    features: Array<{ icon: string; text: string }>;
}

interface RoomsSectionProps {
    onWhatsAppClick: (roomTitle: string, price: number, selectedDates?: { checkin: string; checkout: string; numberOfPeople: number } | null) => void;
}


const RoomsSection: React.FC<RoomsSectionProps> = ({ onWhatsAppClick }) => {
    const { t } = useLanguage();
    const [selectedDates, setSelectedDates] = useState<{ checkin: string, checkout: string, numberOfPeople: number } | null>(null);

    const handleContactWithDates = (checkin: string, checkout: string, numberOfPeople: number) => {
        console.log('RoomsSection - Setting dates:', { checkin, checkout, numberOfPeople });
        setSelectedDates({ checkin, checkout, numberOfPeople });
    };

    const getRoomsData = (): RoomData[] => [
        {
            id: 'room1',
            title: t('rooms.room1.title'),
            description: t('rooms.room1.description'),
            images: [
                { src: 'Img/103/103.1.jpeg', alt: '1 Bedroom Apartment 103 - Main View' },
                { src: 'Img/103/103.2.jpeg', alt: '1 Bedroom Apartment 103 - Living Area' },
                { src: 'Img/103/103.3.jpeg', alt: '1 Bedroom Apartment 103 - Bedroom' },
                { src: 'Img/103/103.4.jpeg', alt: '1 Bedroom Apartment 103 - Kitchen' },
                { src: 'Img/103/103.5.jpeg', alt: '1 Bedroom Apartment 103 - Bathroom' },
                { src: 'Img/103/103.6.jpeg', alt: '1 Bedroom Apartment 103 - Additional View' },
                { src: 'Img/103/103.7.jpeg', alt: '1 Bedroom Apartment 103 - Exterior' }
            ],
            features: [
                { icon: 'fas fa-bed', text: t('rooms.features.double-bed') },
                { icon: 'fas fa-bath', text: t('rooms.features.private-bathroom') },
                { icon: 'fas fa-kitchen-set', text: t('rooms.features.kitchenette') },
                { icon: 'fas fa-wifi', text: t('rooms.features.free-wifi') },
                { icon: 'fas fa-snowflake', text: t('rooms.features.air-conditioning') }
            ],
        },
        {
            id: 'room2',
            title: t('rooms.room2.title'),
            description: t('rooms.room2.description'),
            images: [
                { src: 'Img/Apt1/Apt1.1.jpeg', alt: '1 Bedroom Apartment Ground Floor - Main View' },
                { src: 'Img/Apt1/Apt1.2.jpeg', alt: '1 Bedroom Apartment Ground Floor - Living Area' },
                { src: 'Img/Apt1/Apt1.3.jpeg', alt: '1 Bedroom Apartment Ground Floor - Bedroom' },
                { src: 'Img/Apt1/Apt1.4.jpeg', alt: '1 Bedroom Apartment Ground Floor - Kitchen' },
                { src: 'Img/Apt1/Apt1.5.jpeg', alt: '1 Bedroom Apartment Ground Floor - Bathroom' }
            ],
            features: [
                { icon: 'fas fa-bed', text: t('rooms.features.double-bed') },
                { icon: 'fas fa-couch', text: t('rooms.features.sofa-beds') },
                { icon: 'fas fa-utensils', text: t('rooms.features.kitchenette') },
                { icon: 'fas fa-wifi', text: t('rooms.features.free-wifi') },
                { icon: 'fas fa-snowflake', text: t('rooms.features.air-conditioning') }
            ],
        },
        {
            id: 'room3',
            title: t('rooms.room3.title'),
            description: t('rooms.room3.description'),
            images: [
                { src: 'Img/Apt2/Apt.2.1.jpeg', alt: '2 Bedroom Apartment Ground Floor - Living Area' },
                { src: 'Img/Apt2/Apt2.2.jpeg', alt: '2 Bedroom Apartment Ground Floor - Bedroom' },
                { src: 'Img/Apt2/Apt2.3.jpeg', alt: '2 Bedroom Apartment Ground Floor - Kitchen' },
                { src: 'Img/Apt2/Apt2.5.jpeg', alt: '2 Bedroom Apartment Ground Floor - View' },
                { src: 'Img/Apt2/Apt2.6.jpeg', alt: '2 Bedroom Apartment Ground Floor - Outdoor' },
                { src: 'Img/Apt2/Apt2.7.jpeg', alt: '2 Bedroom Apartment Ground Floor - Details' }
            ],
            features: [
                { icon: 'fas fa-bed', text: t('rooms.features.double-single-beds') },
                { icon: 'fas fa-couch', text: t('rooms.features.sofa-beds') },
                { icon: 'fas fa-utensils', text: t('rooms.features.kitchenette') },
                { icon: 'fas fa-wifi', text: t('rooms.features.free-wifi') },
                { icon: 'fas fa-snowflake', text: t('rooms.features.air-conditioning') }
            ],
        },
        {
            id: 'room4',
            title: t('rooms.room4.title'),
            description: t('rooms.room4.description'),
            images: [
                { src: 'Img/Apt2/Apt.2.1.jpeg', alt: '2 Bedroom Apartment First Floor - Living Area' },
                { src: 'Img/Apt2/Apt2.2.jpeg', alt: '2 Bedroom Apartment First Floor - Bedroom' },
                { src: 'Img/Apt2/Apt2.3.jpeg', alt: '2 Bedroom Apartment First Floor - Kitchen' },
                { src: 'Img/Apt2/Apt2.5.jpeg', alt: '2 Bedroom Apartment First Floor - View' },
                { src: 'Img/Apt2/Apt2.6.jpeg', alt: '2 Bedroom Apartment First Floor - Outdoor' },
                { src: 'Img/Apt2/Apt2.7.jpeg', alt: '2 Bedroom Apartment First Floor - Details' }
            ],
            features: [
                { icon: 'fas fa-bed', text: t('rooms.features.double-single-beds') },
                { icon: 'fas fa-couch', text: t('rooms.features.sofa-beds') },
                { icon: 'fas fa-utensils', text: t('rooms.features.kitchenette') },
                { icon: 'fas fa-wifi', text: t('rooms.features.free-wifi') },
                { icon: 'fas fa-snowflake', text: t('rooms.features.air-conditioning') }
            ],
        },
        {
            id: 'room5',
            title: t('rooms.room5.title'),
            description: t('rooms.room5.description'),
            images: [
                { src: 'Img/Apt3/Apt3.1.jpeg', alt: '3 Bed Apartment - Living Area' },
                { src: 'Img/Apt3/Apt3.2.jpeg', alt: '3 Bed Apartment - Kitchen' },
                { src: 'Img/Apt3/Apt3.3.jpeg', alt: '3 Bed Apartment - Bedroom 1' },
                { src: 'Img/Apt3/Apt3.4.jpeg', alt: '3 Bed Apartment - Bedroom 2' },
                { src: 'Img/Apt3/Apt3.5.jpeg', alt: '3 Bed Apartment - Bedroom 3' },
                { src: 'Img/Apt3/Apt3.6.jpeg', alt: '3 Bed Apartment - Bathroom' },
                { src: 'Img/Apt3/Apt3.7.jpeg', alt: '3 Bed Apartment - Balcony View' },
                { src: 'Img/Apt3/Apt3.8.jpeg', alt: '3 Bed Apartment - Outdoor Area' },
                { src: 'Img/Apt3/Apt3.9.jpeg', alt: '3 Bed Apartment - Pool View' },
                { src: 'Img/Apt3/Apt3.10.jpeg', alt: '3 Bed Apartment - Additional View' },
                { src: 'Img/Apt3/Apt3.11.jpeg', alt: '3 Bed Apartment - Interior Detail' },
                { src: 'Img/Apt3/Apt3.12.jpeg', alt: '3 Bed Apartment - Final View' }
            ],
            features: [
                { icon: 'fas fa-bed', text: t('rooms.features.double-three-single-beds') },
                { icon: 'fas fa-couch', text: t('rooms.features.sofa-beds') },
                { icon: 'fas fa-utensils', text: t('rooms.features.kitchenette') },
                { icon: 'fas fa-bath', text: t('rooms.features.wet-bathroom') },
                { icon: 'fas fa-mountain', text: t('rooms.features.balcony-views') },
                { icon: 'fas fa-wifi', text: t('rooms.features.free-wifi') },
                { icon: 'fas fa-snowflake', text: t('rooms.features.air-conditioning') }
            ],
        },
        {
            id: 'room6',
            title: t('rooms.room6.title'),
            description: t('rooms.room6.description'),
            images: [
                { src: 'Img/Apt1/Apt1.1.jpeg', alt: '1 Bedroom Apartment 301 - Main View' },
                { src: 'Img/Apt1/Apt1.2.jpeg', alt: '1 Bedroom Apartment 301 - Living Area' },
                { src: 'Img/Apt1/Apt1.3.jpeg', alt: '1 Bedroom Apartment 301 - Bedroom' },
                { src: 'Img/Apt1/Apt1.4.jpeg', alt: '1 Bedroom Apartment 301 - Kitchen' },
                { src: 'Img/Apt1/Apt1.5.jpeg', alt: '1 Bedroom Apartment 301 - Bathroom' }
            ],
            features: [
                { icon: 'fas fa-bed', text: t('rooms.features.double-bed') },
                { icon: 'fas fa-couch', text: t('rooms.features.sofa-beds') },
                { icon: 'fas fa-utensils', text: t('rooms.features.kitchenette') },
                { icon: 'fas fa-leaf', text: t('rooms.features.garden-views') },
                { icon: 'fas fa-wifi', text: t('rooms.features.free-wifi') },
                { icon: 'fas fa-snowflake', text: t('rooms.features.air-conditioning') }
            ],
        },
        {
            id: 'room7',
            title: t('rooms.room7.title'),
            description: t('rooms.room7.description'),
            images: [
                { src: 'Img/Apt1Garden/Apt1Garden.1.jpeg', alt: 'Studio Room Garden Side - Main View' },
                { src: 'Img/Apt1Garden/Apt1Garden.2.jpeg', alt: 'Studio Room Garden Side - Living Area' },
                { src: 'Img/Apt1Garden/Apt1Garden.3.jpeg', alt: 'Studio Room Garden Side - Bedroom' },
                { src: 'Img/Apt1Garden/Apt1Garden.5.jpeg', alt: 'Studio Room Garden Side - Garden View' }
            ],
            features: [
                { icon: 'fas fa-bed', text: t('rooms.features.double-single-bed') },
                { icon: 'fas fa-leaf', text: t('rooms.features.garden-views') },
                { icon: 'fas fa-wifi', text: t('rooms.features.free-wifi') },
                { icon: 'fas fa-snowflake', text: t('rooms.features.air-conditioning') }
            ],
        },
        {
            id: 'room8',
            title: t('rooms.room8.title'),
            description: t('rooms.room8.description'),
            images: [
                { src: 'Img/Apt101/Apt101.1.jpeg', alt: 'Studio 101 - Main View' },
                { src: 'Img/Apt101/Apt101.2.jpeg', alt: 'Studio 101 - Living Area' },
                { src: 'Img/Apt101/Apt101.3.jpeg', alt: 'Studio 101 - Bedroom' },
                { src: 'Img/Apt101/Apt101.4.jpeg', alt: 'Studio 101 - Kitchen' },
                { src: 'Img/Apt101/Apt101.5.jpeg', alt: 'Studio 101 - Bathroom' },
                { src: 'Img/Apt101/Apt101.6.jpeg', alt: 'Studio 101 - Balcony' },
                { src: 'Img/Apt101/Apt101.7.jpeg', alt: 'Studio 101 - Exterior' }
            ],
            features: [
                { icon: 'fas fa-bed', text: t('rooms.features.double-bed') },
                { icon: 'fas fa-wifi', text: t('rooms.features.free-wifi') },
                { icon: 'fas fa-snowflake', text: t('rooms.features.air-conditioning') }
            ],
        }
    ];

    return (
        <section id="rooms" className="rooms-section">
            <div className="container">
                <div className="rooms-content">
                    {/* Date Selection */}
                    <DateSelection onContactWithDates={handleContactWithDates} />

                    <div className="rooms-grid">
                        {getRoomsData().map((room) => (
                            <RoomCard
                                key={room.id}
                                id={room.id}
                                title={room.title}
                                description={room.description}
                                images={room.images}
                                features={room.features}
                                onWhatsAppClick={onWhatsAppClick}
                                selectedDates={selectedDates}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomsSection;
