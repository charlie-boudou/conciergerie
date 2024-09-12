import React from "react";
import { useTranslation } from 'react-i18next';
import { MainHomeLink } from "../components/mainHome/MainHomeLink";
import { arcsInfos, rosiereInfos } from "../utils/data";
import { MainHomeCard } from "../components/mainHome/MainHomeCard";

function MainHome(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div 
      className="w-full md:h-screen h-full p-[1rem] bg-no-repeat md:bg-center bg-cover"
      style={{ backgroundImage: 'url(images/background7.jpeg)'}}
    >
      <div className="w-full h-full flex flex-col items-center pt-[2rem]">
        <div className="w-full flex md:flex-row flex-col justify-center md:space-x-[1rem] md:justify-between px-[.5rem]">
          <MainHomeLink link={arcsInfos.link} logo={arcsInfos.logo} />
          <div 
            className="text-center text-[3rem] md:pt-[2rem] text-white font-bold"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Conciergeries et Services en Savoie
          </div>
          <MainHomeLink link={rosiereInfos.link} logo={rosiereInfos.logo} />
        </div> 
        <MainHomeCard />
      </div>
    </div>
  );
}

export { MainHome };
