import React from "react";
import "./styles.css";

const List = (props) => {
  return (
    <div className="todo-item" style={{display: "flex", justifyContent: "center"}}>
      <input type="checkbox"
        checked={props.list.completed}
        onChange={() => props.method(props.list.id)} />
      <p style={props.list.completed ? {textDecoration: "line-through", color: "green"} : {textDecoration: "none", color: "blue"}}>{props.list.text}</p>
    </div>
  );
}

export default List;