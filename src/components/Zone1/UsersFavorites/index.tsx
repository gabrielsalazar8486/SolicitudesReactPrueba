import React from "react";
import {Col, Row, Card} from "react-bootstrap";
import {styleCard} from "../../../Styles";
import BgStar from "components/BgStart";

interface favoritesList {
    id: string;
    name: string;
}

const favoritesList: favoritesList[] = [
    {id: "1", name: "Solicitudes de Compra"},
    {id: "2", name: "Creación de Proveedor"},
    {id: "3", name: "Provisión Contable"},
    {id: "4", name: "Configuraciones"}
];

const UsersFavorites: React.FC = () => {
    return (
        <>
            <Row>
                {favoritesList.map((favorite) => (
                    <Col key={favorite.id} md={"3"} sm={"3"} xs={"3"}>
                        <Card style={styleCard}>
                            <Card.Body
                                style={{
                                    alignItems: "center",
                                    fontSize: "1.5rem",
                                    textAlign: "center"
                                }}
                            >
                                <BgStar />
                                <p style={{marginTop: "1.2rem"}}>{favorite.name}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row style={{marginTop: "4rem"}}>
                {favoritesList.map((favorite) => (
                    <Col key={favorite.id} md={"3"} sm={"3"} xs={"3"}>
                        <Card style={styleCard}>
                            <Card.Body
                                style={{
                                    alignItems: "center",
                                    fontSize: "1.5rem",
                                    textAlign: "center"
                                }}
                            >
                                <BgStar />
                                <p style={{marginTop: "1.2rem"}}>{favorite.name}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default UsersFavorites;
