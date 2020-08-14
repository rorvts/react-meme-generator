import React from "react";

const FormContent = (props) => {
  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={props.firstName}
          name="firstName"
          onChange={props.handleChange}
        /><br />
        <input
          type="text"
          placeholder="Last Name"
          value={props.lastName}
          name="lastName"
          onChange={props.handleChange}
        /><br />
        <input
          placeholder="Age"
          name="age"
          value={props.age === 0 ? "" : props.age}
          onChange={props.handleChange}
        /><br />
        <input
          type="checkbox"
          checked={props.agreement}
          name="agreement"
          onChange={props.handleChange}
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
      <h5>Your name: {props.firstName} {props.lastName}</h5>
      <h5>Your age: {props.age === 0 ? "" : props.age}</h5>
      <h5>Have you agreed with the terms? {props.agreement ? "Yes" : "No"}</h5>
    </main>
  )
}

export default FormContent;