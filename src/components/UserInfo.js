import { Component } from "react";
import AvatarMock from "../assets/AvatarMock.png";

class UserInfo extends Component {
  render() {
    const revenuestyle = {
      height: "40px",
      width: "143px",
      backgroundColor: "#E5F1FF",
      color: "#2E7CD9",
      fontSize: "14px",
      fontWeight: 700,
      textAlign: "center",
      borderRadius: "3px",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      marginRight: "8px",
    };
    const avastyle = {
      height: "40px",
      marginRight: "8px",
    };
    const namestyle = {
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "18px",
    };
    const timestyle = {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "18px",
    };
    return (
      <div style={{ display: "flex" }}>
        <div style={revenuestyle}>
          <p>12.003.000đ</p>
        </div>
        <img style={avastyle} src={AvatarMock} />
        <div>
          <p style={namestyle}>Phong Vũ</p>
          <p style={timestyle}>1:06:32</p>
        </div>
      </div>
    );
  }
}

export default UserInfo;
