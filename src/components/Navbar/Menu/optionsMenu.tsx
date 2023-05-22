import {MenuBtnDark, MenuBtnLing} from "../../../Styles";

interface optionMenu {
    html: string;
    style: object;
    href: string;
}

export const optionsMenu: optionMenu[] = [
    {html: "Solicitudes Admistrativas", style: MenuBtnLing, href: "#solicitudesAdm"},
    {html: "Proveedores y contratos", style: MenuBtnDark, href: "#proveedoresContr"},
    {html: "Pagos y Proviciones", style: MenuBtnLing, href: "#pagosProv"},
    {html: "Estados Solicitudes", style: MenuBtnDark, href: "#estadoSolic"}
];
