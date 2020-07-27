import React from "react";

const Joke = (props) => {

  const styles = {
    fontSize: 34,
    color: "#0E0E0EE",
    display: "block",
    margin: "10px 20px 0px",
    
  }

  return (
      <div style={styles}>
          <p style={{display: props.question ? "block" : "none"}}>{`Question: ${props.question}`}</p> 
          <p style={{color: !props.question && "#888888"}}>{`Punchline: ${props.punchLine}`}</p>
          <hr/>
      </div>
  )
}

export default Joke