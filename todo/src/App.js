import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      logged: false
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn() {
    this.setState({ logged: true });
  }

  logOut() {
    this.setState({ logged: false });
  }

  render() {
    return (
      <div>
        <h1>Logged {this.state.logged ? "in" : "out"}</h1>
        <button onClick={this.state.logged ? this.logOut : this.logIn}>Log {this.state.logged ? "out" : "in"}</button>
      </div>
    )
  }
}

export default App;