import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import Flag from 'react-world-flags';

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <Flag
        code={language === 'en' ? 'CZ' : 'GB'}
        style={{ width: '30px', cursor: 'pointer', marginLeft: '10px' }}
        onClick={() => changeLanguage(language === 'en' ? 'cs' : 'en')}
      />
    </div>
  );
}

export default LanguageSwitcher;
