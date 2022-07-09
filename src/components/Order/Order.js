import { Component } from "react";
import PlusCircleIcon from "../../assets/PlusCircleIcon.svg";
import MinusCircleIcon from "../../assets/MinusCircleIcon.svg";
import Barcode from "../../assets/Barcode.svg";
import PlusIcon from "../../assets/PlusIcon.svg";
import DiscountButton from "./DiscountButton";
import CancelButton from "./CancelButton";
import CheckoutButton from "./CheckoutButton";
import displayPrice from "../../utils/displayPrice";
import ReactModal from "react-modal";
import ConfirmModal from "./ConfirmModal";
import DiscountModal from "./DiscountModal";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirm: false,
      showDiscount: false,
      orderNum: 0,
      discount: 0,
      discountType: 0,
      mockorder: [
        {
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
        },
      ],
    };
    this.handleOpenConfirm = this.handleOpenConfirm.bind(this);
    this.handleOpenDiscount = this.handleOpenDiscount.bind(this);
    this.handleCloseConfirm = this.handleCloseConfirm.bind(this);
    this.handleCloseDiscount = this.handleCloseDiscount.bind(this);
    this.handleConfirmDiscount = this.handleConfirmDiscount.bind(this);
  }
  handleOpenConfirm() {
    this.setState({ showConfirm: true });
  }
  handleOpenDiscount() {
    this.setState({ showDiscount: true });
  }
  handleCloseConfirm() {
    this.setState({ showConfirm: false });
  }
  handleCloseDiscount() {
    this.setState({ showDiscount: false });
  }
  handleConfirmDiscount(type, price) {
    this.setState({ showDiscount: false, discountType: type, discount: price });
  }
  getTotal() {
    let total = 0;
    if (this.state.mockorder[this.state.orderNum].item) {
      for (let item of this.state.mockorder[this.state.orderNum].item) {
        total =
          total + (item.price / 100) * (100 - item.discount) * item.quantity;
      }
    }
    return total;
  }
  getTotalBeforeDiscount() {
    let total = 0;
    if (this.state.mockorder[this.state.orderNum].item) {
      for (let item of this.state.mockorder[this.state.orderNum].item) {
        total = total + item.price * item.quantity;
      }
    }
    return total;
  }
  handleChangeOrder(i) {
    this.setState({ orderNum: i });
  }
  handleAddOrder() {
    const mockorder = this.state.mockorder.slice();
    this.setState({
      mockorder: mockorder.concat([{}]),
    });
  }
  handleChangeQuantity(itemIndex, i) {
    const mockorder = this.state.mockorder.slice();
    if (mockorder[this.state.orderNum].item[itemIndex].quantity + i == 0) {
      mockorder[this.state.orderNum].item.splice(itemIndex, 1);
    } else {
      mockorder[this.state.orderNum].item[itemIndex].quantity += i;
    }
    this.setState({
      mockorder: mockorder,
    });
  }
  render() {
    const mainstyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    };
    const tablestyle = {
      width: "100%",
      backgroundColor: "#FFFFFF",
      borderCollapse: "collapse",
      border: "1px solid #EEEEEE",
      borderRadius: "8px",
    };
    const navstyle = {
      backgroundColor: "#F5F5F5",
      height: "56px",
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
    const addorderbuttonstyle = {
      width: "150px",
      height: "56px",
      backgroundColor: "#EEEEEE",
      border: 0,
      textTransform: "uppercase",
      fontSize: "16px",
      fontWeight: 700,
      color: "#969696",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
    };
    const addorderlogostyle = {
      marginLeft: "7px",
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
    const itemstyle = {
      fontSize: "16px",
      fontWeight: 600,
      height: "55px",
      borderBottom: "1px solid #EEEEEE",
    };
    const itemquantitystyle = {
      color: "#969696",
      width: "92px",
      display: "flex",
      justifyContent: "space-between",
      margin: "auto",
    };
    const taxstyle = {
      fontSize: "16px",
      fontWeight: 600,
      height: "55px",
      borderBottom: "1px solid #EEEEEE",
      color: "#969696",
    };
    const taxtotal = {
      fontSize: "16px",
      fontWeight: 600,
      textAlign: "right",
      paddingRight: "23px",
      color: "#1C1C1C",
    };
    const itemstylewdiscount = {
      fontSize: "16px",
      fontWeight: 600,
      height: "55px",
    };
    const unitstyle = {
      border: 0,
      backgroundColor: "transparent",
      fontSize: "16px",
      color: "#969696",
      width: "92px",
      textAlign: "center",
    };
    const pricestyle = {
      color: "#969696",
      textAlign: "right",
    };
    const totalstyle = {
      textAlign: "right",
      paddingRight: "23px",
    };
    const discountstyle = {
      color: "#2E7CD9",
      fontSize: "14px",
      fontWeight: 600,
      height: "33px",
      borderBottom: "1px solid #EEEEEE",
    };
    const discountpricestyle = {
      textAlign: "right",
    };
    const totaldiscountstyle = {
      textAlign: "right",
      paddingRight: "23px",
    };
    const headerstyle = {
      color: "#969696",
    };
    const itemnamestyle = {
      paddingLeft: "23px",
    };
    const emptyorderstyle = {
      height: "370px",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      width: "100%",
    };
    const emptyordermessagestyle = {
      marginTop: "18px",
      color: "#969696",
      fontWeight: 600,
      fontSize: "16px",
    };
    const customdiscountstyle = {
      color: "#2E7CD9",
      fontSize: "16px",
      fontWeight: 600,
      height: "55px",
    };
    const customdiscounttotalstyle = {
      textAlign: "right",
      paddingRight: "23px",
    };
    return (
      <div style={mainstyle}>
        <table style={tablestyle}>
          <tr style={navstyle}>
            <th style={{ textAlign: "left", display: "flex" }}>
              {this.state.mockorder.map((order, index) => {
                return (
                  <button
                    style={
                      this.state.orderNum == index
                        ? orderbuttonstyleactive
                        : orderbuttonstyle
                    }
                    onClick={() => this.handleChangeOrder(index)}
                  >
                    Đơn hàng {index + 1}
                  </button>
                );
              })}
              <button
                style={addorderbuttonstyle}
                onClick={() => this.handleAddOrder()}
              >
                Đơn hàng {this.state.mockorder.length + 1}
                <img style={addorderlogostyle} src={PlusIcon} />
              </button>
            </th>
            <th style={headerstyle}>Đơn vị tính</th>
            <th style={headerstyle}>Số lượng</th>
            <th style={headerstyle}>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
          {this.state.mockorder[this.state.orderNum].item &&
          this.state.mockorder[this.state.orderNum].item.length != 0 ? (
            <>
              {this.state.mockorder[this.state.orderNum].item.map(
                (item, index) => {
                  return (
                    <>
                      <tr
                        style={
                          item.discount != 0 ? itemstylewdiscount : itemstyle
                        }
                      >
                        <td style={itemnamestyle}>{item.name}</td>
                        <td>
                          <select style={unitstyle}>
                            <option value={item.unit}>{item.unit}</option>
                          </select>
                        </td>
                        <td>
                          <div style={itemquantitystyle}>
                            <img
                              onClick={() =>
                                this.handleChangeQuantity(index, -1)
                              }
                              src={MinusCircleIcon}
                            />
                            {item.quantity}
                            <img
                              onClick={() =>
                                this.handleChangeQuantity(index, 1)
                              }
                              src={PlusCircleIcon}
                            />
                          </div>
                        </td>
                        <td style={pricestyle}>{displayPrice(item.price)}</td>
                        <td style={totalstyle}>
                          {displayPrice(item.price * item.quantity)}
                        </td>
                      </tr>
                      {item.discount == 0 ? (
                        <></>
                      ) : (
                        <tr style={discountstyle}>
                          <td style={itemnamestyle}>{item.discountName}</td>
                          <td></td>
                          <td></td>
                          <td style={discountpricestyle}>-{item.discount}%</td>
                          <td style={totaldiscountstyle}>
                            -
                            {displayPrice(
                              (item.price / 100) * item.discount * item.quantity
                            )}
                          </td>
                        </tr>
                      )}
                    </>
                  );
                }
              )}
              <tr style={taxstyle}>
                <td colSpan={4} style={itemnamestyle}>
                  Thuế VAT
                </td>
                <td style={taxtotal}>
                  {displayPrice(this.getTotalBeforeDiscount() / 10)}
                </td>
              </tr>
              {this.state.discount != 0 ? (
                <>
                  {this.state.discountType == 1 ? (
                    <tr style={customdiscountstyle}>
                      <td colSpan={4} style={itemnamestyle}>
                        CHIẾT KHẤU HÓA ĐƠN - {this.state.discount}%
                      </td>
                      <td style={customdiscounttotalstyle}>
                        -
                        {displayPrice(
                          (this.getTotalBeforeDiscount() / 100) *
                            this.state.discount
                        )}
                      </td>
                    </tr>
                  ) : (
                    <tr style={customdiscountstyle}>
                      <td colSpan={4} style={itemnamestyle}>
                        CHIẾT KHẤU HÓA ĐƠN - {displayPrice(this.state.discount)}
                      </td>
                      <td style={customdiscounttotalstyle}>
                        -{displayPrice(this.state.discount)}
                      </td>
                    </tr>
                  )}
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <tr>
              <td colspan={5}>
                <div style={emptyorderstyle}>
                  <img src={Barcode} />
                  <p style={emptyordermessagestyle}>
                    Quét barcode sản phẩm để bắt đầu thanh toán
                  </p>
                </div>
              </td>
            </tr>
          )}
        </table>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginBottom: "16px",
            }}
          >
            <DiscountButton onClick={this.handleOpenDiscount} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CancelButton onClick={this.handleOpenConfirm} />
            <ConfirmModal
              showConfirm={this.state.showConfirm}
              handleCloseConfirm={this.handleCloseConfirm}
            />
            <DiscountModal
              showDiscount={this.state.showDiscount}
              handleCloseDiscount={this.handleCloseDiscount}
              handleConfirmDiscount={this.handleConfirmDiscount}
              total={this.getTotalBeforeDiscount()}
            />
            <CheckoutButton
              total={
                this.state.discountType == 2
                  ? this.getTotal() +
                    this.getTotalBeforeDiscount() / 10 -
                    this.state.discount
                  : this.getTotal() +
                    this.getTotalBeforeDiscount() / 10 -
                    (this.getTotalBeforeDiscount() / 100) * this.state.discount
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
