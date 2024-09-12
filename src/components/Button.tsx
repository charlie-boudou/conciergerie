import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { Arrow } from '../assets/svgComponents';
import { Link } from "react-router-dom";
import { MenuContext } from "../utils/context";

interface IButtonProps {
    link?: string;
    scrollElement?: string;
    title: string;
    setIsMessageSend?: Dispatch<SetStateAction<boolean>>;
}

function Button({ link, scrollElement, title, setIsMessageSend }: IButtonProps): JSX.Element {
  const { updateActiveMenu } = useContext(MenuContext);

  const handleClick = () => {
    if (scrollElement) {
      const aboutElement = document.getElementById(scrollElement);
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (link && scrollElement) {
      updateActiveMenu(link);
      setTimeout(() => {
        const aboutElement = document.getElementById(scrollElement);
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    if (setIsMessageSend) {
      setIsMessageSend(false);
    }
  };

    return (
        <Link to={link || "#"} onClick={handleClick}
            className="w-fit font-bold text-[1.5rem] rounded-[.5rem] px-[1rem] py-[.5rem] flex items-center space-x-[1rem] bg-orange text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <p>{title}</p>
          <Arrow className="w-[1.5rem] h-[1.5rem]" fill="white" />
        </Link>
      );
}

export { Button };