import { Component } from "react";
import GrayTagIcon from "../../assets/GrayTagIcon.svg";

class DiscountButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mainstyle = {
      border: 0,
      width: "100px",
      height: "100px",
      borderRadius: "12px",
      color: "#969696",
      fontSize: "12px",
    };
    return (
      <button onClick={this.props.onClick} style={mainstyle}>
        <img src={GrayTagIcon} />
        <p>Chiết khấu</p>
      </button>
    );
  }
}

export default DiscountButton;
