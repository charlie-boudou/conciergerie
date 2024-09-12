import React from "react";
import { IInfos } from "../../utils/types";

interface IContactCardProps {
    infos: IInfos;
}

function ContactCard({infos}: IContactCardProps): JSX.Element {

  return (
    <div className="flex flex-col space-y-[.5rem] text-center">
        <p className="font-bold"><span className={`${infos.title.includes('ARCS') ? 'text-orange' : 'text-pink'}`}>{infos.shortTitle}</span> : {infos.name}</p>
        <div>
            {infos.tel.map((tel: string) => (
                <p>Tel: {tel}</p>
            ))}
        </div>
    </div>
  );
}

export { ContactCard };