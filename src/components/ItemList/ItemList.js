import { Component } from "react";
import List from "./List";
import SearchBox from "../SearchBox";

class ItemList extends Component {
  render() {
    const mainstyle = {
      backgroundColor: "#142145",
      height: "100%",
      width: "360px",
      boxSizing: "border-box",
      paddingTop: "20px",
    };
    return (
      <div style={mainstyle}>
        <SearchBox placeholder="All/ Rayban" />
        <List />
      </div>
    );
  }
}

export default ItemList;
