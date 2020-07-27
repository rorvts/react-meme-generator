import React from "react";
import "./styles.css";
import List from "./components/List/List";

const App = () => {
  return (
    <div className="todo-list">
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default App;