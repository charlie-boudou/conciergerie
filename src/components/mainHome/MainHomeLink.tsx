import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CircleArrowLeft, CircleArrowRight } from "../../assets/svgComponents";
import { MenuContext } from "../../utils/context";

interface IMainHomeLinksProps {
    link: string;
    logo: string;
}

function MainHomeLink({link, logo}: IMainHomeLinksProps): JSX.Element {
    const { updateActiveMenu } = useContext(MenuContext);

  return (
    <Link onClick={() => updateActiveMenu(link)} to={link} className="m-auto md:m-0 md:w-[30%] w-[80%] flex items-center space-x-[.5rem] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        {link.includes('arcs') && (
            <CircleArrowLeft className='md:w-[15rem] md:h-[15rem] w-[12rem] h-[12rem] stroke-orange' />
        )}
        <div>
            <img
                src={logo}
                className={`opacity-80 hover:opacity-100 ${link.includes('arcs') ? 'border-orange' : 'border-pink'} border rounded-[.5rem]`}
                alt="logo"
            />
        </div>
        {link.includes('rosiere') && (
            <CircleArrowRight className='md:w-[15rem] md:h-[15rem] w-[12rem] h-[12rem] stroke-pink' />
        )}
    </Link>
  );
}

export { MainHomeLink };