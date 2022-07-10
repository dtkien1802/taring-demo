import { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import MessageIcon from "../assets/MessageIcon.svg";
import OrangeCloseIcon from "../assets/OrangeCloseIcon.svg";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";

class Notification extends Component {
  notify() {
    toast(
      <>
        <div style={{ display: "flex" }}>
          <p>Em ơi, hôm nay đóng cửa kiểm hàng lúc 16:00</p>
        </div>
        <img src={OrangeCloseIcon} alt="close-icon" />
      </>,
      {
        className: css({
          background: "#FDF1E5 !important",
        }),
      }
    );
  }
  render() {
    const toaststyle = {
      width: "443px",
      height: "40px",
    };
    const mainstyle = {
      background: "#FDF1E5",
      padding: "10px",
      boxSizing: "border-box",
      fontSize: "14px",
      lineHeight: "20px",
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "4px",
      color: "#FF881B",
    };
    return (
      <div style={mainstyle}>
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer
          style={toaststyle}
          icon={false}
          closeButton={
            <img
              src={MessageIcon}
              style={{ marginRight: "10px" }}
              alt="message-icon"
            />
          }
          autoClose={false}
        />
      </div>
    );
  }
}

export default Notification;
