import React, { useState } from "react";
import { Burger, Cross } from "../../assets/svgComponents";
import { navBarInfos } from "../../utils/data";
import { INavBarInfos } from "../../utils/types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LanguageSwitch } from "../LanguageSwitch";

function BurgerMenu() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
        <Burger className="w-[3rem] h-[3rem] fill-orange cursor-pointer" onClick={toggleMenu} />
        <div
            className={`absolute top-[-2rem] flex flex-col space-y-[2rem] right-[-1rem] w-screen h-screen bg-white mt-[1rem] rounded-lg shadow-lg ${
            isOpen ? "block" : "hidden"
            }`}
        >
            <div className="w-full flex justify-end p-[1rem]">
                <Cross className="w-[3rem] h-[3rem] fill-orange cursor-pointer" onClick={toggleMenu} />
            </div>
            <ul className="flex flex-col">
                {navBarInfos(t).map((infos: INavBarInfos) => (
                    <Link to={infos.link} className="p-[1rem] border-b hover:bg-gray-100 text-[1.5rem]" onClick={toggleMenu}>
                        {infos.title}
                    </Link>
                ))}
            </ul>
            <div className="w-full flex justify-end p-[1rem]">
                <LanguageSwitch />
            </div>
        </div>
    </div>
  );
}

export { BurgerMenu };


