import React from 'react';

interface NavigationProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
    const sections = [
        { id: 'home', label: 'Home', icon: 'fas fa-home' },
        { id: 'hotel', label: 'Hotel', icon: 'fas fa-building' },
        { id: 'restaurant', label: 'Restaurant', icon: 'fas fa-utensils' },
        { id: 'rooms', label: 'Rooms', icon: 'fas fa-bed' },
        { id: 'contact', label: 'Contact', icon: 'fas fa-phone' }
    ];

    return (
        <nav className="main-nav">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="/jasmine-logo.png" alt="Jasmine Hotel" />
                </div>
                <ul className="nav-menu">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <button
                                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                                onClick={() => onSectionChange(section.id)}
                            >
                                <i className={section.icon}></i>
                                {section.label}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="nav-toggle">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
