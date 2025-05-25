/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import { useState } from "react";
import { Circle, CircleContainer } from "./MainCircle.style";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { hoverStateAtom } from "../../../recoil/atoms/hoverStateAtom";

function MainCircle() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const setHoverState = useSetRecoilState(hoverStateAtom);
  const hoverState = useRecoilValue(hoverStateAtom);

  // 첫 번째 원의 variants
  const firstCircleVariants = {
    normal: { opacity: 1, backgroundColor: "#000000" },
    hover1: { opacity: 0, backgroundColor: "#000000" },
    hover2: { opacity: 1, backgroundColor: "#000000" },
    hover3: { opacity: 1, backgroundColor: "#ffffff" },
  };

  // 두 번째 원의 variants
  const secondCircleVariants = {
    normal: { opacity: 1, backgroundColor: "#000000" },
    hover1: { opacity: 1, backgroundColor: "#ffffff" },
    hover2: { opacity: 0, backgroundColor: "#000000" },
    hover3: { opacity: 1, backgroundColor: "#ffffff" },
  };

  // 세 번째 원의 variants
  const thirdCircleVariants = {
    normal: { opacity: 1, backgroundColor: "#000000" },
    hover1: { opacity: 1, backgroundColor: "#ffffff" },
    hover2: { opacity: 1, backgroundColor: "#000000" },
    hover3: { opacity: 0, backgroundColor: "#000000" },
  };

  const getAnimateState = () => {
    if (hoveredIndex === 0) return "hover1";
    if (hoveredIndex === 1) return "hover2";
    if (hoveredIndex === 2) return "hover3";
    return "normal";
  };

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

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setHoverState(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setHoverState(null);
  };

  return (
    <>
      <div css={CircleContainer}>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <motion.div
              style={{
                position: "absolute",
                zIndex: 1,
                textAlign: "center",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "60px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                width: "200px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{ color: getTextColor() }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              tea
            </motion.div>
            <motion.div
              style={{
                position: "absolute",
                zIndex: 1,
                textAlign: "right",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                width: "100px",
                right: "35px",
                top: "90px",
              }}
              animate={{ color: getTextColor() }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              (regular)
            </motion.div>
            <motion.div
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              variants={firstCircleVariants}
              animate={getAnimateState()}
              transition={{
                opacity: { duration: 0.2, ease: "easeInOut" },
                backgroundColor: { duration: 0.2, ease: "easeInOut" },
              }}
              css={Circle}
              style={{ position: "relative", zIndex: 2 }}
            ></motion.div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <motion.div
              style={{
                position: "absolute",
                zIndex: 1,
                textAlign: "center",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "50px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                width: "200px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{ color: getTextColor() }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              engineer
            </motion.div>
            <motion.div
              style={{
                position: "absolute",
                zIndex: 1,
                textAlign: "right",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                width: "100px",
                right: "-25px",
                top: "90px",
              }}
              animate={{ color: getTextColor() }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              (software)
            </motion.div>
            <motion.div
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              variants={secondCircleVariants}
              animate={getAnimateState()}
              transition={{
                opacity: { duration: 0.2, ease: "easeInOut" },
                backgroundColor: { duration: 0.2, ease: "easeInOut" },
              }}
              css={Circle}
              style={{ position: "relative", zIndex: 2 }}
            ></motion.div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <motion.div
              style={{
                position: "absolute",
                zIndex: 1,
                textAlign: "center",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "50px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                width: "200px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{ color: getTextColor() }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              business
            </motion.div>
            <motion.div
              style={{
                position: "absolute",
                zIndex: 1,
                textAlign: "right",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                width: "100px",
                right: "-25px",
                top: "90px",
              }}
              animate={{ color: getTextColor() }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              (economy)
            </motion.div>
            <motion.div
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              variants={thirdCircleVariants}
              animate={getAnimateState()}
              transition={{
                opacity: { duration: 0.2, ease: "easeInOut" },
                backgroundColor: { duration: 0.2, ease: "easeInOut" },
              }}
              css={Circle}
              style={{ position: "relative", zIndex: 2 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCircle;
