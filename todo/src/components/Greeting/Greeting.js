import React from "react";

class Greeting extends React.Component {
  render() {
    function setTime() {
      const date = new Date();
      const hours = date.getHours();
      let timeOfDay;
      if (hours > 0 && hours < 12) {
        timeOfDay = "morning";
      } else if (hours < 18) {
        timeOfDay = "afternoon";
      } else {
        timeOfDay = "night";
      }
      return timeOfDay;
    }
    return (
      <h2>
        {`Good ${setTime()} to you!`}
      </h2>
    )
  }
}

export default Greeting;