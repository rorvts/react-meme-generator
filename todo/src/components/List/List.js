import React from "react";
import "./styles.css";

const List = (props) => {
  function handleCheckbox(){
    if(props.list.completed){
      props.list.completed = false;
    } else {
      props.list.completed = true;
    }
  }
  return (
      <div className="todo-item">
        <input type="checkbox" checked={props.list.completed} onChange={handleCheckbox}/>
        <p>{props.list.text}</p>
      </div>
  );
}

export default List;