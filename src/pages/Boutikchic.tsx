import React, { useEffect, useState } from "react";
import { navBarInfos } from "../utils/data";
import { useTranslation } from "react-i18next";
import { GeneralInfos } from "../components/infos/GeneralInfos";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import { IboutikchicImages } from "../utils/types";

function Boutikchic(): JSX.Element {
    const { t } = useTranslation();
    
    const boutikchicInfos = navBarInfos(t).find(item => item.title === "La boutikchic");
    const [photos, setPhotos] = useState<IboutikchicImages[]>([]);

    const findDimensions = async (images: string[]) => {
        const tab: IboutikchicImages[] = await Promise.all(
            images.map((image: string) => {
                return new Promise<IboutikchicImages>((resolve) => {
                    const img = new Image();
                    img.src = image;
                
                    img.onload = () => {
                        resolve({
                            src: image,
                            width: img.width,
                            height: img.height,
                        });
                    };
                });
            })
        );
        
        setPhotos(tab);
    };
    
    useEffect(() => {
        if (boutikchicInfos) {
            findDimensions(boutikchicInfos.desc);
        }
    }, [boutikchicInfos]);

    return (
        <div 
          className="w-full h-screen overflow-y-scroll flex flex-col items-center space-y-[2rem] pb-[2rem]"
        >
            {boutikchicInfos && (
                <div className="w-[90%] rounded-[.5rem] bg-white/90 p-[1rem]">
                    <GeneralInfos title={boutikchicInfos.title} infos={[]} id="La boutikchic" />
                    
                    {photos.length > 0 ? ( 
                        <ColumnsPhotoAlbum photos={photos} columns={4} />
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            )}
        </div>
    );
}

export { Boutikchic };
