import React, {useState} from "react";
import {DragDropContext, Droppable, Draggable, DropResult} from "@hello-pangea/dnd";

type Field = {
    id: string;
    label: string;
    type: string;
};

type FormFields = Field[];
const DinamicForm: React.FC = () => {
    const [formFields, setFormFields] = useState<FormFields>([
        {id: "field1", label: "Campo 1", type: "text"},
        {id: "field2", label: "Campo 2", type: "email"},
        {id: "field3", label: "Campo 3", type: "password"}
    ]);

    function handleOnDragEnd(result: DropResult) {
        if (!result.destination) {
            return;
        }

        const newFields = Array.from(formFields);
        const [reorderedField] = newFields.splice(result.source.index, 1);
        newFields.splice(result.destination.index, 0, reorderedField);

        setFormFields(newFields);
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="formFields">
                {(provided) => (
                    <>
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {formFields.map((field, index) => (
                                <Draggable key={field.id} draggableId={field.id} index={index}>
                                    {(provided2) => (
                                        <div
                                            {...provided2.draggableProps}
                                            {...provided2.dragHandleProps}
                                            ref={provided2.innerRef}
                                        >
                                            <label>{field.label}</label>
                                            <input id={field.id} type={field.type} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    </>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DinamicForm;
