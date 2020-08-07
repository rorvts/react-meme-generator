import React from "react";
import "./styles.css";
import todoData from "./todoData";
import List from "./components/List/List";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todo: todoData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
    this.setState(prevState => {
      const newArray = prevState.todo.map(td => {
        if(td.id === id){
          td.completed = !td.completed
        }
        return td
      })
      return { todo: newArray }
    });
  }

  render(){
    const todoList = this.state.todo.map(item => <List key={item.id} list={item} method={this.handleChange} />)
    return(
      <div className="todo-list">
        {todoList}
      </div>
    )
  }
}

export default App;