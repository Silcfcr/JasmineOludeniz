import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage: 'en' | 'ru' | 'tr') => {
        setLanguage(newLanguage);
    };

    return (
        <div className="language-switcher">
            <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-label="Switch to English"
                title="English"
            >
                🇬🇧
            </button>
            <button
                className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('ru')}
                aria-label="Switch to Russian"
                title="Русский"
            >
                🇷🇺
            </button>
            <button
                className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('tr')}
                aria-label="Switch to Turkish"
                title="Türkçe"
            >
                🇹🇷
            </button>
        </div>
    );
};

export default LanguageSwitcher;
