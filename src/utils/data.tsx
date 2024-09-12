import { TFunction } from "i18next";
import { IboutikchicImages, IDescriptions, IInfos, INavBarInfos, IRatesInfos } from "./types";
import { Caretaking, Cleaning, Contact, Deposit, Home, Infos, Inventory, KeyHandover, Laundry, Linen, LitReady, Luggage, Owner, Params, Rates, Rental, Repairs, Shop } from "../assets/svgComponents";
import React from "react";

export const navBarInfos= (t: TFunction):  INavBarInfos[] => [
    { 
        title: t('home'),
        logo: <Home fill="white" />,
        link: "/lesarcs",
        desc: [''],
        submenu: [],
    },
    { 
        title: t('ownerServices'),
        logo: <Owner fill="white" />,
        link: "/services_proprietaires",
        desc: [t('ownerServicesDesc'), t('ownerServicesDesc2'), t('ownerServicesDesc3'), t('ownerServicesDesc4')],
        submenu: [
            {
                title: t('keyHandover'),
                logo: <KeyHandover fill="white" />,
                desc: [t('handoverKeyDesc')]
            }, 
            {
                title: t('inventory'),
                logo: <Inventory fill="white" />,
                desc: [t('stateOfPlaceDesc')]
            }, 
            {
                title: t('caretaking'),
                logo: <Caretaking fill="white" />,
                desc: [t('caretakingDesc')]
            },
            { 
                title: t('deposit'),
                logo: <Deposit fill="white" />,
                desc: [t('depositManagementDesc')]
            },
            { 
                title: t('repairs'),
                logo: <Repairs fill="white" />,
                desc: [t('repairsDesc')]
            }, 
            {
                title: t('cleaning'),
                logo: <Cleaning fill="white" />,
                desc: [t('cleaningDesc'), t('cleaningDesc2'), t('cleaningDescOwner'), t('cleaningDescOwner2')]
            }
        ]
    },
    { 
        title: t('tenantServices'),
        logo: <Rental fill="white" />,
        link: "/services_locataires",
        desc: [t('tenantServicesDesc'), t('tenantServicesDesc2'), t('tenantServicesDesc3'), t('tenantServicesDesc4'), t('tenantServicesDesc5')],
        submenu: [
            { 
                title: t('linen'),
                logo: <Linen fill="white" />,
                desc: [t('linenDesc')]
            }, 
            { 
                title: t('equipment'),
                logo: <Params fill="white" />,
                desc: [t('equipmentDesc')]
            }, 
            { 
                title: "Lit Ready",
                logo: <LitReady fill="white" />,
                desc: [t('litReadyDesc')]
            }, 
            { 
                title: t('luggage'),
                logo: <Luggage fill="white" />,
                desc: [t('luggageDesc')]
            }, 
            { 
                title: t('laundry'),
                logo: <Laundry fill="white" />,
                desc: [t('laundryDesc')]
            }, 
            { 
                title: t('cleaning'),
                logo: <Cleaning fill="white" />,
                desc: [t('cleaningDesc'), t('cleaningDesc2')]
            }
        ],
    },
    { 
        title: t('rates'),
        logo: <Rates fill="white" />,
        link: "/tarifs",
        desc: [t('ratesDesc'), t('ratesDesc2'), t('ratesDesc3'), t('ratesDesc4'), t('ratesDesc5')],
        submenu: [],
    },
    { 
        title: "La boutikchic",
        logo: <Shop fill="white" />,
        link: "/laboutikchic",
        desc: ['images/boutikchic.jpg', 'images/boutikchic2.jpg', 'images/boutikchic3.jpg', 'images/boutikchic4.jpg', 'images/boutikchic5.jpg', 'images/boutikchic6.jpg', 'images/boutikchic7.jpg', 'images/boutikchic8.jpg', 'images/boutikchic9.jpg', 'images/boutikchic10.jpg', 'images/boutikchic11.jpg', 'images/boutikchic12.jpg', 'images/boutikchic13.jpg', 'images/boutikchic14.jpg', 'images/boutikchic15.jpg', 'images/boutikchic16.jpg'],
        submenu: [],
    },
    { 
        title: t('infos'),
        logo: <Infos fill="white" />,
        link: "/lesarcs",
        desc: [''],
        submenu: [
            { 
                title: t('press'),
                logo: <Repairs fill="white" />,
                desc: [t('ownerServicesDesc'), t('ownerServicesDesc2'), t('ownerServicesDesc3'), t('ownerServicesDesc4')]
            }, 
            { 
                title: t('partners'),
                logo: <Repairs fill="white" />,
                desc: [t('ownerServicesDesc'), t('ownerServicesDesc2'), t('ownerServicesDesc3'), t('ownerServicesDesc4')]
            }
        ],
    },
    { 
        title: t('contact'),
        logo: <Contact fill="white" />,
        link: "/contact",
        desc: [''],
        submenu: [],
        /*submenu: [
            { 
                title: t('quote'),
                logo: <Repairs fill="white" />,
                desc: [t('ownerServicesDesc'), t('ownerServicesDesc2'), t('ownerServicesDesc3'), t('ownerServicesDesc4')]
            }, 
            { 
                title: t('infomations'),
                logo: <Repairs fill="white" />,
                desc: [t('ownerServicesDesc'), t('ownerServicesDesc2'), t('ownerServicesDesc3'), t('ownerServicesDesc4')]
            }
        ],
        */
    },
];

export const arcsHome = (t: TFunction): IDescriptions => ({
    title: 'LA CONCIERGERIE SERVICES DES ARCS 1600',
    desc: [t('arcHomeDesc'), t('arcHomeDesc2'), t('arcHomeDesc3'), t('enjoy')]
});

export const ratesElements = (t: TFunction): IRatesInfos[] => ([
    {
        title: t('laundry'),
        desc: t('laundryInfos'),
        list: [
            {
                title: t('sheets'),
                ratesKind: t('price'),
                desc: t('sheetsDesc'),
                list: [
                    {
                        title: t('sheetsEl'),
                        desc: t('sheetsElDesc'),
                        price: "12,50 €"
                    },
                    {
                        title: t('sheetsEl2'),
                        desc: t('sheetsElDesc2'),
                        price: "18,50 €"
                    },
                ]
            },
            {
                title: t('houseLinen'),
                ratesKind: t('price'),
                desc: '',
                list: [
                    {
                        title: t('linenEl'),
                        desc: '',
                        price: "3,80 €"
                    },
                    {
                        title: t('linenEl2'),
                        desc: '',
                        price: "5,50 €"
                    },
                    {
                        title: t('linenEl3'),
                        desc: '',
                        price: "7,70 €"
                    },
                    {
                        title: t('linenEl4'),
                        desc: '',
                        price: "3,30 €"
                    },
                    {
                        title: t('linenEl5'),
                        desc: '',
                        price: "6,50 €"
                    },
                    {
                        title: t('linenEl6'),
                        desc: '',
                        price: "7,70 €"
                    },
                    {
                        title: t('linenEl7'),
                        desc: '',
                        price: "1 €"
                    },
                    {
                        title: t('linenEl8'),
                        desc: "1 pax",
                        price: "18,00 €"
                    },
                    {
                        title: t('linenEl8'),
                        desc: "2 pax",
                        price: "24,00 €"
                    },
                    {
                        title: t('linenEl9'),
                        desc: "1 pax",
                        price: "25,00 €"
                    },
                    {
                        title: t('linenEl9'),
                        desc: "2 pax",
                        price: "34,00 €"
                    },
                    {
                        title: t('linenEl10'),
                        desc: "1 pax",
                        price: "20,00 €"
                    },
                    {
                        title: t('linenEl10'),
                        desc: "2 pax",
                        price: "27,00 €"
                    },
                    {
                        title: t('linenEl11'),
                        desc: '',
                        price: "9,00 €"
                    },
                    {
                        title: t('linenEl12'),
                        desc: '',
                        price: "18,00 €"
                    },
                ]
            },
            {
                title: t('clothes'),
                ratesKind: t('price'),
                desc: t('clothesDesc'),
                list: [
                    {
                        title: t('clothesEl'),
                        desc: t('clothesElDesc'),
                        price: "16,00 €"
                    },
                    {
                        title: t('clothesEl2'),
                        desc: '',
                        price: "3,50 €"
                    },
                ]
            },         
        ]
    },
    {
        title: `${t('linenandmaterialRental')} *`,
        desc: '',
        list: [
            {
                title: t('linen'),
                ratesKind: t('pricePerWeek'),
                desc: '',
                list: [
                    {
                        title: t('sheetsEl'),
                        desc: t('sheetsElDesc'),
                        price: '18,50 €'
                    },
                    {
                        title: t('sheetsEl2'),
                        desc: t('sheetsElDesc2'),
                        price: '23,50 €'
                    },
                    {
                        title: t('rentalLinenEl'),
                        desc: t('rentalLinenElDesc'),
                        price: '13,00 €'
                    },
                    {
                        title: t('rentalLinenEl2'),
                        desc: t('rentalLinenElDesc2'),
                        price: '13,00 €'
                    },
                    {
                        title: t('linenEl3'),
                        desc: '',
                        price: '7,70 €'
                    },
                    {
                        title: t('linenEl2'),
                        desc: '',
                        price: '6,50 €'
                    },
                    {
                        title: t('linenEl'),
                        desc: '',
                        price: '5,50 €'
                    },
                    {
                        title: t('linenEl4'),
                        desc: '',
                        price: '4,00 €'
                    },
                    {
                        title: t('rentalLinenEl3'),
                        desc: t('rentalLinenElDesc3'),
                        price: '1,00 €'
                    },
                ]
            },
            {
                title: t('equipment'),
                ratesKind: t('pricePerWeek'),
                desc: '',
                list: [
                    {
                        title: t('equipmentEl'),
                        desc: t('equipmentElDesc'),
                        price: t('equipmentElPrice')
                    },
                    {
                        title: t('equipmentEl2'),
                        desc: '',
                        price: '10,00 €'
                    },
                    {
                        title: t('equipmentEl3'),
                        desc: t('equipmentElDesc3'),
                        price: t('equipmentElPrice3')
                    },
                ]  
            }
        ]
    },
    {
        title: t('servicesPlus'),
        desc: t('servicesPlusDesc'),
        list: [
            {
                title: '',
                ratesKind: t('pricePerDay'),
                desc: '',
                list: [
                    {
                        title: t('servicesPlusEl'),
                        desc: t('servicesPlusElDesc'),
                        price: '20,00 €'
                    },
                    {
                        title: t('servicesPlusEl2'),
                        desc: t('servicesPlusElDesc'),
                        price: '10,00 €'
                    }
                ]
            }
        ]
    },
    {
        title: t('services'),
        desc: '',
        list: [
            {
                title: '',
                ratesKind: t('price'),
                desc: '',
                list: [
                    {
                        title: t('luggageService'),
                        desc: t('luggageServiceDesc'),
                        price: '5,00 €'
                    },
                    {
                        title: "Taxi",
                        desc: t('taxiDesc'),
                        price: '5,00 €'
                    },
                    {
                        title: t('shower'),
                        desc: t('showerDesc'),
                        price: '9,00 €'
                    },
                    {
                        title: t('papers'),
                        desc: t('papersDesc'),
                        price: '0,50 €'
                    },
                ]
            }
        ]
    },
    {
        title: t('ownerServices'),
        desc: t('ownerServicesInfos'),
        list: [
            {
                title: t('keyHandover'),
                ratesKind: t('price'),
                desc: '',
                list: [
                    {
                        title: t('keyHandoverEl'),
                        desc: '',
                        price: '75,00 €'
                    },
                    {
                        title: t('keyHandoverEl2'),
                        desc: t('keyHandoverElDesc2'),
                        price: '195,00 €'
                    },
                    {
                        title: t('keyHandoverEl3'),
                        desc: '',
                        price: '390,00 €'
                    },
                    {
                        title: t('keyHandoverEl4'),
                        desc: '',
                        price: '550,00 €'
                    },
                ]
            },
            {
                title: t('inventory'),
                ratesKind: t('price'),
                desc: t('inventoryInfos'),
                list: [
                    {
                        title: t('inventoryEl'),
                        desc: '',
                        price: '32,00 €'
                    },
                    {
                        title: t('inventoryEl2'),
                        desc: t('inventoryElDesc2'),
                        price: '35,00 €'
                    },
                    {
                        title: t('inventoryEl3'),
                        desc: t('inventoryElDesc3'),
                        price: '42,00 €'
                    },
                    {
                        title: t('inventoryEl4'),
                        desc: t('inventoryElDesc4'),
                        price: '45,00 €'
                    },
                    {
                        title: t('inventoryEl5'),
                        desc: t('inventoryElDesc5'),
                        price: '53,00 €'
                    },
                ]
            },
            {
                title: t('caretaking'),
                ratesKind: t('price'),
                desc: t('caretakingInfos'),
                list: [
                    {
                        title: t('caretakingEl'),
                        desc: '',
                        price: '100,00 €'
                    },
                    {
                        title: t('caretakingEl2'),
                        desc: '',
                        price: '150,00 €'
                    },
                ]
            },
            {
                title: t('repairs'),
                ratesKind: t('pricePerIntervention'),
                desc: "Max 30 min",
                list: [
                    {
                        title: t('caretakingEl'),
                        desc: '',
                        price: '32 € HT'
                    },
                    {
                        title: t('caretakingEl2'),
                        desc: '',
                        price: '37 € HT'
                    },
                ]
            },
        ]
    }
]);

export const arcsInfos: IInfos = {
    title: 'LE COMPTOIR DES ARCS',
    shortTitle: "LES ARCS 1600",
    place:'Place du soleil',
    address: 'Arc 1600',
    zipCode: '73700',
    city: 'Bourg-Saint-Maurice',
    contact: 'contact@lecomptoirdesarcs.com',
    link: '/lesarcs',
    name: 'Bénédicte Hubert',
    tel: ['04 79 06 79 12', '06 12 98 51 05'],
    logo: 'images/arc-logo.png',
};

export const rosiereInfos: IInfos = {
    title: 'LE COMPTOIR DE LA ROSIERE',
    shortTitle: "LA ROSIERE",
    place:'Résidence Les Terrasses',
    address: 'Le Centre Station',
    zipCode: '73700',
    city: 'La Rosière',
    contact: 'contact@lecomptoirdelarosiere.com',
    link: 'https://lesclesdelarosiere.fr/',
    name: 'Anthony Charpentier',
    tel: ['04 79 00 59 56 ', '07 60 83 79 11'],
    logo: 'images/rosiere-logo.png',
};

