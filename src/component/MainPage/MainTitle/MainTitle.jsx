/** @jsxImportSource @emotion/react */
import React from "react";
import { MainTitle1, MainTitle2, MainTitleContainer } from "./MainTitle.style";
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
          css={MainTitle1}
          style={{ color: getTitleColor() }}
          animate={{ color: getTitleColor() }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          twelve O clock
        </motion.div>
        <motion.div
          css={MainTitle2}
          style={{ color: getTitleColor() }}
          animate={{ color: getTitleColor() }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          teaclub
        </motion.div>
      </div>
    </>
  );
}

export default MainTitle;
