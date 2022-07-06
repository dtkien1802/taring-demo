import { Component } from "react";
import MessageIcon from "../assets/MessageIcon.svg";
import OrangeCloseIcon from "../assets/OrangeCloseIcon.svg";

class Notification extends Component {
  render() {
    const mainstyle = {
      backgroundColor: "#FDF1E5",
      width: "443px",
      height: "40px",
      padding: "10px",
      boxSizing: "border-box",
      fontSize: "14px",
      lineHeight: "20px",
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "4px",
      color: "#FF881B",
    };
    const logostyle = {
      marginRight: "10px",
    };
    return (
      <div style={mainstyle}>
        <div style={{ display: "flex" }}>
          <img src={MessageIcon} style={logostyle} />
          <p>Em ơi, hôm nay đóng cửa kiểm hàng lúc 16:00</p>
        </div>
        <img src={OrangeCloseIcon} />
      </div>
    );
  }
}

export default Notification;
