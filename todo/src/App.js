import React, {useState} from "react";
import "./styles.css";


const App = () => {
  const [logged, setLogged] = useState(false);

  function logIn(){
    setLogged(true);
  }

  function logOut(){
    setLogged(false);
  }

  return (
    <div>
      <h1>Logged {logged ? "in" : "out"}</h1>
      <button onClick={logged ? logOut : logIn}>
        Log {logged ? "out" : "in"}
      </button>
    </div>
  )
}

export default App;