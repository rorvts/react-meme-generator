import React from "react";
import "./styles.css";

const List = (props) => {
  return (
    <div className="todo-item">
      <input type="checkbox"
        checked={props.list.completed}
        onChange={() => props.method(props.list.id)} />
      <p style={props.list.completed ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{props.list.text}</p>
    </div>
  );
}

export default List;