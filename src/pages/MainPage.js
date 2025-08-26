import { useRecoilValue, useSetRecoilState } from "recoil";
import { hoverStateAtom } from "../recoil/atoms/hoverStateAtom";
import video1 from "../assets/videos/1.mp4";
import video2 from "../assets/videos/2.mp4";
import video3 from "../assets/videos/3.mp4";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ---------------------- MainTitle ----------------------
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
    fontWeight: 600,
    whiteSpace: "nowrap",
  };

  const title2Style = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Playfair Display",
    fontSize: "223px",
    fontWeight: 500,
    whiteSpace: "nowrap",
    marginTop: "-10px",
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
      </motion.div>
    </div>
  );
}

// ---------------------- MainCircle ----------------------
function MainCircle() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const setHoverState = useSetRecoilState(hoverStateAtom);
  const hoverState = useRecoilValue(hoverStateAtom);

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
    fontWeight: 700,
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
    fontWeight: 500,
    width: "100px",
    top: "90px",
  };

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
    <div style={circleContainerStyle}>
      {[
        {
          label: "tea",
          hint: "(regular)",
          variants: firstCircleVariants,
          fontSize: "60px",
          right: "35px",
        },
        {
          label: "engineer",
          hint: "(software)",
          variants: secondCircleVariants,
          fontSize: "50px",
          right: "-25px",
        },
        {
          label: "business",
          hint: "(economy)",
          variants: thirdCircleVariants,
          fontSize: "50px",
          right: "-25px",
        },
      ].map((circle, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <motion.div
              style={{ ...labelCenterBase, fontSize: circle.fontSize }}
              animate={{ color: getTextColor() }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {circle.label}
            </motion.div>
            <motion.div
              style={{ ...hintBase, right: circle.right }}
              animate={{
                color: getTextColor(),
                opacity: hoveredIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {circle.hint}
            </motion.div>
            <motion.div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              variants={circle.variants}
              animate={getAnimateState()}
              transition={{
                opacity: { duration: 0.2, ease: "easeInOut" },
                backgroundColor: { duration: 0.2, ease: "easeInOut" },
              }}
              style={circleStyle}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------------------- MainPage ----------------------
function MainPage() {
  const hoverState = useRecoilValue(hoverStateAtom);

  const getBackgroundVideo = () => {
    switch (hoverState) {
      case 0:
        return video1;
      case 1:
        return video2;
      case 2:
        return video3;
      default:
        return null;
    }
  };

  const bgVideo = getBackgroundVideo();

  const mainPageStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };

  const circleWrapperStyle = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const videoStyle = {
    position: "fixed",
    right: 0,
    bottom: 0,
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    zIndex: -1,
    objectFit: "cover",
  };

  return (
    <div style={mainPageStyle}>
      <AnimatePresence mode="wait">
        {bgVideo && (
          <motion.video
            key={bgVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            autoPlay
            muted
            loop
            playsInline
            style={videoStyle}
          >
            <source src={bgVideo} type="video/mp4" />
          </motion.video>
        )}
      </AnimatePresence>
      <MainTitle />
      <div style={circleWrapperStyle}>
        <MainCircle />
      </div>
    </div>
  );
}

export default MainPage;
