import React from "react";
import "./styles.css";
import List from "./components/List/List";
import data from "./todoData";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: data
    }

    this.finishTask = this.finishTask.bind(this);
  }

  finishTask(id){
    this.setState(prevState => {
      const todoId = prevState.todos.map(item => {
        if(item.id === id){
          item.completed = !item.completed
        }
        return item
      })
      return { todos: todoId }
    });
  }


  render(){
    const todosData = this.state.todos.map(item => <List key={item.id} list={item} method={this.finishTask} />)
    return(
      <div className="todo-list">
        {todosData}
      </div>
    )
  }
}

export default App;