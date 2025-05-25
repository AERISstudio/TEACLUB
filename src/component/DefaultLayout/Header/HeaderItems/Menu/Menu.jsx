/** @jsxImportSource @emotion/react */
import { MenuButton, MenuContainer } from "./Menu.style";
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

  return (
    <div css={MenuContainer}>
      <button css={MenuButton} style={{ color: getMenuColor() }}>
        <div>홈</div>
      </button>
      <button css={MenuButton} style={{ color: getMenuColor() }}>
        <div>소개</div>
      </button>
      <button css={MenuButton} style={{ color: getMenuColor() }}>
        <div>예약</div>
      </button>
      <button css={MenuButton} style={{ color: getMenuColor() }}>
        <div>활동</div>
      </button>
      <button css={MenuButton} style={{ color: getMenuColor() }}>
        <div>지원</div>
      </button>
    </div>
  );
}

export default Menu;
