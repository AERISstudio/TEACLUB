import { useRecoilValue } from "recoil";
import { hoverStateAtom } from "../../../../../recoil/atoms/hoverStateAtom";

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

  // ----- styles (converted from .style.js to plain objects) -----
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
  };

  return (
    <div style={menuContainerStyle}>
      <button style={{ ...menuButtonStyle, color: getMenuColor() }}>
        <div>홈</div>
      </button>
      <button style={{ ...menuButtonStyle, color: getMenuColor() }}>
        <div>소개</div>
      </button>
      <button style={{ ...menuButtonStyle, color: getMenuColor() }}>
        <div>예약</div>
      </button>
      <button style={{ ...menuButtonStyle, color: getMenuColor() }}>
        <div>활동</div>
      </button>
      <button style={{ ...menuButtonStyle, color: getMenuColor() }}>
        <div>지원</div>
      </button>
    </div>
  );
}

export default Menu;
