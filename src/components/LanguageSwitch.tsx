import React from 'react';
import { useTranslation } from 'react-i18next';
import { France, Uk } from '../assets/svgComponents';

function LanguageSwitch(): JSX.Element {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className="flex items-center space-x-[.5rem] border border py-[.3rem] px-[.5rem] rounded-[.5rem]"
    >
        <France onClick={() => changeLanguage('fr')} className="w-[2rem] h-[2rem] cursor-pointer" />
        <Uk onClick={() => changeLanguage('en')} className="w-[2rem] h-[2rem] cursor-pointer" />
    </div>
  );
}

export { LanguageSwitch };