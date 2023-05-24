import React from "react";
import {Button, Form, InputGroup} from "react-bootstrap";

const Searcher: React.FC = () => (
    <>
        <Form>
            <InputGroup style={{marginTop: "20px"}}>
                <InputGroup.Text style={{backgroundColor: "#FF7900", color: "#fff"}}>
                    <Button
                        type={"button"}
                        style={{backgroundColor: "#FF7900", border: "0"}}
                        id="Searcher"
                    >
                        <i className="fas fa-search"></i>
                    </Button>
                </InputGroup.Text>
                <Form.Control type="search" placeholder="Buscar" size={"lg"} />
            </InputGroup>
        </Form>
    </>
);

export default Searcher;
