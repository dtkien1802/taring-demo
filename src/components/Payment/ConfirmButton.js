import { Component } from "react";
import WhiteTickIcon from "../../assets/WhiteTickIcon.svg";
import GrayTickIcon from "../../assets/GrayTickIcon.svg";
import displayPrice from "../../utils/displayPrice";

class ConfirmButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mainstyle = {
      width: "66.44%",
      height: "72px",
      backgroundColor: "#2E7CD9",
      border: 0,
      fontSize: "18px",
      fontWeight: 700,
      color: "#FFFFFF",
      borderRadius: "4px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      display: "flex",
      paddingLeft: "15px",
      paddingRight: "15px",
    };
    const mainstyledisabled = {
      width: "66.44%",
      height: "72px",
      backgroundColor: "#969696",
      border: 0,
      fontSize: "18px",
      fontWeight: 700,
      color: "#565656",
      borderRadius: "4px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      display: "flex",
      paddingLeft: "15px",
      paddingRight: "15px",
    };
    const logostyle = {
      marginRight: "15px",
    };
    return (
      <button
        // disabled={this.props.total == 0 ? true : false}
        style={this.props.total > 0 ? mainstyledisabled : mainstyle}
        onClick={this.props.onClick}
      >
        <div>
          <img
            src={this.props.total > 0 ? GrayTickIcon : WhiteTickIcon}
            style={logostyle}
          />
          {this.props.total > 0 ? (
            <>GHI NỢ {displayPrice(this.props.total)} VND</>
          ) : (
            <>HOÀN THÀNH</>
          )}
        </div>
      </button>
    );
  }
}

export default ConfirmButton;
