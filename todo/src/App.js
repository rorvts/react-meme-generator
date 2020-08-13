import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>First Name</label><br />
          <input type="text" value={this.state.firstName} placeholder="First Name" name="firstName" onChange={this.handleInput} /><br /><br />
          <label>Last Name</label><br />
          <input type="text" value={this.state.lastName} placeholder="Last Name" name="lastName" onChange={this.handleInput} /><br /><br />
          <h1>{this.state.firstName} {this.state.lastName}</h1>
        </form>
      </div>
    )
  }
}

export default App;