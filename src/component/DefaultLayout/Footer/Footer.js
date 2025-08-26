import CLogo from "../../../assets/c/c.svg";
import { useRecoilValue } from "recoil";
import { hoverStateAtom } from "../../../recoil/atoms/hoverStateAtom";

function Footer() {
  const hoverState = useRecoilValue(hoverStateAtom);

  const getFooterColor = () => {
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

  // ----- styles (converted from .style.js to plain objects) -----
  const footerContainerStyle = {
    display: "flex",
    alignItems: "end",
    justifyContent: "space-between",
    padding: "35px 55px",
    bottom: 0,
    background: "transparent",
  };

  const footerTextStyle = {
    color: "#000",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  };

  return (
    <div style={footerContainerStyle}>
      <div style={{ ...footerTextStyle, color: getFooterColor() }}>
        <div>98, Oryang 1-gil,</div>
        <div>Seo-gu,</div>
        <div>Daejeon, Republic of Korea</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <img
          src={CLogo}
          alt="Copyright Logo"
          style={{
            width: "20px",
            height: "20px",
            filter: `brightness(0) ${
              hoverState === 0 || hoverState === 2 ? "invert(1)" : ""
            }`,
          }}
        />
        <div style={{ ...footerTextStyle, color: getFooterColor() }}>
          12'o teaclub, All right reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
