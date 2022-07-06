import ItemList from "../../components/ItemList/ItemList";
import Notification from "../../components/Notification";
import Order from "../../components/Order/Order";
import UserInfo from "../../components/UserInfo";

export default function Stock() {
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
      <ItemList />
      <div style={mainstyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Notification />
          <UserInfo />
        </div>
        <div style={{ flexGrow: 1, marginTop: "20px" }}>
          <Order />
        </div>
      </div>
    </div>
  );
}
