import React from "react";
import { GeneralInfos } from "../components/infos/GeneralInfos";
import { INavBarInfos, ISubMenus } from "../utils/types";
import { InfosCard } from "../components/infos/InfosCard";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";

interface IServicesProps {
  infos?: INavBarInfos;
  id: string;
}

function Services({ infos, id }: IServicesProps): JSX.Element {
  const { t } = useTranslation();
  
    return (
        <div 
          className="w-full h-screen overflow-y-scroll flex flex-col items-center space-y-[2rem] pb-[2rem]"
        >
          {infos && (
            <>
              <div className="w-[90%] rounded-[.5rem] md:h-screen bg-white/90 px-[1rem]">
                <GeneralInfos title={infos.title} infos={infos.desc} submenu={infos.submenu} id={id} />
              </div>
              {infos.submenu.map((item: ISubMenus) => (
                <div className="w-[90%] rounded-[.5rem] md:h-screen m-auto bg-white/90 px-[1rem]" key={v4()}>
                  <InfosCard infos={item.desc} title={item.title} id={item.title} showButton={item.title !== t('cleaning') && item.title !== "Lit Ready"} />
                </div>
              ))}
            </>
          )}
        </div>
      );
}

export { Services };