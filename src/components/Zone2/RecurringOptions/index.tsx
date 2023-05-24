import React from "react";
import {Col, Row, Card} from "react-bootstrap";
import {recurringOption} from "../../../Styles";

interface favoritesList {
    id: string;
    name: string;
    icon: string;
}

const favoritesList: favoritesList[] = [
    {id: "1", name: "Requisiones de Sucursales", icon: "fas fa-home"},
    {id: "2", name: "Compra de Productos", icon: "fas fa-shopping-cart"},
    {id: "3", name: "Creacion de Proveedor", icon: "fas fa-user"},
    {id: "4", name: "Creacion de Contrato", icon: "fas fa-file"}
];

const RecurringOptions: React.FC = () => {
    return (
        <>
            <Row>
                {favoritesList.map((favorite) => (
                    <Col key={favorite.id} md={"3"} sm={"3"} xs={"3"}>
                        <Card style={recurringOption}>
                            <Card.Body
                                style={{
                                    alignItems: "center",
                                    fontSize: "1rem",
                                    textAlign: "center"
                                }}
                            >
                                <p style={{marginTop: "1.2rem"}}>{favorite.name}</p>
                                <i
                                    className={favorite.icon}
                                    style={{
                                        fontSize: "2rem",
                                        color: "#FF7900"
                                    }}
                                ></i>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default RecurringOptions;
