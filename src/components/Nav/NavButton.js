import { Component } from "react";
import { NavLink } from "react-router-dom";

class NavButton extends Component {
  render() {
    const { name, logo, linkTo } = this.props;
    const mainstyle = {
      backgroundColor: "transparent",
      color: "#EEEEEE",
      border: 0,
      cursor: "pointer",
      marginBottom: "32px",
      textDecoration: "none",
    };
    const textstyle = {
      fontWeight: "700",
      fontSize: "12px",
      lineHeight: "16px",
      marginTop: "8px",
      fontFamily: "Nunito Sans",
    };
    const logostyle = {
      width: "24px",
    };
    return (
      <div style={mainstyle}>
        <NavLink
          to={linkTo}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2E7CD9" : "transparent",
            width: "48px",
            height: "48px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
          })}
        >
          <img style={logostyle} src={logo} alt={name} />
        </NavLink>
        <p style={textstyle}>{name}</p>
      </div>
    );
  }
}

export default NavButton;
