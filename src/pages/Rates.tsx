import React from "react";
import { useTranslation } from "react-i18next";
import { GeneralInfos } from "../components/infos/GeneralInfos";
import { navBarInfos, ratesElements } from '../utils/data';
import { RatesCard } from "../components/rates/RatesCard";
import { v4 } from "uuid";
import { IRatesInfos } from "../utils/types";

function Rates(): JSX.Element {
  const { t } = useTranslation();

  const ratesInfos = navBarInfos(t).find(item => item.title === t('rates'));
  
    return (
        <div 
          className="w-full h-screen overflow-y-scroll flex flex-col items-center space-y-[2rem] pb-[2rem]"
        >
              {ratesInfos && (
                <>
                    <div className="w-[90%] rounded-[.5rem] md:h-screen bg-white/90 px-[1rem]">
                        <GeneralInfos title={ratesInfos.title} infos={ratesInfos.desc} submenu={ratesInfos.submenu} id={t('rates')} />
                    </div>
                    {ratesElements(t).map((element: IRatesInfos) => (
                        <div className="w-[90%] rounded-[.5rem] m-auto bg-white/90 px-[1rem]" key={v4()}>
                            <RatesCard element={element} />
                        </div>
                    ))}
                </>
              )}
        </div>
      );
}

export { Rates };