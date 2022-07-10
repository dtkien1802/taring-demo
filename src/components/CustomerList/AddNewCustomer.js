import { Component } from "react";
import AddCustomer from "../../assets/AddCustomer.svg";

class AddNewCustomer extends Component {
  render() {
    const mainstyle = {
      width: "328px",
      height: "48px",
      backgroundColor: "#E5F1FF",
      color: "#2E7CD9",
      fontWeight: 700,
      fontSize: "16px",
      padding: "12px",
      boxSizing: "border-box",
      margin: "auto",
      borderRadius: "6px",
      display: "flex",
      justifyContent: "space-between",
    };
    return (
      <div style={mainstyle}>
        <p>Thêm khách hàng mới</p>
        <img src={AddCustomer} alt="add-customer" />
      </div>
    );
  }
}

export default AddNewCustomer;
