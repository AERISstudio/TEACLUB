import TEACLUBIcon from "./HeaderItems/TEACLUBIcon/TEACLUBIcon";
import Menu from "./HeaderItems/Menu/Menu";
import LoginButton from "./HeaderItems/LoginButton/LoginButton";

function Header() {
  // ----- styles (converted from .style.js to plain objects) -----
  const headerContainerStyle = {
    display: "flex",
    padding: "21px 57px 0 57px",
  };

  const headerStyle = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  };

  return (
    <div style={headerContainerStyle}>
      <div style={headerStyle}>
        <TEACLUBIcon />
        <Menu />
        <LoginButton />
      </div>
    </div>
  );
}

export default Header;
