import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      agreement: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, checked, type } = event.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleChange}
          /><br />
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleChange}
          /><br />
          <input
            placeholder="Age"
            name="age"
            value={this.state.age === 0 ? "" : this.state.age}
            onChange={this.handleChange}
          /><br />
          <input
            type="checkbox"
            checked={this.state.agreement}
            name="agreement"
            onChange={this.handleChange}
          />
          <p
            style={{
              fontSize: 8,
              display: "inline",
              marginLeft: 5,
              verticalAlign: "middle"
            }}>I read and agree with the terms.</p><br /><br />

          <button>Submit</button>

        </form>
        <br /><br />
        <hr />
        <h4>Entered Information:</h4><br />
        <h5>Your name: {this.state.firstName} {this.state.lastName}</h5>
        <h5>Your age: {this.state.age === 0 ? "" : this.state.age}</h5>
        <h5>Have you agreed with the terms? {this.state.agreement ? "Yes" : "No"}</h5>
      </div>
    )
  }
}

export default App;