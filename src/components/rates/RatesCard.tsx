import React from "react";
import { v4 } from "uuid";
import { HandRight, Star } from "../../assets/svgComponents";
import { IRatesElement, IRatesInfos, IRatesMain } from "../../utils/types";

interface IRatesCardProps {
    element: IRatesInfos;
}

function RatesCard({ element }: IRatesCardProps): JSX.Element {

  return (
    <div 
        id={element.title}
        className="w-full flex flex-col md:px-[1rem] py-[3rem] space-y-[2rem] items-center"
    >
        <p 
            className="text-orange font-bold md:text-[4rem] text-[3rem] text-center"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
            {element.title}
        </p>
        <p className="text-[1.5rem]">{element.desc}</p>
        <div className="flex flex-col space-y-[1rem] text-[1.5rem] w-full">
            {element.list.map((item: IRatesMain) => (
                <div key={v4()}>
                    <table className="w-full">
                        <thead>
                            <tr className={`flex ${item.title === '' ? 'justify-end' : 'justify-between'} w-full`}>
                                {item.title !== '' && (
                                    <th className="md:w-[80%] w-[70%] text-left p-[.5rem]">
                                        <div className="flex items-center space-x-[.5rem] text-orange">
                                            <Star className="w-[1.5rem] h-[1.5rem] fill-orange" />
                                            <p>{item.title}</p>
                                        </div>
                                    </th>
                                )}
                                <th className="md:w-[20%] w-[30%] text-right p-[.5rem] text-orange">
                                    {item.ratesKind}
                                </th>
                            </tr>
                            <tr>
                                <th className="w-full text-justify">
                                    {item.desc}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.list.map((el: IRatesElement) => (
                                <tr key={v4()} className="flex justify-between">
                                    <td className="md:w-[80%] w-[70%] text-left p-[.5rem]">
                                        <span className={`${item.title === '' ? 'font-bold' : ''}`}>{el.title} :</span> <span>{el.desc}</span>
                                    </td>
                                    <td className="md:w-[20%] w-[30%] text-right p-[.5rem]">
                                        {el.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    </div>
  );
}

export { RatesCard };

