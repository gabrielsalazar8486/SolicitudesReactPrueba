import React from "react";
import {Form, InputGroup} from "react-bootstrap";

interface Size {
    size: "sm" | "lg";
}

const Searcher = ({size = "sm"}: Size) => (
    <>
        <Form>
            <InputGroup style={{marginTop: "1.5rem"}}>
                <InputGroup.Text
                    style={{backgroundColor: "#FF7900", color: "#FFF", borderRadius: "3px"}}
                >
                    <i className="fas fa-search"></i>
                </InputGroup.Text>
                <Form.Control
                    type="search"
                    placeholder="Buscar"
                    size={size}
                    style={{borderRadius: "3px"}}
                />
            </InputGroup>
        </Form>
    </>
);

export default Searcher;
