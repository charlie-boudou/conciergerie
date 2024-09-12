import React from "react";
import { arcsHome, arcsInfos, navBarInfos } from '../utils/data';
import { useTranslation } from "react-i18next";
import { GeneralInfos } from "../components/infos/GeneralInfos";
import { HomeCard } from "../components/home/HomeCard";

function HomeArcs(): JSX.Element {
  const { t } = useTranslation();

    return (
        <div className="w-full h-full">
          <HomeCard />
          <GeneralInfos image={arcsInfos.logo} submenu={navBarInfos(t)} infos={arcsHome(t).desc} id="homeInfos"/>
        </div>
      );
}

export { HomeArcs };