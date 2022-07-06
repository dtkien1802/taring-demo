import { Component } from "react";
import ReactModal from "react-modal";

class ModelConfirmButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mainstyle = {
      width: "160px",
      height: "48px",
      backgroundColor: "#F23030",
      color: "#FFFFFF",
      fontWeight: 700,
      fontSize: "16px",
      borderRadius: "6px",
      border: 0,
    };
    return (
      <button style={mainstyle} onClick={this.props.onClick}>
        XÁC NHẬN
      </button>
    );
  }
}

export default ModelConfirmButton;
