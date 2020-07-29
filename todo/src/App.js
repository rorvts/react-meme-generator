import React from "react";
import "./styles.css";
import ToDo from "./components/List/List";
import api from "./todoData";

const App = () => {
  const toDos = api.map(item => <ToDo key={item.id} list={item}/>)
  return (
    <div className="todo-list">
      {toDos}
    </div>
  );
}

export default App;