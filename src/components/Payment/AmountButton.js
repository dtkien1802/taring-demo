import { Component } from "react";
import displayPrice from "../../utils/displayPrice";

class AmountButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mainstyle = {
      borderRadius: "6px",
      color: "#585757",
      fontSize: "16px",
      fontWeight: 700,
      backgroundColor: "#EEEEEE",
      width: "142px",
      height: "48px",
      border: 0,
    };
    return <button style={mainstyle}>{displayPrice(this.props.amount)}</button>;
  }
}

export default AmountButton;
