import { Component } from "react";
import CustomerList from "../../components/CustomerList/CustomerList";
import ItemList from "../../components/ItemList/ItemList";
import Notification from "../../components/Notification";
import Order from "../../components/Order/Order";
import Payment from "../../components/Payment/Payment";
import UserInfo from "../../components/UserInfo";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      orders: [
        {
          customerID: 0,
          item: [
            {
              name: "Kính mắt Z001",
              unit: "Hộp",
              quantity: 1,
              price: 520000,
              discount: 10,
              discountName: "SẢN PHẨM MỚI   -   Giảm giá 10% kính mắt Z001",
            },
            {
              name: "Giày rayban",
              unit: "Đôi",
              quantity: 1,
              price: 890000,
              discount: 0,
            },
          ],
          total: 1499000,
        },
        {
          customerID: 0,
          total: 0,
        },
      ],
    };
    this.handleChangeOrder = this.handleChangeOrder.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleBackCheckout = this.handleBackCheckout.bind(this);
  }

  handleCheckout() {
    this.setState({ step: 2 });
  }

  handleBackCheckout() {
    this.setState({ step: 1 });
  }

  handleChangeOrder(newOrders) {
    this.setState({ orders: newOrders });
  }

  render() {
    const mainstyle = {
      flexGrow: 1,
      padding: "16px 20px",
      display: "flex",
      flexDirection: "column",
    };
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          backgroundColor: "#F5F5F5",
        }}
      >
        {this.state.step === 1 ? <ItemList /> : <CustomerList />}
        <div style={mainstyle}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Notification />
            <UserInfo />
          </div>
          <div style={{ flexGrow: 1, marginTop: "20px" }}>
            {this.state.step === 1 ? (
              <Order
                orders={this.state.orders}
                handleChangeOrder={this.handleChangeOrder}
                handleCheckout={this.handleCheckout}
              />
            ) : (
              <Payment
                orders={this.state.orders}
                handleBackCheckout={this.handleBackCheckout}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Stock;
