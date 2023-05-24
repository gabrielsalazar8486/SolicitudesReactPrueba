import React from "react";
import {Col, Row} from "react-bootstrap";
import Searcher from "components/Navbar/Searcher";
import UsersFavorites from "components/Zone1/UsersFavorites";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Zone1Img: React.FC = () => (
    <>
        <Row style={{marginTop: "40px", padding: "10px"}}>
            <Col md={"4"} sm={"4"} xs={"4"}>
                <div style={{marginTop: "4rem"}}>
                    <label htmlFor={"Searcher"} style={{color: "#6F7583", fontSize: "24px"}}>
                        Búsqueda
                    </label>
                    <Searcher />
                </div>
            </Col>
            <Col md={"8"} sm={"8"} xs={"8"}>
                <UsersFavorites />
            </Col>
        </Row>
    </>
);

export default Zone1Img;
