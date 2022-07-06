import NextIcon from "../../assets/NextIcon.svg";

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  const mainstyle = {
    position: "absolute",
    right: "0px",
    top: "22px",
  };
  return <img style={mainstyle} onClick={onClick} src={NextIcon} />;
}
