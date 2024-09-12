import React, { SetStateAction, useState, Dispatch, useContext } from "react";
import { navBarInfos } from "../../utils/data";
import { INavBarInfos, ISubMenus } from "../../utils/types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MenuContext } from "../../utils/context";

function NavBar(): JSX.Element {
    const { t } = useTranslation();
    const { activeMenu, updateActiveMenu } = useContext(MenuContext);
    const [showSubmenu, setShowSubmenu] = useState<number | null>(null);
    
    const handleClick = (link: string) => {
        updateActiveMenu(link);
    };

    const handleMouseEnter = (i: number) => {
        setShowSubmenu(i);
    };

    const handleMouseLeave = () => {
        setShowSubmenu(null);
    };

    const handleSubmenu = (submenu: string) => {
        setTimeout(() => {
            const aboutElement = document.getElementById(submenu);
            if (aboutElement) {
              aboutElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 80);
    };

    return (
        <div className="md:flex items-center space-x-[1rem] hidden">
            {navBarInfos(t).map((infos: INavBarInfos, i: number) => (
                <div
                    key={i}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(i)}
                >
                    <Link
                        to={infos.link}
                        className={`hover:text-orange/70 cursor-pointer text-[1.5rem] font-bold ${infos.link === activeMenu ? 'text-orange' : 'text-white'} ${i === showSubmenu ? 'text-orange/70' : ''}`}
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                        onClick={() => handleClick(infos.link)}
                    >
                        {infos.title}
                    </Link>
                    {showSubmenu === i && infos.submenu.length > 1 && (
                        <div 
                            onMouseLeave={handleMouseLeave} 
                            className="font-bold absolute left-0 mt-2 flex flex-col space-y-[1rem] p-[1rem] bg-white/80 rounded-[.5rem] z-10 shadow-lg"
                        >
                            {infos.submenu.map((item: ISubMenus, index: number) => (
                                <Link
                                    key={index}
                                    to={infos.link}
                                    className="text-black hover:text-orange"
                                    onClick={() => handleSubmenu(item.title)}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export { NavBar };
