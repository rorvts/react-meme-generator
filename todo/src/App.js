import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      values: {}
    }
  }

  componentDidMount() {
      this.setState({ loading: true });
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => {
          this.setState({ loading: false, values: data })
        })
  }

  render() {
    return (
      <div>
        {this.state.loading ? <p>Loading...</p> : <p>{this.state.values.title}</p>}
      </div>
    )
  }
}

export default App;