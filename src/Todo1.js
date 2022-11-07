import React from "react";

const Todo1 = (props) => {
    return (
        <>
            <div className="todo-style d-flex">
                <div>
                <i className="bi bi-backspace-reverse fs-5 me-2 crossIcon " 
                onClick={ () => {
                    props.onSelect(props.id);
                }} ></i>
                </div>
                <div>
                    <li className="my-2">{props.text}</li>
                </div>
            </div>
        </>
    )
}
export default Todo1;