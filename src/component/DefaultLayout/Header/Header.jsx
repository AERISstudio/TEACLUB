/** @jsxImportSource @emotion/react */
import TEACLUBIcon from "./HeaderItems/TEACLUBIcon/TEACLUBIcon";
import Menu from "./HeaderItems/Menu/Menu";
import LoginButton from "./HeaderItems/LoginButton/LoginButton";

import { HeaderContainer, HeaderStyle } from "./HeaderStyle.style.js";

function Header() {
  return (
    <>
      <div css={HeaderContainer}>
        <div css={HeaderStyle}>
          <TEACLUBIcon />
          <Menu />
          <LoginButton />
        </div>
      </div>
    </>
  );
}

export default Header;
