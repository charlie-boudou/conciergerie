export type IInfos = {
    title: string;
    shortTitle: string;
    place:string;
    address: string;
    zipCode: string;
    city: string;
    contact: string;
    link: string;
    name: string;
    tel: Array<string>;
    logo: string;
};

export type IDescriptions = {
    title: string;
    desc: Array<string>;
}

export type ISubMenus = {
    title: string;
    logo: JSX.Element;
    desc: Array<string>;
}

export type INavBarInfos = {
    title: string;
    logo: JSX.Element;
    link: string;
    desc: Array<string>;
    submenu: Array<ISubMenus>;
}

export type IRatesElement = {
    title: string;
    desc: string;
    price: string; 
};

export type IRatesMain = {
    title: string;
    ratesKind: string;
    desc: string;
    list: IRatesElement[];
};

export type IRatesInfos = {
    title: string;
    desc: string;
    list: IRatesMain[];
};

export type IboutikchicImages = {
    src: string,
    width: number,
    height: number
}