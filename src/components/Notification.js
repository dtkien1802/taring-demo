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
          <img
            src={MessageIcon}
            style={{ marginRight: "10px" }}
            alt="message-icon"
          />
          <p>Em ơi, hôm nay đóng cửa kiểm hàng lúc 16:00</p>
        </div>
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
      boxSizing: "border-box",
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
      <div>
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer
          // style={{ width: "2000px" }}
          position="top-center"
          style={{
            width: "451px",
            height: "40px !important",
            boxSizing: "border-box",
          }}
          icon={false}
          closeButton={<img src={OrangeCloseIcon} alt="close-icon" />}
          autoClose={false}
        />
      </div>
    );
  }
}

export default Notification;
