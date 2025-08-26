// Header.js — merged: TEACLUBIcon, Menu, LoginButton
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { hoverStateAtom } from "../../../recoil/atoms/hoverStateAtom"; // 경로는 프로젝트 구조에 맞게 조정

/* ---------------- TEACLUBIcon ---------------- */
function TEACLUBIcon() {
  const hoverState = useRecoilValue(hoverStateAtom);

  const getTextColor = () => {
    switch (hoverState) {
      case 0:
        return "#fff";
      case 1:
        return "#000";
      case 2:
        return "#fff";
      default:
        return "#000";
    }
  };

  const getSvgColor = () => {
    switch (hoverState) {
      case 0:
        return "#7A97BC";
      case 1:
        return "#FF919B";
      case 2:
        return "#40C06D";
      default:
        return "#40C0B3";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <svg
        width="198"
        height="18"
        viewBox="0 0 198 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "relative", marginTop: "21px" }}
      >
        <path
          d="M198 8.24757C198 26.8047 131.167 13.1755 99.193 13.1755C67.2186 13.1755 0 26.8048 0 8.24771C0 -10.3094 67.2186 8.24771 99.193 8.24771C131.167 8.24771 198 -10.3095 198 8.24757Z"
          fill={getSvgColor()}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          color: getTextColor(),
          textAlign: "center",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "30px",
          fontWeight: 800,
          lineHeight: "normal",
        }}
      >
        12'o Teaclub
      </div>
    </div>
  );
}

/* ---------------- Menu ---------------- */
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

  const linkBase = {
    background: "transparent",
    border: "none",
    color: getMenuColor(),
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "normal",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "70px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: "10px",
      }}
    >
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          ...linkBase,
          fontWeight: isActive ? "bold" : 600,
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        홈
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          ...linkBase,
          fontWeight: isActive ? "bold" : 600,
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        소개
      </NavLink>
      <NavLink
        to="/reservation"
        style={({ isActive }) => ({
          ...linkBase,
          fontWeight: isActive ? "bold" : 600,
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        예약
      </NavLink>
      <NavLink
        to="/activity"
        style={({ isActive }) => ({
          ...linkBase,
          fontWeight: isActive ? "bold" : 600,
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        활동
      </NavLink>
      <NavLink
        to="/join"
        style={({ isActive }) => ({
          ...linkBase,
          fontWeight: isActive ? "bold" : 600,
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        지원
      </NavLink>
    </div>
  );
}

/* ---------------- LoginButton ---------------- */
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

  const btn = getButtonStyle();

  return (
    <button
      style={{
        width: "80px",
        height: "40px",
        border: "none",
        borderRadius: "10px",
        background: btn.background,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          color: btn.color,
          textAlign: "center",
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "normal",
        }}
      >
        로그인
      </div>
    </button>
  );
}

/* ---------------- Header (uses the 3 above) ---------------- */
function Header() {
  return (
    <div style={{ display: "flex", padding: "21px 57px 0 57px" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <TEACLUBIcon />
        <Menu />
        <LoginButton />
      </div>
    </div>
  );
}

export default Header;
