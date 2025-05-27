/** @jsxImportSource @emotion/react */
import React from "react";
import { MainTitle1, MainTitle2, MainTitle3, MainTitle4, MainTitleContainer } from "./MainTitle.style";
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

  return (
    <>
      <div css={MainTitleContainer}>
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
                ease: "linear"
              }
            }
          }}
        >
          <motion.div 
            css={MainTitle1}
            animate={{ color: getTitleColor() }}
            transition={{ duration: 0.2 }}
          >
            twelve O clock
          </motion.div>
          <motion.div 
            css={MainTitle2}
            animate={{ color: getTitleColor() }}
            transition={{ duration: 0.2 }}
          >
            teaclub
          </motion.div>
          <motion.div 
            css={MainTitle3}
            animate={{ color: getTitleColor() }}
            transition={{ duration: 0.2 }}
          >
            twelve O clock
          </motion.div>
          <motion.div 
            css={MainTitle4}
            animate={{ color: getTitleColor() }}
            transition={{ duration: 0.2 }}
          >
            teaclub
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default MainTitle;
