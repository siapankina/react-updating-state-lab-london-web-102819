// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  handlingClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked + 1
    }));
  };
  render() {
    return (
      <button onClick={this.handlingClick}>{this.state.timesClicked}</button>
    );
  }
}
export default DigitalClicker;
