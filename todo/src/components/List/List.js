import React from "react";
import "./styles.css";

const List = (props) => {
  const completedStyle = {
    color: "green",
    textDecoration: "line-through"
  }

  const uncompletedStyle = {
    color: "red"
  }
  
  return (
    <div className="todo-item">
      <input type="checkbox"
        checked={props.list.completed}
        onChange={() => props.method(props.list.id)}
      />
      <p
        style={props.list.completed ? completedStyle : uncompletedStyle }>
        {props.list.text}
      </p>
    </div>
  );
}

export default List;