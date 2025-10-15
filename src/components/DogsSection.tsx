import React from 'react';
import { createWhatsAppUrl } from '../constants/whatsapp';
import { useLanguage } from '../contexts/LanguageContext';

const DogsSection: React.FC = () => {
    const { t } = useLanguage();
    const handleAdoptionWhatsApp = () => {
        const message = "Hello! I'm interested in adopting one of your dogs. Could you provide more information about the adoption process and available dogs?";
        const whatsappUrl = createWhatsAppUrl(message);
        window.open(whatsappUrl, '_blank');
    };

    const getDogsData = () => [
        {
            id: 1,
            name: 'Lucas',
            image: 'Img/dogs/dog1.jpeg',
            age: t('dogs.age'),
            description: t('dogs.lucas.description')
        },
        {
            id: 2,
            name: 'Bobby',
            image: 'Img/dogs/dog2.jpeg',
            age: t('dogs.age'),
            description: t('dogs.bobby.description')
        },
        {
            id: 3,
            name: 'Charlie',
            image: 'Img/dogs/dog3.jpeg',
            age: t('dogs.age'),
            description: t('dogs.charlie.description')
        },
        {
            id: 4,
            name: 'Alex',
            image: 'Img/dogs/dog4.jpeg',
            age: t('dogs.age'),
            description: t('dogs.alex.description')
        },
        {
            id: 5,
            name: 'Rex',
            image: 'Img/dogs/dog5.jpeg',
            age: t('dogs.age'),
            description: t('dogs.rex.description')
        }
    ];

    return (
        <section id="dogs" className="dogs-section">
            <div className="container">
                <div className="section-header">
                    <h2>{t('dogs.title')}</h2>
                    <p>{t('dogs.subtitle')}</p>
                </div>
                <div className="dogs-grid">
                    {getDogsData().map((dog) => (
                        <div key={dog.id} className="dog-card">
                            <div className="dog-image">
                                <img src={dog.image} alt={`${dog.name} - Looking for a home`} />
                            </div>
                            <div className="dog-info">
                                <h3>{dog.name}</h3>
                                {dog.age && <p className="dog-age">{dog.age}</p>}
                                <p className="dog-description">{dog.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="dogs-cta">
                    <p>{t('dogs.description')}</p>
                    <div className="dogs-cta-buttons">
                        <button onClick={handleAdoptionWhatsApp} className="btn btn-primary">
                            <i className="fab fa-whatsapp"></i> {t('dogs.contact-adoption')}
                        </button>
                        <a href="https://www.gofundme.com/f/help-rehome-the-jasmine-dogs" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-heart"></i> {t('dogs.support-gofundme')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DogsSection;
