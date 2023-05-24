import React, {useState} from "react";
import {Card} from "react-bootstrap";
// import {recurringOption} from "../../../Styles";

interface favoritesList {
    id: string;
    name: string;
}

const Question = ({name}: favoritesList) => {
    const QuestionBtn = {border: "0px", borderBottom: "1px solid", borderColor: "#004C97"};
    const HoverQuestionBtn = {border: "0px", borderBottom: "1px solid", borderColor: "#FF7900"};
    const [style, setStyle] = useState(QuestionBtn);
    const handleMouseEnter = () => {
        setStyle(HoverQuestionBtn);
    };

    const handleMouseOut = () => {
        setStyle(QuestionBtn);
    };
    return (
        <Card style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
            <Card.Body
                style={{
                    alignItems: "center",
                    textAlign: "center"
                }}
            >
                {name}
            </Card.Body>
        </Card>
    );
};

export default Question;
