import { Component } from "react";
import displayPrice from "../../utils/displayPrice";
import BackButton from "./BackButton";
import Bill from "./Bill";
import ConfirmButton from "./ConfirmButton";
import PaymentMethod from "./PaymentMethod";

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
            />
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
