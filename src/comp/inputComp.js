import React from "react";

class InputWithButton extends React.Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false
    };
  }

  getInitialState() {
    return {
      isMouseInside: false
    };
  }
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  };

  onClick = () => {
    this.setState({ isMouseInside: false });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "grey",
          padding: "5px",
          borderRadius: "10px",
          display: "flex",
          minWidth: "105%"
        }}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <input type="text" placeholder="Enter Phone Number" />
        <button style= {{height: "30px", width: "100px", borderRadius: "8px", backgroundColor:"yellow"}} onClick={this.onClick}>Apply Now</button>
      </div>
    );
  }
}

export default InputWithButton;
