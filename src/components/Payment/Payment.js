import { Component } from "react";
import displayPrice from "../../utils/displayPrice";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNum: 0,
      payedAmmount: 0,
    };
  }

  render() {
    const mainstyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    };
    const orderbuttonstyleactive = {
      width: "142px",
      height: "56px",
      border: 0,
      backgroundColor: "#F5F5F5",
      textTransform: "uppercase",
      fontSize: "16px",
      fontWeight: 700,
      color: "#2E7CD9",
    };
    const orderbuttonstyle = {
      width: "142px",
      height: "56px",
      backgroundColor: "#EEEEEE",
      border: 0,
      textTransform: "uppercase",
      fontSize: "16px",
      fontWeight: 700,
      color: "#969696",
    };
    const billstyle = {
      width: "292px",
    };
    return (
      <div style={mainstyle}>
        <div>
          <div>
            {this.props.orders.map((order, index) => {
              return (
                <button
                  style={
                    this.state.orderNum === index
                      ? orderbuttonstyleactive
                      : orderbuttonstyle
                  }
                  onClick={() => this.handleChangeOrder(index)}
                >
                  Đơn hàng {index + 1}
                </button>
              );
            })}
          </div>
          <div style={billstyle}>
            <p>
              {this.props.orders[this.state.orderNum].customerID === 0
                ? "KHÁCH VÃNG LAI"
                : "KHÁCH "}
            </p>
            <table>
              <tr>
                <td>Dư nợ</td>
                <td>
                  {this.props.orders[this.state.orderNum].customerID === 0
                    ? displayPrice(0) + " VND"
                    : ""}
                </td>
              </tr>
              <tr>
                <td>Hóa đơn</td>
                <td>
                  {displayPrice(this.props.orders[this.state.orderNum].total) +
                    " VND"}
                </td>
              </tr>
              <tr>
                <td>Khách đã trả (-)</td>
                <td>{displayPrice(this.state.payedAmmount) + " VND"}</td>
              </tr>
              <tr>
                <td>Khách trả thiếu:</td>
                <td>
                  {displayPrice(
                    this.state.payedAmmount -
                      this.props.orders[this.state.orderNum].total
                  ) + " VND"}
                </td>
              </tr>
            </table>
            <p>
              Quét mã QR trên Taring Shopper App hoặc tìm kiếm theo số điện
              thoại để nhập thông tin khách hàng
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <BackButton onClick={this.props.handleBackCheckout} />
          <ConfirmButton
            total={
              this.props.orders[this.state.orderNum].total -
              this.state.payedAmmount
            }
          />
        </div>
      </div>
    );
  }
}

export default Payment;
