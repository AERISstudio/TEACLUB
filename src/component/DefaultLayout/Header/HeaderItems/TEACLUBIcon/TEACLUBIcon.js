import { useRecoilValue } from "recoil";
import { hoverStateAtom } from "../../../../../recoil/atoms/hoverStateAtom";

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

  // ----- styles (converted from .style.js to plain objects) -----
  const logoStyle = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  };

  const textStyle = {
    position: "absolute",
    color: "#000",
    textAlign: "center",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "normal",
  };

  const svgStyle = {
    position: "relative",
    marginTop: "21px",
  };

  return (
    <div style={logoStyle}>
      <svg
        width="198"
        height="18"
        viewBox="0 0 198 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyle}
      >
        <path
          d="M198 8.24757C198 26.8047 131.167 13.1755 99.193 13.1755C67.2186 13.1755 0 26.8048 0 8.24771C0 -10.3094 67.2186 8.24771 99.193 8.24771C131.167 8.24771 198 -10.3095 198 8.24757Z"
          fill={getSvgColor()}
        />
      </svg>
      <div style={{ ...textStyle, color: getTextColor() }}>12'o Teaclub</div>
    </div>
  );
}

export default TEACLUBIcon;
