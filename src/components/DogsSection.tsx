import React from 'react';

const DogsSection: React.FC = () => {
    const dogs = [
        {
            id: 1,
            name: 'Lucas',
            image: 'Img/dogs/dog1.jpeg',
            age: '3 years old',
            description: "Loves food except tomatoes, if you want company while you're eating Lucas is your guy"
        },
        {
            id: 2,
            name: 'Bobby',
            image: 'Img/dogs/dog2.jpeg',
            age: '3 years old',
            description: "If you're looking for a dance partner full of energy, Bobby is your guy"
        },
        {
            id: 3,
            name: 'Charlie',
            image: 'Img/dogs/dog3.jpeg',
            age: '3 years old',
            description: 'Charlie is the cool kid, quiet and easy company for you'
        },
        {
            id: 4,
            name: 'Alex',
            image: 'Img/dogs/dog4.jpeg',
            age: '3 years old',
            description: 'Alex has the most inocent gaze and will make you forget your troubles'
        },
        {
            id: 5,
            name: 'Rex',
            image: 'Img/dogs/dog5.jpeg',
            age: '3 years old',
            description: 'Rex loves sleeping on the couch, make sure you have one space for him'
        }
    ];

    return (
        <section id="dogs" className="dogs-section">
            <div className="container">
                <div className="section-header">
                    <h2>Our Furry Friends</h2>
                    <p>Give a forever home to one of our beloved strays</p>
                </div>
                <div className="dogs-grid">
                    {dogs.map((dog) => (
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
                    <p>These wonderful dogs are part of our family and are looking for their forever homes. Contact us to learn more about adoption.</p>
                    <div className="dogs-cta-buttons">
                        <a href="#contact" className="btn btn-primary">Contact Us About Adoption</a>
                        <a href="https://gofundme.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-heart"></i> Support Our Dogs
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DogsSection;
