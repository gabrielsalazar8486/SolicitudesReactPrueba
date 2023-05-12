import React from "react";
import {Button, Form, InputGroup} from "react-bootstrap";

const Searcher: React.FC = () => (
    <>
        <Form>
            <InputGroup style={{marginTop: "20px"}}>
                <InputGroup.Text style={{backgroundColor: "#f67d15", color: "#fff"}}>
                    <Button type={"button"} style={{backgroundColor: "#f67d15", border: "0"}}>
                        <i className="fas fa-search"></i>
                    </Button>
                </InputGroup.Text>
                <Form.Control type="search" placeholder="Buscar" size={"lg"} />
            </InputGroup>
        </Form>
    </>
);

export default Searcher;
