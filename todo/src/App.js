import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render(){
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    )
  }
}

export default App;