import React, { useState } from 'react';
import RoomCard from './RoomCard';
import DateSelection from './DateSelection';

interface RoomData {
    id: string;
    title: string;
    description: string;
    images: Array<{ src: string; alt: string }>;
    features: Array<{ icon: string; text: string }>;
}

interface RoomsSectionProps {
    onWhatsAppClick: (roomTitle: string, price: number, selectedDates?: { checkin: string; checkout: string } | null) => void;
}


const RoomsSection: React.FC<RoomsSectionProps> = ({ onWhatsAppClick }) => {
    const [selectedDates, setSelectedDates] = useState<{ checkin: string, checkout: string } | null>(null);

    const handleContactWithDates = (checkin: string, checkout: string) => {
        console.log('RoomsSection - Setting dates:', { checkin, checkout });
        setSelectedDates({ checkin, checkout });
    };
    const roomsData: RoomData[] = [
        {
            id: 'room1',
            title: '1 Bedroom Apartment - First Floor',
            description: 'Comfortable apartment with modern amenities, perfect for couples or small families.',
            images: [
                { src: 'Img/Apt3/Apt3.1.jpeg', alt: '1 Bedroom Apartment - Living Area' },
                { src: 'Img/Apt3/Apt3.2.jpeg', alt: '1 Bedroom Apartment - Kitchen' },
                { src: 'Img/Apt3/Apt3.3.jpeg', alt: '1 Bedroom Apartment - Bedroom' }
            ],
            features: [
                { icon: 'fas fa-bed', text: '1 Double Bed' },
                { icon: 'fas fa-bath', text: 'Private Bathroom' },
                { icon: 'fas fa-kitchen-set', text: 'Kitchenette' },
                { icon: 'fas fa-wifi', text: 'Free WiFi' },
                { icon: 'fas fa-snowflake', text: 'Air Conditioning' }
            ],
        },
        {
            id: 'room2',
            title: '1 Bedroom Apartment - Ground Floor',
            description: 'Ground floor apartment with easy access and garden views.',
            images: [
                { src: 'https://images.unsplash.com/photo-1611892440501-80c6e516f0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: '1 Bedroom Apartment Ground Floor' },
                { src: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: '1 Bedroom Apartment Kitchen' },
                { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: '1 Bedroom Apartment Garden' }
            ],
            features: [
                { icon: 'fas fa-bed', text: '1 Double Bed' },
                { icon: 'fas fa-couch', text: '2 Sofa Beds' },
                { icon: 'fas fa-utensils', text: 'Kitchenette' },
                { icon: 'fas fa-wifi', text: 'Free WiFi' },
                { icon: 'fas fa-snowflake', text: 'Air Conditioning' }
            ],
        },
        {
            id: 'room3',
            title: '2 Bedroom Apartment - Ground Floor',
            description: 'Spacious ground floor apartment perfect for families or groups.',
            images: [
                { src: 'Img/Apt2/Apt.2.1.jpeg', alt: '2 Bedroom Apartment Ground Floor - Living Area' },
                { src: 'Img/Apt2/Apt2.2.jpeg', alt: '2 Bedroom Apartment Ground Floor - Bedroom' },
                { src: 'Img/Apt2/Apt2.3.jpeg', alt: '2 Bedroom Apartment Ground Floor - Kitchen' },
                { src: 'Img/Apt2/Apt2.4.jpeg', alt: '2 Bedroom Apartment Ground Floor - Bathroom' },
                { src: 'Img/Apt2/Apt2.5.jpeg', alt: '2 Bedroom Apartment Ground Floor - View' },
                { src: 'Img/Apt2/Apt2.6.jpeg', alt: '2 Bedroom Apartment Ground Floor - Outdoor' },
                { src: 'Img/Apt2/Apt2.7.jpeg', alt: '2 Bedroom Apartment Ground Floor - Details' }
            ],
            features: [
                { icon: 'fas fa-bed', text: '1 Double Bed + 2 Single Beds' },
                { icon: 'fas fa-couch', text: '2 Sofa Beds' },
                { icon: 'fas fa-utensils', text: 'Kitchenette' },
                { icon: 'fas fa-wifi', text: 'Free WiFi' },
                { icon: 'fas fa-snowflake', text: 'Air Conditioning' }
            ],
        },
        {
            id: 'room4',
            title: '2 Bedroom Apartment - First Floor',
            description: 'First floor apartment with great views and family-friendly layout.',
            images: [
                { src: 'Img/Apt2/Apt.2.1.jpeg', alt: '2 Bedroom Apartment First Floor - Living Area' },
                { src: 'Img/Apt2/Apt2.2.jpeg', alt: '2 Bedroom Apartment First Floor - Bedroom' },
                { src: 'Img/Apt2/Apt2.3.jpeg', alt: '2 Bedroom Apartment First Floor - Kitchen' },
                { src: 'Img/Apt2/Apt2.4.jpeg', alt: '2 Bedroom Apartment First Floor - Bathroom' },
                { src: 'Img/Apt2/Apt2.5.jpeg', alt: '2 Bedroom Apartment First Floor - View' },
                { src: 'Img/Apt2/Apt2.6.jpeg', alt: '2 Bedroom Apartment First Floor - Outdoor' },
                { src: 'Img/Apt2/Apt2.7.jpeg', alt: '2 Bedroom Apartment First Floor - Details' }
            ],
            features: [
                { icon: 'fas fa-bed', text: '1 Double Bed + 2 Single Beds' },
                { icon: 'fas fa-couch', text: '2 Sofa Beds' },
                { icon: 'fas fa-utensils', text: 'Kitchenette' },
                { icon: 'fas fa-wifi', text: 'Free WiFi' },
                { icon: 'fas fa-snowflake', text: 'Air Conditioning' }
            ],
        },
        {
            id: 'room5',
            title: '3 Bed Apartment - Second Floor',
            description: 'Top floor apartment with balcony, wet bathroom, and panoramic views.',
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
                { icon: 'fas fa-bed', text: '1 Double Bed + 3 Single Beds' },
                { icon: 'fas fa-couch', text: '2 Sofa Beds' },
                { icon: 'fas fa-utensils', text: 'Kitchenette' },
                { icon: 'fas fa-bath', text: 'Wet Bathroom' },
                { icon: 'fas fa-mountain', text: 'Balcony with Views' },
                { icon: 'fas fa-wifi', text: 'Free WiFi' },
                { icon: 'fas fa-snowflake', text: 'Air Conditioning' }
            ],
        },
        {
            id: 'room6',
            title: '1 Bedroom Apartment - Garden Side',
            description: 'Peaceful garden-side apartment with beautiful natural surroundings.',
            images: [
                { src: 'https://images.unsplash.com/photo-1611892440501-80c6e516f0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: '1 Bedroom Apartment Garden Side' },
                { src: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: '1 Bedroom Apartment Garden View' },
                { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: '1 Bedroom Apartment Kitchen' }
            ],
            features: [
                { icon: 'fas fa-bed', text: '1 Double Bed' },
                { icon: 'fas fa-couch', text: '2 Sofa Beds' },
                { icon: 'fas fa-utensils', text: 'Kitchenette' },
                { icon: 'fas fa-leaf', text: 'Garden Views' },
                { icon: 'fas fa-wifi', text: 'Free WiFi' },
                { icon: 'fas fa-snowflake', text: 'Air Conditioning' }
            ],
        },
        {
            id: 'room7',
            title: 'Studio Room - Garden Side',
            description: 'Compact studio room with garden views, perfect for solo travelers or couples.',
            images: [
                { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: 'Studio Room Garden Side' },
                { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: 'Studio Room Garden View' },
                { src: 'https://images.unsplash.com/photo-1611892440501-80c6e516f0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: 'Studio Room Living' }
            ],
            features: [
                { icon: 'fas fa-bed', text: '1 Double Bed + 1 Single Bed' },
                { icon: 'fas fa-leaf', text: 'Garden Views' },
                { icon: 'fas fa-wifi', text: 'Free WiFi' },
                { icon: 'fas fa-snowflake', text: 'Air Conditioning' }
            ],
        },
        {
            id: 'room8',
            title: 'Studio 101',
            description: 'Modern studio room with double bed, ideal for short stays.',
            images: [
                { src: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: 'Studio 101' },
                { src: 'https://images.unsplash.com/photo-1611892440501-80c6e516f0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: 'Studio 101 Living' },
                { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: 'Studio 101 View' }
            ],
            features: [
                { icon: 'fas fa-bed', text: '1 Double Bed' },
                { icon: 'fas fa-wifi', text: 'Free WiFi' },
                { icon: 'fas fa-snowflake', text: 'Air Conditioning' }
            ],
        }
    ];

    return (
        <section id="rooms" className="rooms-section">
            <div className="container">
                <div className="section-header">
                    <h2>Our Rooms</h2>
                    <p>Choose from our comfortable accommodations</p>
                </div>

                {/* Date Selection */}
                <DateSelection onContactWithDates={handleContactWithDates} />
                <div className="rooms-grid">
                    {roomsData.map((room) => (
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
        </section>
    );
};

export default RoomsSection;
