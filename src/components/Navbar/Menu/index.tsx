import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import OptionMenu, {optionsMenu} from "components/Navbar/Menu/optionsMenu";

const Menu = () => {
    return (
        <Navbar expand="lg" style={{marginLeft: "5rem", marginTop: "1rem"}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" justify fill>
                    {optionsMenu.map(({html, href}, index) => (
                        <OptionMenu key={index} html={html} href={href} />
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menu;
