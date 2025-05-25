/** @jsxImportSource @emotion/react */
import MainTitle from "./MainTitle/MainTitle";
import { MainPageStyle } from "./MainPage.style";
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

  return (
    <>
      <div css={MainPageStyle}>
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
              style={{
                position: "fixed",
                right: 0,
                bottom: 0,
                minWidth: "100%",
                minHeight: "100%",
                width: "auto",
                height: "auto",
                zIndex: -1,
                objectFit: "cover",
              }}
            >
              <source src={bgVideo} type="video/mp4" />
            </motion.video>
          )}
        </AnimatePresence>
        <MainTitle />
        <div css={{ height: "133px" }}></div>
        <MainCircle />
      </div>
    </>
  );
}

export default MainPage;
