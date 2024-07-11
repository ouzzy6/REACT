import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Clock = () => {
  const { language } = useContext(LanguageContext);
  const currentTime = new Date().toLocaleTimeString();

  const messages = {
    en: 'Current time',
    es: 'Hora actual',
    fr: 'Heure actuelle',
  };

  return (
    <div>
      <p>{messages[language]}: {currentTime}</p>
    </div>
  );
};

export default Clock;
