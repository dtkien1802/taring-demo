import { Component } from "react";
import GrayArrow from "../../assets/GrayArrow.svg";

class Customer extends Component {
  render() {
    const mainstyle = {
      width: "328px",
      height: "80px",
      backgroundColor: "#FFFFFF",
      color: "#1C1C1C",
      fontWeight: 700,
      fontSize: "14px",
      padding: "18px 12px",
      boxSizing: "border-box",
      margin: "auto",
      marginBottom: "8px",
      textTransform: "uppercase",
      borderRadius: "4px",
      display: "flex",
      justifyContent: "space-between",
    };
    const phonestyle = {
      marginTop: "4px",
    };
    const iconstyle = {
      margin: "auto",
    };
    const forwardbuttonstyle = {
      width: "36px",
      height: "36px",
      backgroundColor: "#EEEEEE",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
    };
    return (
      <div style={mainstyle}>
        <div>
          <p>{this.props.customer.name}</p>
          <p style={phonestyle}>{this.props.customer.phone}</p>
        </div>
        <div style={forwardbuttonstyle}>
          <img style={iconstyle} src={GrayArrow} alt="gray-arrow" />
        </div>
      </div>
    );
  }
}

export default Customer;
