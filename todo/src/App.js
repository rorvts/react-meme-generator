import React from "react";
import "./styles.css";
import Joke from "./components/Joke/Joke";

const App = () => {
  return (
    <>
      <Joke
        question="Question 1"
        punchLine="Punchline 1"
      />

      <Joke
        punchLine="Punchline 2"
      />

      <Joke
        punchLine="Punchline 3"
      />

      <Joke
        punchLine="Punchline 4"
      />

      <Joke
        question="Question 2"
        punchLine="Punchline 5"
      />
    </>
  );
}

export default App;