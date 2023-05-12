import React from "react";
import Menu from "components/Navbar/Menu";
// import {horizontalElements} from "../../Styles";
import Logo from "components/Logo";
import Searcher from "components/Navbar/Searcher";
import {Col, Row} from "react-bootstrap";

const Navbar: React.FC = () => {
    return (
        <>
            <Row style={{marginBottom: "0px"}}>
                <Col md={"3"}>
                    <Logo />
                </Col>
                <Col md={"5"} border={"left"}>
                    <Menu />
                </Col>
                <Col md={"2"}>
                    <Searcher />
                </Col>
                <Col md={"2"}>
                    <Row>
                        <Col
                            md={"3"}
                            sm={"3"}
                            xs={"3"}
                            style={{marginTop: "30px", fontSize: "30px"}}
                        >
                            <i className="fas fa-message" style={{alignSelf: "right"}}></i>
                        </Col>
                        <Col
                            md={"5"}
                            sm={"5"}
                            xs={"5"}
                            style={{marginTop: "40px", fontSize: "20px"}}
                        >
                            <a href={"#"}>Mis pedidos</a>
                        </Col>
                        <Col
                            md={"1"}
                            sm={"1"}
                            xs={"1"}
                            style={{marginTop: "30px", fontSize: "30px"}}
                        >
                            <div>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr style={{marginTop: "-18px"}} />
        </>
    );
};

export default Navbar;
