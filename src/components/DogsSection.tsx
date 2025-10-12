import React from 'react';

const DogsSection: React.FC = () => {
    const dogs = [
        {
            id: 1,
            name: 'Lucas',
            image: 'Img/dogs/dog1.jpeg',
            description: "Loves food except tomatoes, if you want company while you're eating Lucas is your guy"
        },
        {
            id: 2,
            name: 'Bobby',
            image: 'Img/dogs/dog2.jpeg',
            description: "If you're looking for a dance partner full of energy, Bobby is your guy"
        },
        {
            id: 3,
            name: 'Charlie',
            image: 'Img/dogs/dog3.jpeg',
            age: '4 years old',
            description: 'Charlie is the cool kid, quiet company'
        },
        {
            id: 4,
            name: 'Alex',
            image: 'Img/dogs/dog4.jpeg',
            age: '1 year old',
            description: 'Playful puppy, full of energy and love'
        },
        {
            id: 5,
            name: 'Rex',
            image: 'Img/dogs/dog5.jpeg',
            age: '5 years old',
            description: 'Protective and intelligent, great guard dog'
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
                    <a href="#contact" className="btn btn-primary">Contact Us About Adoption</a>
                </div>
            </div>
        </section>
    );
};

export default DogsSection;
