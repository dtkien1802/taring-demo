import { Component } from "react";
import ReactModal from "react-modal";
import ModelBackButton from "./ModelBackButton";
import ModelConfirmButton from "./ModelConfirmButton";

class ConfirmModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mainstyle = {
      content: {
        width: "480px",
        height: "160px",
        fontWeight: 700,
        fontSize: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        border: 0,
        margin: "auto",
      },
      overlay: {
        backgroundColor: "rgba(20, 33, 69, 0.8)",
      },
    };
    return (
      <ReactModal
        style={mainstyle}
        isOpen={this.props.showConfirm}
        onRequestClose={this.props.handleCloseConfirm}
      >
        <p>Xác nhận hủy đơn hàng này?</p>
        <div style={{ display: "inline-block", marginTop: "20px" }}>
          <ModelBackButton onClick={this.props.handleCloseConfirm} />
          <div style={{ marginLeft: "20px", display: "inline-block" }}>
            <ModelConfirmButton onClick={this.props.handleCloseConfirm} />
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default ConfirmModal;
