/** @jsxImportSource @emotion/react */
import { Button, ButtonText } from "./LoginButton.style";
import { useRecoilValue } from "recoil";
import { hoverStateAtom } from "../../../../../recoil/atoms/hoverStateAtom";

function LoginButton() {
  const hoverState = useRecoilValue(hoverStateAtom);

  const getButtonStyle = () => {
    switch (hoverState) {
      case 0:
        return {
          background: "#fff",
          color: "#000",
        };
      case 1:
        return {
          background: "#000",
          color: "#fff",
        };
      case 2:
        return {
          background: "#fff",
          color: "#000",
        };
      default:
        return {
          background: "#000",
          color: "#fff",
        };
    }
  };

  const buttonStyle = getButtonStyle();

  return (
    <>
      <button css={Button} style={{ background: buttonStyle.background }}>
        <div css={ButtonText} style={{ color: buttonStyle.color }}>
          로그인
        </div>
      </button>
    </>
  );
}

export default LoginButton;
