import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {MenuBtnDark, MenuBtnLing} from "../../../Styles";
interface optionMenu{html: "", style: "", href: ""}
const Menu: React.FC = () => {
    const options: = [
        {html: "Solicitudes Admistrativas", style: "", href: ""},
        {html: "Proveedores y contratos", style: "", href: ""},
        {html: "Pagos y Proviciones", style: "", href: ""},
        {html: "Estados Solicitudes", style: "", href: ""}
    ];
    return (
        <div style={{padding: "10px"}}>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" justify fill>
                        <Nav.Link style={MenuBtnLing} href="#solicitudesAdm">
                            Solicitudes Admistrativas
                        </Nav.Link>
                        <Nav.Link style={MenuBtnDark} href="#proveedoresContr">
                            Proveedores y contratos
                        </Nav.Link>
                        <Nav.Link style={MenuBtnLing} href="#pagosProv">
                            Pagos y Proviciones
                        </Nav.Link>
                        <Nav.Link style={MenuBtnDark} href="#estadoSolic">
                            Estados Solicitudes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;
