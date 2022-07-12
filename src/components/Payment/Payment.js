import { Component } from "react";
import BackButton from "./BackButton";
import Bill from "./Bill";
import ConfirmButton from "./ConfirmButton";
import PaymentMethod from "./PaymentMethod";
import ReactLoading from "react-loading";
import BlueTickIcon from "../../assets/BlueTickIcon.svg";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNum: 0,
      payedAmmount: 0,
      step: 1,
    };
    this.handleChangePayedAmount = this.handleChangePayedAmount.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }
  handleChangePayedAmount(amount) {
    this.setState({ payedAmmount: amount });
  }
  handleCheckout() {
    this.setState({ step: 2 });
    setInterval(() => {
      this.setState({ step: 3 });
    }, 3000);
  }
  handleChangeOrder(i) {
    this.setState({ orderNum: i });
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
    const loadingstyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: 1,
      fontWeight: 700,
      fontSize: "24px",
    };
    const bluetickstyle = {
      width: "64px",
      height: "64px",
      borderRadius: "100%",
      backgroundColor: "#E5F1FF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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

          {this.state.step == 1 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "38px",
              }}
            >
              <Bill
                customerID={this.props.orders[this.state.orderNum].customerID}
                total={this.props.orders[this.state.orderNum].total}
                payedAmmount={this.state.payedAmmount}
              />
              <PaymentMethod
                total={this.props.orders[this.state.orderNum].total}
                handleChange={this.handleChangePayedAmount}
                value={
                  this.state.payedAmmount === 0 ? "" : this.state.payedAmmount
                }
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        {this.state.step == 1 ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <BackButton onClick={this.props.handleBackCheckout} />
            <ConfirmButton
              total={
                this.props.orders[this.state.orderNum].total -
                this.state.payedAmmount
              }
              onClick={this.handleCheckout}
            />
          </div>
        ) : this.state.step == 2 ? (
          <div style={loadingstyle}>
            <p style={{ marginBottom: "42px" }}>Hóa đơn đang được tạo</p>
            <ReactLoading type="spinningBubbles" color={"#2E7CD9"} />
          </div>
        ) : (
          <div style={loadingstyle}>
            <p style={{ marginBottom: "42px" }}>Thanh toán thành công</p>
            <div style={bluetickstyle}>
              <img src={BlueTickIcon}></img>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Payment;
