import { useRecoilValue } from "recoil";
import { hoverStateAtom } from "../../../../../recoil/atoms/hoverStateAtom";
import { Link } from "react-router-dom"; // 🔥 추가

function Menu() {
  const hoverState = useRecoilValue(hoverStateAtom);

  const getMenuColor = () => {
    switch (hoverState) {
      case 0:
        return "#7A97BC";
      case 1:
        return "#000";
      case 2:
        return "#40C06D";
      default:
        return "#000";
    }
  };

  const menuContainerStyle = {
    display: "flex",
    gap: "70px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "10px",
  };

  const menuButtonStyle = {
    background: "transparent",
    border: "none",
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    cursor: "pointer",
    textDecoration: "none", // 🔥 Link 밑줄 제거
  };

  return (
    <div style={menuContainerStyle}>
      <Link to="/" style={{ ...menuButtonStyle, color: getMenuColor() }}>
        홈
      </Link>
      <Link to="/about" style={{ ...menuButtonStyle, color: getMenuColor() }}>
        소개
      </Link>
      <Link
        to="/reservation"
        style={{ ...menuButtonStyle, color: getMenuColor() }}
      >
        예약
      </Link>
      <Link
        to="/activity"
        style={{ ...menuButtonStyle, color: getMenuColor() }}
      >
        활동
      </Link>
      <Link to="/support" style={{ ...menuButtonStyle, color: getMenuColor() }}>
        지원
      </Link>
    </div>
  );
}

export default Menu;
