import React from "react";
import { ContactCard } from "./ContactCard";
import { InfosCardFooter } from "./InfosCardFooter";
import { arcsInfos, rosiereInfos } from '../../utils/data';
import { useLocation } from "react-router-dom";

function Footer(): JSX.Element {
  const location = useLocation();

  return (
    <footer className={`w-full h-fit py-[1rem] md:px-[3rem] px-[.5rem] flex flex-col md:flex-row space-y-[1rem] md:space-y-0 items-center md:items-start md:justify-between ${location.pathname === '/lesarcs' ? 'border-t border-orange' : ''}`}>
      <InfosCardFooter infos={arcsInfos} />
      <div className="flex flex-col space-y-[.5rem] w-full md:w-[40%]">
        <p className="text-center font-bold">CONTACT</p>
        <div className="flex items-center space-x-[1rem] w-full justify-between">
          <ContactCard infos={arcsInfos} />
          <ContactCard infos={rosiereInfos} />
        </div>
      </div>
      <InfosCardFooter infos={rosiereInfos} />
    </footer>
  );
}

export { Footer };