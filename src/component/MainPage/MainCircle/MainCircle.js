import { motion } from "framer-motion";
import { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { hoverStateAtom } from "../../../recoil/atoms/hoverStateAtom";

function MainCircle() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const setHoverState = useSetRecoilState(hoverStateAtom);
  const hoverState = useRecoilValue(hoverStateAtom);

  // ----- styles (from .style.js -> inline) -----
  const circleContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "155px",
  };

  const circleStyle = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    background: "black",
    cursor: "pointer",
    position: "relative",
    zIndex: 2,
  };

  const labelCenterBase = {
    position: "absolute",
    zIndex: 1,
    textAlign: "center",
    fontFamily: "Plus Jakarta Sans",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    width: "200px",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  const hintBase = {
    position: "absolute",
    zIndex: 1,
    textAlign: "right",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    width: "100px",
    top: "90px",
  };

  // ----- framer-motion variants -----
  const firstCircleVariants = {
    normal: { opacity: 1, backgroundColor: "#000000" },
    hover1: { opacity: 0, backgroundColor: "#000000" },
    hover2: { opacity: 1, backgroundColor: "#000000" },
    hover3: { opacity: 1, backgroundColor: "#ffffff" },
  };

  const secondCircleVariants = {
    normal: { opacity: 1, backgroundColor: "#000000" },
    hover1: { opacity: 1, backgroundColor: "#ffffff" },
    hover2: { opacity: 0, backgroundColor: "#000000" },
    hover3: { opacity: 1, backgroundColor: "#ffffff" },
  };

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
      <div style={circleContainerStyle}>
        {/* 첫 번째 원 */}
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
              style={{ ...labelCenterBase, fontSize: "60px" }}
              animate={{ color: getTextColor() }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              tea
            </motion.div>
            <motion.div
              style={{ ...hintBase, right: "35px" }}
              animate={{
                color: getTextColor(),
                opacity: hoveredIndex === 0 ? 1 : 0,
              }}
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
              style={circleStyle}
            />
          </div>
        </div>

        {/* 두 번째 원 */}
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
              style={{ ...labelCenterBase, fontSize: "50px" }}
              animate={{ color: getTextColor() }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              engineer
            </motion.div>
            <motion.div
              style={{ ...hintBase, right: "-25px" }}
              animate={{
                color: getTextColor(),
                opacity: hoveredIndex === 1 ? 1 : 0,
              }}
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
              style={circleStyle}
            />
          </div>
        </div>

        {/* 세 번째 원 */}
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
              style={{ ...labelCenterBase, fontSize: "50px" }}
              animate={{ color: getTextColor() }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              business
            </motion.div>
            <motion.div
              style={{ ...hintBase, right: "-25px" }}
              animate={{
                color: getTextColor(),
                opacity: hoveredIndex === 2 ? 1 : 0,
              }}
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
              style={circleStyle}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCircle;
