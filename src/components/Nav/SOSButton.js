import { Component } from "react";

class SOSButton extends Component {
  render() {
    const mainstyle = {
      backgroundColor: "#F23030",
      width: "48px",
      height: "48px",
      border: 0,
      borderRadius: "100%",
      color: "#FFECEC",
      fontWeight: "900",
      fontSize: "10px",
      marginTop: "52px",
    };
    return <button style={mainstyle}>SOS</button>;
  }
}

export default SOSButton;
