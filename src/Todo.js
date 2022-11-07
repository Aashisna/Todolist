import react, { useState } from "react";
import './Todo.css';
import Todo1 from "./Todo1";

function Todo(){
    const[InputList, setInputList] = useState("");
    const[Items, setItems] = useState([]);

    const itemEvent =(event) => {
        setInputList(event.target.value);
    };

    const listofItems = () => {
        setItems((oldItems) =>{
           return [...oldItems, InputList];
        });
        setInputList("");
    };

    const deleteItems=(id) => {
        console.log("deleted"); 
        setItems((oldItems)=>{
           return oldItems.filter((arrElem,index) =>{
           return index !== id;
           });
        });
     };

    return(
        <>
        <div className="body py-5">
        <div className="mydiv py-4">
            <h2 className="text-center text-light py-2 heading">My To do List</h2>
           
            <input type ="text" placeholder="Add an item......" className="ms-3 my-3 pt-2 px-2" onChange={itemEvent} value={InputList}/>
            <i className="bi bi-plus mt-5 ms-1 arrow fs-2" onClick={listofItems}></i>
            {/* <button  onClick={listofItems}>+</button> */}
            <ol>
                {/* <li>{InputList}</li> */}

                {Items.map((itemval,index) => {
                  return(<Todo1 text={itemval}
                   key={index}
                   id={index}
                   onSelect={deleteItems}
                  />);
                })}
            </ol>

        </div>
        </div>
        </>
    )
}
export default Todo;