import { Component } from "react";
import CancelIcon from "../../assets/CancelIcon.svg";

class CancelButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mainstyle = {
      width: "32.66%",
      height: "72px",
      backgroundColor: "#EEEEEE",
      border: 0,
      fontSize: "18px",
      fontWeight: 700,
      color: "#F23030",
      borderRadius: "4px",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
    };
    const logostyle = {
      marginRight: "13px",
    };
    return (
      <button style={mainstyle} onClick={this.props.onClick}>
        <img src={CancelIcon} style={logostyle} />
        HỦY ĐƠN
      </button>
    );
  }
}

export default CancelButton;
