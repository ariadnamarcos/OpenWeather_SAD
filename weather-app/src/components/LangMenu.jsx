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
    <div>
      <select value={option} onChange={handleOptionChange}>
        <option value="en">{t('English')}</option>
        <option value="es">{t('Spanish')}</option>
      </select>
      {option && <p>{t('Selected option')}: {option}</p>}
    </div>
  );
}

export default LangMenu;
