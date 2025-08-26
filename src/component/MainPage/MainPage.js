import MainTitle from "./MainTitle/MainTitle";
import MainCircle from "./MainCircle/MainCircle";
import { useRecoilValue } from "recoil";
import { hoverStateAtom } from "../../recoil/atoms/hoverStateAtom";
import video1 from "../../assets/videos/1.mp4";
import video2 from "../../assets/videos/2.mp4";
import video3 from "../../assets/videos/3.mp4";
import { motion, AnimatePresence } from "framer-motion";

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

  // 기존 emotion css를 일반 style 객체로 변환
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
