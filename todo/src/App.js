import React from "react";
import "./styles.css";
import List from "./components/List/List";
import api from "./todoData";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: api
    }
  }
  
  render(){
    const data = this.state.list.map(item => <List key={item.id} list={item}/> )
    return (
      <div className="todo-list">
        {data}
      </div>
    )
  }
}


export default App;