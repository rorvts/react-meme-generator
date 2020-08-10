import React from "react";
import "./styles.css";
import todoData from "./todoData";
import List from "./components/List/List";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState(prevState => {
      const todoItems = prevState.todos.map(item => {
        if (id === item.id) {
          item.completed = !item.completed
        }
        return item
      })
      return {
        todos: todoItems.sort(a => a.completed)
      }
    })
  }

  render() {
    const component = this.state.todos.map(item => <List key={item.id} list={item} method={this.handleClick} />)
    return (
      <div className="todo-list">
        {component}
      </div>
    )
  }
}

export default App;