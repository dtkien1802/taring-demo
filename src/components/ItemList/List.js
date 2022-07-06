import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./Item";
import NextArrow from "./NextArrow";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineNumber: 0,
    };
  }
  handleChangeLine(i) {
    this.setState({ lineNumber: i });
  }
  render() {
    const mockproduct = [
      { name: "Tất cả", products: [0, 0, 0, 0] },
      { name: "Điện máy", products: [] },
      { name: "Gia dụng", products: [] },
      { name: "Điện máy", products: [] },
      { name: "Gia dụng", products: [] },
    ];
    const mainstyle = {
      position: "absolute",
      backgroundColor: "#FFFFFF",
      width: "328px",
      borderRadius: "8px",
      bottom: "20px",
      top: "80px",
      left: "96px",
    };
    const navstyle = {
      backgroundColor: "#EEEEEE",
      fontFamily: "Nunito Sans",
      fontWeight: 700,
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      width: "95%",
    };
    const navitemstyle = {
      height: "57px",
      textAlign: "center",
      lineHeight: "57px",
      color: "rgba(17, 15, 36, 0.4)",
    };
    const navitemstyleactive = {
      height: "57px",
      textAlign: "center",
      lineHeight: "57px",
      borderBottom: "2px solid #2E7CD9",
    };
    const resultstyle = {
      color: "#969696",
      fontSize: "14px",
      fontWeight: 600,
      margin: "auto",
      marginTop: "17px",
      marginBottom: "12px",
      width: "304px",
    };
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <></>,
    };
    return (
      <div style={mainstyle}>
        <div
          style={{
            backgroundColor: "#EEEEEE",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          <Slider style={navstyle} {...settings}>
            {mockproduct.map((productline, index) => {
              return (
                <div>
                  <div
                    style={
                      this.state.lineNumber == index
                        ? navitemstyleactive
                        : navitemstyle
                    }
                    onClick={() => this.handleChangeLine(index)}
                  >
                    <p>{productline.name}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <p style={resultstyle}>04 kết quả tìm kiếm cho “Rayban ...”</p>
        {mockproduct[this.state.lineNumber].products.map(() => {
          return <Item />;
        })}
      </div>
    );
  }
}

export default List;
