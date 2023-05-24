import React from "react";
import {Image, Col, Row, Card} from "react-bootstrap";
import {attrLogo, icons, iconsHome, styleCard} from "../../../Styles";

interface favoritesList {
    id: string;
    name: string;
}

const favoritesList: favoritesList[] = [
    {id: "1", name: "Solicitudes de Productos y Servicios"},
    {id: "2", name: "Contratos y Proveedores"},
    {id: "3", name: "Pagos y Provisiones"}
];

const UsersFavorites: React.FC = () => {
    return (
        <>
            <Row>
                {favoritesList.map((favorite) => (
                    <Col key={favorite.id} md={"4"} sm={"4"} xs={"4"}>
                        <Card style={styleCard}>
                            <Card.Body
                                style={{
                                    alignItems: "center",
                                    fontSize: "2rem",
                                    textAlign: "center",
                                    zIndex: 2
                                }}
                            >
                                <p style={{marginTop: "30%", color: "#fff"}}>{favorite.name}</p>
                            </Card.Body>
                            <Image {...attrLogo} />
                            <Image {...attrLogo} />
                            <i
                                className="fas fa-home"
                                style={{
                                    ...icons,
                                    ...iconsHome,
                                    zIndex: 1
                                }}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default UsersFavorites;
