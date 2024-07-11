import React from 'react';
import { LanguageProvider, LanguageContext } from './components/LanguageContext';
import Clock from './components/Clock';

const App = () => {
  return (
    <LanguageProvider>
      <LanguageContext.Consumer>
        {({ language, setLanguage }) => (
          <div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
            <Clock />
          </div>
        )}
      </LanguageContext.Consumer>
    </LanguageProvider>
  );
};

export default App;
