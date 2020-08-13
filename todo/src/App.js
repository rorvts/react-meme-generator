import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      someText: "",
      professional: false,
      gender: "",
      technology: ""
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <label>First Name</label><br />
          <input
            type="text"
            value={this.state.firstName}
            placeholder="First Name"
            name="firstName"
            onChange={this.handleInput}
          />

          <br /><br />

          <label>Last Name</label><br />
          <input
            type="text"
            value={this.state.lastName}
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleInput}
          />

          <br /><br />

          <h3>{this.state.firstName} {this.state.lastName}</h3>

          <label>Some Text</label><br />
          <textarea
            name="someText"
            onChange={this.handleInput}
          />

          <br />

          <h3>{this.state.someText}</h3><br />

          <label>Professional </label>
          <input
            type="checkbox"
            checked={this.state.professional}
            name="professional"
            onChange={this.handleInput}
          />

          <h3>{`${this.state.professional}`}</h3>

          <br />

          <label>Gender</label><br />
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleInput} />
          <label> Male</label>

          <br />

          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleInput}
          />
          <label> Female</label>

          <br />

          <h3>{this.state.gender}</h3>

          <br />

          <label>Technology</label><br />
          <select onChange={this.handleInput} name="technology">
            <option value="JavaScript">JavaScript</option>
            <option value="C#">C#</option>
            <option value="Go">Go</option>
          </select>

          <br />

          <h3>{this.state.technology}</h3>
        </form>
      </div>
    )
  }
}

export default App;