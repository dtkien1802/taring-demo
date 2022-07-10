import { Component } from "react";
import ReactSwitch from "react-switch";
import BlueCard from "../../assets/BlueCard.svg";
import BlueMoney from "../../assets/BlueMoney.svg";
import BlueQR from "../../assets/BlueQR.svg";
import GrayCard from "../../assets/GrayCard.svg";
import GrayMoney from "../../assets/GrayMoney.svg";
import GrayQR from "../../assets/GrayQR.svg";
import AmountButton from "./AmountButton";
import MethodButton from "./MethodButton";

class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBankAccount: false,
      type: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
  }
  handleChange(showBankAccount) {
    this.setState({ showBankAccount });
  }
  handleChangeType(i) {
    this.setState({ type: i });
  }
  render() {
    const mainstyle = {
      width: "442px",
    };
    const headingstyle = {
      fontSize: "16px",
      fontWeight: 700,
      color: "#565656",
      marginBottom: "14px",
    };
    const inputstyle = {
      borderRadius: "6px",
      border: "1px solid #565656",
      fontSize: "18px",
      fontWeight: 700,
      color: "#969696",
      width: "442px",
      height: "48px",
      marginTop: "30px",
      marginBottom: "12px",
      textAlign: "center",
    };
    const notestyle = {
      fontSize: "14px",
      fontWeight: 700,
      color: "#969696",
      marginLeft: "8px",
    };
    const showbankstyle = {
      marginTop: "24px",
      display: "flex",
      alignItems: "center",
    };
    return (
      <div style={mainstyle}>
        <p style={headingstyle}>PHƯƠNG THỨC THANH TOÁN</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <MethodButton
            icon={GrayMoney}
            iconActive={BlueMoney}
            name="Tiền mặt"
            onClick={this.handleChangeType}
            type={1}
            active={this.state.type === 1 ? true : false}
          />
          <MethodButton
            icon={GrayCard}
            iconActive={BlueCard}
            name="ATM/ Visa"
            onClick={this.handleChangeType}
            type={2}
            active={this.state.type === 2 ? true : false}
          />
          <MethodButton
            icon={GrayQR}
            iconActive={BlueQR}
            name="Quét QR"
            onClick={this.handleChangeType}
            type={3}
            active={this.state.type === 3 ? true : false}
          />
        </div>
        <input style={inputstyle} placeholder="Nhập số tiền khách trả"></input>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <AmountButton amount={Math.ceil(this.props.total / 1000) * 1000} />
          <AmountButton amount={Math.ceil(this.props.total / 10000) * 10000} />
          <AmountButton
            amount={Math.ceil(this.props.total / 100000) * 100000}
          />
        </div>
        <div style={showbankstyle}>
          <ReactSwitch
            onChange={this.handleChange}
            checked={this.state.showBankAccount}
            height={14}
            width={20}
          />
          <span style={notestyle}>
            Hiển thị tài khoản ngân hàng cho khách chuyển khoản
          </span>
        </div>
      </div>
    );
  }
}

export default PaymentMethod;
