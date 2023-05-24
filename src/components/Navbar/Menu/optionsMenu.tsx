import {HoverMenuBtn, MenuBtn} from "../../../Styles";
import {Nav} from "react-bootstrap";
import React, {useState} from "react";

interface optionMenu {
    html: string;
    href: string;
}

const OptionMenu = (props: optionMenu) => {
    const [style, setStyle] = useState(MenuBtn);

    const handleMouseEnter = () => {
        setStyle(HoverMenuBtn);
    };

    const handleMouseOut = () => {
        setStyle(MenuBtn);
    };

    return (
        <Nav.Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
            style={style}
            href={props.href}
        >
            {props.html}
        </Nav.Link>
    );
};

export const optionsMenu: optionMenu[] = [
    {html: "Solicitudes Admistrativas", href: "#solicitudesAdm"},
    {html: "Proveedores y Contratos", href: "#proveedoresContr"},
    {html: "Pagos y Provisiones", href: "#pagosProv"},
    {html: "Estados de Solicitudes", href: "#estadoSolic"}
];

export default OptionMenu;
