import { Component } from "react";
import ReactModal from "react-modal";

class ModelBackButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mainstyle = {
      width: "160px",
      height: "48px",
      backgroundColor: "#2E7CD9",
      color: "#FFFFFF",
      fontWeight: 700,
      fontSize: "16px",
      borderRadius: "6px",
      border: 0,
    };
    return (
      <button style={mainstyle} onClick={this.props.onClick}>
        Quay lại
      </button>
    );
  }
}

export default ModelBackButton;
