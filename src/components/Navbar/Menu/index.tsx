import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {optionsMenu} from "components/Navbar/Menu/optionsMenu";

const Menu: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg" style={{padding: "10px"}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" justify fill>
                    {optionsMenu.map(({html, style, href}, index) => (
                        <Nav.Link key={index} style={style} href={href}>
                            {html}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menu;
