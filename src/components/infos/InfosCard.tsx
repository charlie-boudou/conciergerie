import React from "react";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";

interface IInfosCardProps {
    infos: string[];
    image?: string;
    title?: string;
    id: string;
    showButton?: boolean;
}

function InfosCard({ infos, image, title, id, showButton}: IInfosCardProps): JSX.Element {
    const { t } = useTranslation();
    
    return (
        <div 
            id={id}
            className="w-full flex flex-col px-[1rem] py-[3rem] space-y-[2rem] items-center"
        >
            {title && (
                <p 
                    className="text-orange font-bold md:text-[4rem] text-[3rem] text-center"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                    {title}
                </p>
            )}
            {image && (
                <img src={image} alt="logo" className="w-[15rem]" />
            )}
            <div className="flex flex-col space-y-[1rem] text-[1.5rem] md:w-[70%]">
                {infos.map((desc: string) => (
                    <p className="text-justify">{desc}</p>
                ))}
            </div>
            {showButton && (
                <Button title={t('rates')} scrollElement={t('ownerServices')} link="/tarifs" />
            )}
        </div>
      );
}

export { InfosCard };