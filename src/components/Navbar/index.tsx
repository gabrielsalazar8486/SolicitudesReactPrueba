import React from "react";
import Menu from "components/Navbar/Menu";
import Logo from "components/Logo";
import Searcher from "components/Navbar/Searcher";
import {Col, Row} from "react-bootstrap";

const Navbar: React.FC = () => {
    return (
        <>
            <Row style={{borderBottom: "1px solid", borderColor: "#FF7900", padding: "1rem"}}>
                <Col md={"2"}>
                    <Logo />
                </Col>
                <Col md={"6"}>
                    <Menu />
                </Col>
                <Col md={"2"}>
                    <Searcher size={"sm"} />
                </Col>
                <Col md={"2"}>
                    <Row style={{marginLeft: "3rem"}}>
                        <Col
                            md={"3"}
                            sm={"3"}
                            xs={"3"}
                            style={{
                                marginTop: "1.2rem",
                                fontSize: "25px"
                            }}
                        >
                            <i
                                className="fas fa-message"
                                style={{
                                    alignSelf: "right",
                                    color: "#FF7900"
                                    // WebkitTextStroke: "2px #FF7900"
                                }}
                            ></i>
                        </Col>
                        <Col
                            md={"5"}
                            sm={"5"}
                            xs={"5"}
                            style={{marginTop: "2rem", fontSize: "16px"}}
                        >
                            <a
                                href={"#"}
                                style={{
                                    alignSelf: "right",
                                    color: "#FF7900"
                                    // WebkitTextStroke: "2px #FF7900"
                                }}
                            >
                                Mis pedidos
                            </a>
                        </Col>
                        <Col
                            md={"1"}
                            sm={"1"}
                            xs={"1"}
                            style={{marginTop: "1.2rem", fontSize: "25px"}}
                        >
                            <div>
                                <i
                                    className="fas fa-shopping-cart"
                                    style={{
                                        alignSelf: "right",
                                        color: "#FF7900"
                                        // WebkitTextStroke: "2px #FF7900"
                                    }}
                                ></i>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Navbar;
