import React from "react";
import { useTranslation } from 'react-i18next';

function MainHomeCard(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div 
        className="md:w-[40%] text-center flex flex-col m-auto text-[1.3rem] text-[#011c35] font-bold bg-white/[.4] px-[1rem] py-[.5rem] rounded-[.5rem]"
    >
        <p className="text-[2rem]">{t('welcome')}</p>
        <p className="text-justify">{t('welcomeDesc1')}</p>
        <p className="text-justify">{t('welcomeDesc2')}</p>
        <div className="w-full text-center font-bold">
        <p>{t('contactArc')}</p>
        <p>{t('contactRosiere')}</p>
        <p>{t('welcomeDesc3')}</p>
        </div>
    </div>
  );
}

export { MainHomeCard };