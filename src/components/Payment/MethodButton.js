import { Component } from "react";

class MethodButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mainstyle = {
      fontSize: "16px",
      fontWeight: 700,
      color: "#969696",
      backgroundColor: "#EEEEEE",
      borderRadius: "6px",
      height: "60px",
      width: "142px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: 0,
    };
    const mainactivestyle = {
      fontSize: "16px",
      fontWeight: 700,
      color: "#2E7CD9",
      backgroundColor: "#E5F1FF",
      borderRadius: "6px",
      border: "2px solid #2E7CD9",
      height: "60px",
      width: "142px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    const logostyle = {
      marginRight: "16px",
    };
    return (
      <button
        style={this.props.active ? mainactivestyle : mainstyle}
        onClick={() => this.props.onClick(this.props.type)}
      >
        <img
          style={logostyle}
          src={this.props.active ? this.props.iconActive : this.props.icon}
        />
        {this.props.name}
      </button>
    );
  }
}

export default MethodButton;
