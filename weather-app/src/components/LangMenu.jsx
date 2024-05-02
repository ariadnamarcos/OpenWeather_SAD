import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LangMenu({ onClicked }) {
  const { t, i18n } = useTranslation();
  const [option, setOption] = useState('');

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setOption(selectedOption);
    onClicked(selectedOption);
  };

  return (
    <span  >
      <select value={option} onChange={handleOptionChange} className='select'>
        <option value="en">{t('English')}</option>
        <option value="es">{t('Spanish')}</option>
        <option value="cat">{t('Catalan')}</option>
        <option value="al">{t('German')}</option>
        <option value="fr">{t('French')}</option>
        <option value="it">{t('Italian')}</option>
      </select>
      {option && <p>{t('Selected option')}: {option}</p>}
    </span>
  );
}

export default LangMenu;
