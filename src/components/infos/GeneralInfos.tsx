import React from "react";
import { SubMenus } from "../submenus/SubMenus";
import { INavBarInfos, ISubMenus } from "../../utils/types";
import { InfosCard } from "./InfosCard";

interface IGeneralInfosProps {
    infos: string[];
    submenu?: INavBarInfos[] | ISubMenus[];
    image?: string;
    title?: string;
    id: string;
}

function GeneralInfos({ infos, submenu, image, title, id }: IGeneralInfosProps): JSX.Element {

    return (
        <div className="w-full flex flex-col items-center">
            <InfosCard infos={infos} image={image} title={title} id={id} />
            {submenu && (
                <SubMenus infos={submenu}/>
            )}
        </div>
      );
}

export { GeneralInfos };