import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import AppContent from './components/AppContent';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;