import React from "react";
import { arcsHome } from '../../utils/data';
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button";

function HomeCard(): JSX.Element {
  const { t } = useTranslation();

    return (
        <div 
            style={{ backgroundImage: 'url(images/background6.jpeg)'}}
            className="w-full h-screen flex flex-col items-center justify-evenly bg-no-repeat bg-center bg-cover px-[1rem]"
        >
        <p 
            className="text-orange font-bold text-[4rem] text-center"
            style={{ textShadow: '2px 2px 4px rgba(225, 225, 225, 0.5)' }}
        >
            {arcsHome(t).title}
        </p>
        <Button scrollElement="homeInfos" title={t('learnMore')} />
        </div>
    );
}

export { HomeCard };