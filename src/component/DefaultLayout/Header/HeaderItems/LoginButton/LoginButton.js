import { useRecoilValue } from "recoil";
import { hoverStateAtom } from "../../../../../recoil/atoms/hoverStateAtom";

function LoginButton() {
  const hoverState = useRecoilValue(hoverStateAtom);

  const getButtonStyle = () => {
    switch (hoverState) {
      case 0:
        return { background: "#fff", color: "#000" };
      case 1:
        return { background: "#000", color: "#fff" };
      case 2:
        return { background: "#fff", color: "#000" };
      default:
        return { background: "#000", color: "#fff" };
    }
  };

  const buttonStyle = getButtonStyle();

  // ----- styles (converted from .style.js to plain objects) -----
  const baseButtonStyle = {
    width: "80px",
    height: "40px",
    border: "none",
    borderRadius: "10px",
    background: "#000",
    cursor: "pointer",
  };

  const buttonTextStyle = {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  };

  return (
    <button style={{ ...baseButtonStyle, background: buttonStyle.background }}>
      <div style={{ ...buttonTextStyle, color: buttonStyle.color }}>로그인</div>
    </button>
  );
}

export default LoginButton;
