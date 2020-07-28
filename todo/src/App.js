import React from "react";
import "./styles.css";
import Joke from "./components/Joke/Joke";
import jokeApi from "./api";

const App = () => {
  const jokeComponents = jokeApi.map(joke => <Joke question={joke.question} punchLine={joke.punchLine}/>)
  return (
    <>
      {jokeComponents}
    </>
  );
}

export default App;