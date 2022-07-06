import { Component } from "react";
import ItemMock from "../../assets/ItemMock.png";
import GreenTag from "../../assets/GreenTag.svg";

class Item extends Component {
  render() {
    const mainstyle = {
      backgroundColor: "#F9F9F9",
      margin: "auto",
      marginTop: "6px",
      borderRadius: "6px",
      width: "304px",
      padding: "6px",
      display: "flex",
      justifyContent: "space-between",
    };
    const namestyle = {
      fontSize: "14px",
      fontWeight: 700,
      color: "#1C1C1C",
    };
    const descstyle = {
      fontSize: "12px",
      fontWeight: 600,
      color: "#585757",
    };
    const pricestyle = {
      fontSize: "14px",
      fontWeight: 600,
      color: "#42AB44",
    };
    return (
      <div style={mainstyle}>
        <div>
          <p style={namestyle}>Kính mắt Z001</p>
          <p style={descstyle}>Rayban - Kho: 120</p>
          <p style={pricestyle}>
            120,000
            <img src={GreenTag} />
          </p>
        </div>
        <img src={ItemMock}></img>
      </div>
    );
  }
}

export default Item;
