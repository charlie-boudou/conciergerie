import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { INavBarInfos, ISubMenus } from "../../utils/types";
import { MenuContext } from "../../utils/context";
import { v4 } from "uuid";

interface ISubMenusProps {
  infos: INavBarInfos[] | ISubMenus[];
}

function SubMenus({ infos }: ISubMenusProps): JSX.Element {
  const { t } = useTranslation();
  const { updateActiveMenu } = useContext(MenuContext);

  const handleClick = (title: string) => {
    updateActiveMenu(title);
  };

  const handleScroll = (infos: string) => {
    const aboutElement = document.getElementById(infos);
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-[1rem] w-full md:px-[1rem] py-[2rem]">
      {infos.map((infos: INavBarInfos | ISubMenus) => {
        if ("link" in infos) {
          if (infos.title !== t("home")) {
            return (
              <Link
                key={v4()}
                to={infos.link}
                className="w-[40%] md:w-[20%] font-bold rounded-[.5rem] space-y-[.2rem] md:space-y-[.5rem] md:p-[1rem] p-[.5rem] flex flex-col items-center bg-orange text-white cursor-pointer transition ease-in-out hover:scale-110 duration-300"
                onClick={() => handleClick(infos.title)}
              >
                <div className="w-[2rem] h-[2rem]">{infos.logo}</div>
                <p className="text-center leading-none text-nowrap">{infos.title}</p>
              </Link>
            );
          }
        } else {
          return (
            <div
              key={v4()}
              className="w-[40%] md:w-[20%] font-bold rounded-[.5rem] space-y-[.2rem] md:space-y-[.5rem] md:p-[1rem] p-[.5rem] flex flex-col items-center bg-orange text-white cursor-pointer transition ease-in-out hover:scale-110 duration-300"
              onClick={() => handleScroll(infos.title)}
            >
              <div className="w-[2rem] h-[2rem]">{infos.logo}</div>
              <p className="md:text-center leading-none text-nowrap">{infos.title}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export { SubMenus };
