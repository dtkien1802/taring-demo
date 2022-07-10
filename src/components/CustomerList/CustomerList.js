import { Component } from "react";
import SearchBox from "../SearchBox";
import AddNewCustomer from "./AddNewCustomer";
import Customer from "./Customer";

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [
        { name: "MAI VĂN THƯỞNG", phone: "094***3036" },
        {
          name: "Ngô xuân thưởng",
          phone: "091***2465",
        },
      ],
    };
  }
  render() {
    const mainstyle = {
      backgroundColor: "#142145",
      height: "100%",
      width: "360px",
      boxSizing: "border-box",
      paddingTop: "20px",
    };
    const searchstyle = {
      marginBottom: "20px",
    };
    return (
      <div style={mainstyle}>
        <div style={searchstyle}>
          <SearchBox placeholder="" />
        </div>
        {this.state.customers.map((customer) => {
          return <Customer customer={customer} />;
        })}
        <AddNewCustomer />
      </div>
    );
  }
}

export default CustomerList;
