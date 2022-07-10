import { Component } from "react";

class SearchBox extends Component {
  render() {
    const mainstyle = {
      width: "328px",
      height: "40px",
      margin: "auto",
      display: "block",
      borderRadius: "4px",
      fontSize: "16px",
      boxSizing: "border-box",
      fontFamily: "Nunito Sans",
      paddingLeft: "12px",
    };
    return (
      <input style={mainstyle} placeholder={this.props.placeholder}></input>
    );
  }
}

export default SearchBox;
