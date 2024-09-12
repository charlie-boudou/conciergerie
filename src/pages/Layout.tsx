import React, { useContext, useEffect } from "react";
import { Footer } from "../components/footer/Footer";
import { LanguageSwitch } from "../components/LanguageSwitch";
import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../components/navBar/NavBar";
import { arcsInfos } from "../utils/data";
import { MenuContext } from "../utils/context";
import { BurgerMenu } from "../components/navBar/BurgerMenu";

interface ILayoutProps {
  children: JSX.Element;
}

function Layout({ children }: ILayoutProps): JSX.Element {
  const location = useLocation();
  const { updateActiveMenu } = useContext(MenuContext);

  useEffect(() => {
    updateActiveMenu(location.pathname);
  },[]);

  return (
    <div className="w-full flex flex-col justify-between ">
      <div 
        className={`w-full ${location.pathname !== '/' && location.pathname !== '/lesarcs'  ? 'md:bg-cover bg-no-repeat md:bg-top' : ''}`}
        style={{backgroundImage: `${location.pathname !== '/' && location.pathname !== '/lesarcs' ? 'url(images/background4.jpg)' : ''}`}}
      >
        <div 
          className={`w-full flex items-center space-x-[.5rem] ${location.pathname !== '/' && location.pathname !== '/lesarcs' ? '' : 'absolute'} ${location.pathname !== '/' ? 'justify-between' : 'justify-end'} p-[1rem]`}
        >
          {location.pathname !== '/' && (
            <Link to="/lesarcs">
              <img src={arcsInfos.logo} alt="logo" className="w-[10rem] md:w-[15rem] rounded-[.5rem]"/>
            </Link>
          )}
          {location.pathname !== '/' && (
              <NavBar />
          )}
          <div className="hidden md:block">
            <LanguageSwitch />
          </div>
          <div className="block md:hidden">
            {location.pathname !== '/' && (
                <BurgerMenu />
            )}
          </div>
        </div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export { Layout };