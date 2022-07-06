import { Component } from "react";
import NavButton from "./NavButton";
import NavButtonSmall from "./NavButtonSmall";
import SOSButton from "./SOSButton";
import MoneyCalculationLogo from "../../assets/MoneyCalculationLogo.svg";
import StockLogo from "../../assets/StockLogo.svg";
import AnalysisLogo from "../../assets/AnalysisLogo.svg";
import ManagementLogo from "../../assets/ManagementLogo.svg";
import SettingsLogo from "../../assets/SettingsLogo.svg";
import NotificationLogo from "../../assets/NotificationLogo.svg";
import SignoutLogo from "../../assets/SignoutLogo.svg";

class NavBar extends Component {
  render() {
    const mainstyle = {
      backgroundColor: "#0D1429",
      width: "80px",
      height: "100%",
      paddingTop: "94px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
    return (
      <div style={mainstyle}>
        <NavButton
          name="Tính tiền"
          logo={MoneyCalculationLogo}
          linkTo="/money-calculation"
          isActive={true}
        />
        <NavButton name="Kho hàng" logo={StockLogo} linkTo="/stock" />
        <NavButton name="Phân tích" logo={AnalysisLogo} linkTo="/analysis" />
        <NavButton name="Quản lý" logo={ManagementLogo} linkTo="/management" />
        <NavButton name="Quản lý" logo={SettingsLogo} linkTo="/settings" />
        <NavButtonSmall style={{ marginTop: "72px" }} logo={NotificationLogo} />
        <NavButtonSmall logo={SignoutLogo} />
        <SOSButton />
      </div>
    );
  }
}

export default NavBar;
