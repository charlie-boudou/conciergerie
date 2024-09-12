import React from "react";
import { IInfos } from "../../utils/types";

interface IInfosCardFooterProps {
    infos: IInfos;
}

function InfosCardFooter({ infos }: IInfosCardFooterProps): JSX.Element {

  return (
    <div className="flex flex-col space-y-[.5rem]">
      <div className="text-center md:text-justify">
        <p className={`font-bold ${infos.title.includes('ARCS') ? 'text-orange' : 'text-pink'}`}>{infos.title}</p>
        <p>{infos.place}</p>
        <p>{infos.address}</p>
        <p>{infos.zipCode} {infos.city}</p>
        <a href={`mailto:${infos.contact}`}>{infos.contact}</a>
      </div>
    </div>
  );
}

export { InfosCardFooter };