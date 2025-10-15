import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage: 'en' | 'ru') => {
        setLanguage(newLanguage);
    };

    return (
        <div className="language-switcher">
            <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-label="Switch to English"
            >
                EN
            </button>
            <button
                className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('ru')}
                aria-label="Switch to Russian"
            >
                RU
            </button>
        </div>
    );
};

export default LanguageSwitcher;
