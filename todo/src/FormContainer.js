import React from "react";
import FormContent from "./FormContent";

class FormContainer extends React.Component {
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
      <FormContent
        handleChange={this.handleChange}
        {...this.state}
      />
    )
  }
}

export default FormContainer;