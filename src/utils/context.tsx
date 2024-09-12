import React from "react";
import { Dispatch, SetStateAction } from "react";

interface Menu {
    activeMenu: string;
    updateActiveMenu: Dispatch<SetStateAction<string>>;
}
  
export const MenuContext = React.createContext({} as Menu);