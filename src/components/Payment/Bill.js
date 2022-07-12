import { Component } from "react";
import displayPrice from "../../utils/displayPrice";

class Bill extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mainstyle = {
      width: "292px",
    };
    const customernamestyle = {
      fontSize: "16px",
      fontWeight: 700,
      color: "#FF881B",
      marginBottom: "10px",
    };
    const billstyle = {
      fontSize: "14px",
      fontWeight: 700,
      borderSpacing: 0,
      width: "100%",
    };
    const pricestyle = {
      textAlign: "right",
    };
    const totalstyle = {
      fontSize: "14px",
      fontWeight: 700,
      color: "#F23030",
    };
    const totalextrastyle = {
      fontSize: "14px",
      fontWeight: 700,
      color: "#2E7CD9",
    };
    const notestyle = {
      fontSize: "14px",
      fontWeight: 600,
      color: "rgba(17, 15, 36, 0.4)",
      marginTop: "40px",
    };
    const dividerstyle = {
      border: "2px solid #EEEEEE",
      height: "20px",
    };
    return (
      <div style={mainstyle}>
        <p style={customernamestyle}>
          {this.props.customerID === 0 ? "KHÁCH VÃNG LAI" : "KHÁCH "}
        </p>
        <table style={billstyle}>
          <tr>
            <td>Dư nợ</td>
            <td style={pricestyle}>
              {this.props.customerID === 0 ? displayPrice(0) + " VND" : ""}
            </td>
          </tr>
          <tr>
            <td>Hóa đơn</td>
            <td style={pricestyle}>
              {displayPrice(this.props.total) + " VND"}
            </td>
          </tr>
          <tr>
            <td>Khách đã trả (-)</td>
            <td style={pricestyle}>
              {displayPrice(this.props.payedAmmount) + " VND"}
            </td>
          </tr>
          <tr style={dividerstyle}></tr>
          <tr
            style={
              this.props.payedAmmount - this.props.total < 0
                ? totalstyle
                : totalextrastyle
            }
          >
            <td>
              {this.props.payedAmmount - this.props.total < 0
                ? "Khách trả thiếu:"
                : "Khách trả thừa:"}
            </td>
            <td style={pricestyle}>
              {displayPrice(this.props.payedAmmount - this.props.total) +
                " VND"}
            </td>
          </tr>
        </table>
        <p style={notestyle}>
          Quét mã QR trên Taring Shopper App hoặc tìm kiếm theo số điện thoại để
          nhập thông tin khách hàng
        </p>
      </div>
    );
  }
}

export default Bill;
