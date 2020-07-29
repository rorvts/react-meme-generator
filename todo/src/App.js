import React from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";

class App extends React.Component {
  render() {
    const username = "Rodrigo"
    return (
      <>
        <Header username={username} />
        <Greeting />
      </>
    )
  }
}

export default App;