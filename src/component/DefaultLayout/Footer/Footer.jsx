/** @jsxImportSource @emotion/react */
import CLogo from "../../../assets/c/c.svg";
import { FooterContainer, FooterText } from "./Footer.style";
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

  return (
    <>
      <div
        css={FooterContainer}
        style={{
          background: "transparent",
        }}
      >
        <div css={FooterText} style={{ color: getFooterColor() }}>
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
          <div css={FooterText} style={{ color: getFooterColor() }}>
            12'o teaclub,All right reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
