import React from "react";
import { useRecoilValue } from "recoil";
import { hoverStateAtom } from "../../../recoil/atoms/hoverStateAtom";
import { motion } from "framer-motion";

function MainTitle() {
  const hoverState = useRecoilValue(hoverStateAtom);

  const getTitleColor = () => {
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
  const containerStyle = {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "baseline",
    flexDirection: "row",
    gap: "30px",
    marginTop: "10px",
    overflow: "hidden",
    position: "relative",
  };

  const title1Style = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "200px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    whiteSpace: "nowrap",
  };

  const title2Style = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Playfair Display",
    fontSize: "223px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    whiteSpace: "nowrap",
    marginTop: "-10px",
  };

  const title3Style = {
    ...title1Style,
  };

  const title4Style = {
    ...title2Style,
  };

  return (
    <div style={containerStyle}>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          alignItems: "baseline",
        }}
        animate={{
          x: ["0%", "-50%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          },
        }}
      >
        <motion.div
          style={title1Style}
          animate={{ color: getTitleColor() }}
          transition={{ duration: 0.2 }}
        >
          twelve O clock
        </motion.div>
        <motion.div
          style={title2Style}
          animate={{ color: getTitleColor() }}
          transition={{ duration: 0.2 }}
        >
          teaclub
        </motion.div>
        <motion.div
          style={title3Style}
          animate={{ color: getTitleColor() }}
          transition={{ duration: 0.2 }}
        >
          twelve O clock
        </motion.div>
        <motion.div
          style={title4Style}
          animate={{ color: getTitleColor() }}
          transition={{ duration: 0.2 }}
        >
          teaclub
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MainTitle;
