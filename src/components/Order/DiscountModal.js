import { Component } from "react";
import ReactModal from "react-modal";
import displayPrice from "../../utils/displayPrice";
import ModelBackButton from "./ModelBackButton";
import ModelConfirmButton from "./ModelConfirmButton";

class DiscountModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      type: 1,
    };
    this.handleChangeType = this.handleChangeType.bind(this);
  }
  handleChangeAmount(i) {
    this.setState({ amount: i });
  }
  handleChangeType(e) {
    this.setState({ amount: 0, type: e.target.value });
    // console.log("handle");
  }
  render() {
    const mainstyle = {
      content: {
        width: "540px",
        height: "384px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        border: 0,
        margin: "auto",
        boxSizing: "border-box",
      },
      overlay: {
        backgroundColor: "rgba(20, 33, 69, 0.8)",
      },
    };
    const typestyle = {
      width: "242px",
      height: "48px",
      backgroundColor: "#F5F5F5",
      fontSize: "12px",
      fontWeight: "700",
      alignItems: "center",
      display: "flex",
      paddingLeft: "17px",
      boxSizing: "border-box",
    };
    const discountinputstyle = {
      width: "496px",
      height: "64px",
      boxSizing: "border-box",
      marginBottom: "16px",
      fontSize: "24px",
      fontWeight: 700,
      textAlign: "center",
      border: "1px solid #EEEEEE",
    };
    const discountbuttonstyle = {
      width: "118px",
      height: "48px",
      border: "1px solid #EEEEEE",
      fontSize: "16px",
      fontWeight: 700,
      color: "#585757",
    };
    return (
      <ReactModal
        style={mainstyle}
        isOpen={this.props.showDiscount}
        onRequestClose={this.props.handleCloseDiscount}
      >
        <p style={{ fontWeight: 700, fontSize: "20px", marginBottom: "21px" }}>
          Tạo nội dung khuyến mại
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
            marginBottom: "16px",
          }}
          onChange={this.handleChangeType}
        >
          <div style={typestyle}>
            <input
              type="radio"
              name="discount_type"
              id="percent_discount"
              checked={this.state.type == 1}
              value={1}
            />
            <label style={{ marginLeft: "16px" }} for="percent_discount">
              Chiết khấu theo %
            </label>
          </div>
          <div style={typestyle}>
            <input
              type="radio"
              name="discount_type"
              id="price_discount"
              checked={this.state.type == 2}
              value={2}
            />
            <label style={{ marginLeft: "16px" }} for="price_discount">
              Chiết khấu giá tiền
            </label>
          </div>
        </div>
        <input
          style={discountinputstyle}
          value={
            this.state.amount == 0
              ? ""
              : this.state.type == 1
              ? this.state.amount + "%"
              : this.state.amount
          }
        ></input>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "496px",
            marginBottom: "16px",
          }}
        >
          {this.state.type == 1 ? (
            <>
              <button
                style={discountbuttonstyle}
                onClick={() => this.handleChangeAmount(5)}
              >
                5%
              </button>
              <button
                style={discountbuttonstyle}
                onClick={() => this.handleChangeAmount(10)}
              >
                10%
              </button>
              <button
                style={discountbuttonstyle}
                onClick={() => this.handleChangeAmount(15)}
              >
                15%
              </button>
              <button
                style={discountbuttonstyle}
                onClick={() => this.handleChangeAmount(20)}
              >
                20%
              </button>
            </>
          ) : (
            <>
              <button
                style={discountbuttonstyle}
                onClick={() => this.handleChangeAmount(2000)}
              >
                2,000
              </button>
              <button
                style={discountbuttonstyle}
                onClick={() => this.handleChangeAmount(20000)}
              >
                20,000
              </button>
              <button
                style={discountbuttonstyle}
                onClick={() => this.handleChangeAmount(200000)}
              >
                200,000
              </button>
              <button
                style={discountbuttonstyle}
                onClick={() => this.handleChangeAmount(2000000)}
              >
                2,000,000
              </button>
            </>
          )}
        </div>

        <div style={{ width: "100%" }}>
          <p
            style={{
              marginBottom: "16px",
              textAlign: "left",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Tương đương:{" "}
            <span style={{ color: "#2E7CD9" }}>
              {this.state.type == 1
                ? displayPrice((this.props.total / 100) * this.state.amount)
                : displayPrice(this.state.amount)}
            </span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "496px",
          }}
        >
          <button
            onClick={this.props.handleCloseDiscount}
            style={{
              width: "160px",
              height: "48px",
              backgroundColor: "#EEEEEE",
              color: "#969696",
              borderRadius: "6px",
              border: 0,
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Hủy
          </button>
          <button
            onClick={() =>
              this.props.handleConfirmDiscount(
                this.state.type,
                this.state.amount
              )
            }
            style={{
              width: "328px",
              height: "48px",
              borderRadius: "6px",
              border: 0,
              backgroundColor: "#2E7CD9",
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Xác nhận
          </button>
        </div>
      </ReactModal>
    );
  }
}

export default DiscountModal;
