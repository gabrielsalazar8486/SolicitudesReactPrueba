import React from "react";
import Question from "components/Zone2/RecurringQuestions/Question";
// import {recurringOption} from "../../../Styles";

interface favoritesList {
    id: string;
    name: string;
}

const favoritesList: favoritesList[] = [
    {id: "1", name: "Requisiones de Sucursales"},
    {id: "2", name: "Compra de Productos"},
    {id: "3", name: "Creacion de Proveedor"},
    {id: "4", name: "Creacion de Contrato"}
];

const RecurringQuestions: React.FC = () => {
    return (
        <>
            {favoritesList.map((favorite) => (
                <Question key={favorite.id} {...favorite} />
            ))}
        </>
    );
};

export default RecurringQuestions;
