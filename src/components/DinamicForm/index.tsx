import React from "react";
import {DragDropContext, Draggable, Droppable, DropResult} from "@hello-pangea/dnd";
import {Col, Row} from "react-bootstrap";

type Field = {
    id: string;
    label: string;
    type: string;
};

type FormFields = Field[];

const DinamicForm: React.FC = () => {
    // const [formFields, setFormFields] = useState<FormFields>([
    //     {id: "field1", label: "Campo 1", type: "text"},
    //     {id: "field2", label: "Campo 2", type: "email"},
    //     {id: "field3", label: "Campo 3", type: "password"}
    // ]);
    const formFields: FormFields = [
        {id: "field1", label: "Campo 1", type: "text"},
        {id: "field2", label: "Campo 2", type: "email"},
        {id: "field3", label: "Campo 3", type: "password"}
    ];

    function handleOnDragEnd(result: DropResult) {
        if (!result.destination) {
            return;
        }

        // const newFields = Array.from(formFields);
        // const [reorderedField] = newFields.splice(result.source.index, 1);
        // newFields.splice(result.destination.index, 0, reorderedField);
        //
        // setFormFields(newFields);
    }

    const onDragStart = (event) => {
        // set the data transfer
        event.dataTransfer.setData("text/plain", event.target.id);
    };

    const onDragOver = (event) => {
        // prevent default to allow drop
        event.preventDefault();
    };

    const onDrop = (event) => {
        const id = event.dataTransfer.getData("text");
        const element = document.getElementById(id).cloneNode(true);
        const dropZone = event.target;

        dropZone.appendChild(element);
    };

    const onDropB = (event) => {
        const id = event.dataTransfer.getData("text");
        const element = document.getElementById(id).cloneNode(true);
        const dropZone = event.target;

        dropZone.appendChild(element);
    };

    return (
        <>
            <DragDropContext onDragEnd={onDrop}>
                <Row>
                    <Col md={4}>
                        <div id="drag1" draggable="true" onDragStart={onDragStart}>
                            Element to be dragged
                        </div>{" "}
                        <div id="drag2" draggable="true" onDragStart={onDragStart}>
                            Element to be dragged 2
                        </div>{" "}
                        <div id="drag3" draggable="true" onDragStart={onDragStart}>
                            Element to be dragged 3
                        </div>
                    </Col>
                    <Col md={4}>
                        <div
                            id="drop"
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            style={{border: "1px solid", width: "200px", height: "200px"}}
                        ></div>
                    </Col>
                    <Col md={4}>
                        <div
                            id="drop"
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            style={{border: "1px solid", width: "200px", height: "200px"}}
                        ></div>
                    </Col>
                </Row>
            </DragDropContext>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="formFields">
                    {(provided) => (
                        <>
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{border: "1px solid", width: "200px", height: "200px"}}
                            >
                                {formFields.map((field, index) => (
                                    <Draggable key={field.id} draggableId={field.id} index={index}>
                                        {(provided2) => (
                                            <div
                                                {...provided2.draggableProps}
                                                {...provided2.dragHandleProps}
                                                ref={provided2.innerRef}
                                                onDragStart={onDragStart}
                                                id={field.id}
                                            >
                                                <label>{field.label}</label>
                                                <input type={field.type} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        </>
                    )}
                </Droppable>
                <Droppable droppableId="formFields2">
                    {(provided) => (
                        <>
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                onDragOver={onDragOver}
                                onDrop={onDropB}
                                style={{border: "1px solid", width: "200px", height: "200px"}}
                            >
                                {provided.placeholder}
                            </div>
                        </>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    );
};

export default DinamicForm;
