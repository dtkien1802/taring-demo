import { Component } from "react";

class NavButtonSmall extends Component {
  render() {
    const { number, logo } = this.props;
    const mainstyle = {
      backgroundColor: "#212F59",
      width: "40px",
      height: "40px",
      border: 0,
      borderRadius: "100%",
      marginTop: "20px",
    };
    return (
      <button style={mainstyle}>
        <img src={logo} />
      </button>
    );
  }
}

export default NavButtonSmall;
