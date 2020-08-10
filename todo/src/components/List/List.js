import React from "react";
import "./styles.css";

const List = (props) => {
  return (
    <div className="todo-item">
      <input type="checkbox"
        checked={props.list.completed}
        onChange={() => props.method(props.list.id)}
      />
      <p>{props.list.text}</p>
    </div>
  );
}

export default List;