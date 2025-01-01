import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

import Dot from "@/app/_components/Dot";
import { ReactComponent as LeftArrowSvg } from "@/public/images/icons/left-arrow.svg";
import { ReactComponent as RightGreenArrowSvg } from "@/public/images/icons/right-arrow-green.svg";
import { ReactComponent as RightArrowSvg } from "@/public/images/icons/right-arrow.svg";

export default function Section4() {
  const [btnHover, setBtnHover] = useState(false);
  return (
    <Wrapper>
      <Title>
        <span style={{ zIndex: 2, position: "relative" }}>
          Experience the showcase with design template,
        </span>
        <Dot color="#06C755" top={-10} left={100} />
        <span>Find the website that's suit you</span>
      </Title>

      <VideoSlide>
        <LeftArrow />

        <VideoWrapper>
          <Video autoPlay muted loop playsInline>
            <source src={"/images/home-s4/s4-3.mp4"} />
          </Video>
        </VideoWrapper>

        <RightArrow />
      </VideoSlide>

      <Pagination>
        <PagiDot dotcolor="#f5f5f5" />
        <PagiDot dotcolor="#f5f5f5" />
        <PagiDot dotcolor="#396EAF" />
      </Pagination>

      <StartBtn
        onHoverStart={() => setBtnHover(true)}
        onHoverEnd={() => setBtnHover(false)}
      >
        <BtnText
          initial={{ color: "#396EAF" }}
          animate={{ color: btnHover ? "#fff" : "#396EAF" }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          Experience Design Template
          <BtnArrow ishover={btnHover.toString()} />
        </BtnText>
        <HoverBackground
          initial={{ scaleX: 0 }}
          animate={{ scaleX: btnHover ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </StartBtn>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "60px",
    width: "100%",
    display: "flex",
    maxWidth: "1920px",
    minHeight: "100dvh",
    alignItems: "center",
    padding: "120px 24px",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const Title = styled(Box)(() => {
  return {
    zIndex: 2,
    display: "flex",
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "56px",
    color: "#232323",
    textAlign: "center",
    position: "relative",
    flexDirection: "column",
    letterSpacing: "-0.8px",
  };
});

const Video = styled(motion.video)(() => {
  return {
    width: "100%",
    height: "620px",
    maxWidth: "942px",
    objectFit: "cover",
    borderRadius: "8px",
  };
});

const VideoSlide = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const VideoWrapper = styled(Box)(() => {
  return {
    width: "1020px",
    height: "696px",
    display: "flex",
    borderRadius: "28px",
    background: "#fff",
    alignItems: "center",
    justifyContent: "center",
    outline: "2px solid #f5f5f5",
    boxShadow: "0px 20px 32px 0px rgba(0, 0, 0, 0.05);",
  };
});

const LeftArrow = styled(LeftArrowSvg)(() => ({
  width: "100px",
  height: "100px",
  cursor: "pointer",
  transition: "all 0.3s ease",

  "& path": {
    opacity: 1,
    stroke: "#AAAAAA",
    transition: "all 0.3s ease",
  },

  "&:hover path": {
    opacity: 1,
    stroke: "#396EAF",
  },
}));

const RightArrow = styled(RightArrowSvg)(() => ({
  width: "100px",
  height: "100px",
  cursor: "pointer",
  transition: "all 0.3s ease",

  "& path": {
    opacity: 1,
    stroke: "#AAAAAA",
    transition: "all 0.3s ease",
  },

  "&:hover path": {
    opacity: 1,
    stroke: "#396EAF",
  },
}));

const StartBtn = styled(motion.div)(() => {
  return {
    fontWeight: 500,
    display: "flex",
    fontSize: "20px",
    cursor: "pointer",
    marginTop: "40px",
    lineHeight: "24px",
    overflow: "hidden",
    textAlign: "center",
    borderRadius: "12px",
    padding: "22px 40px",
    position: "relative",
    alignItems: "center",
    letterSpacing: "0.4px",
    backgroundColor: "#fff",
    justifyContent: "center",
    border: "2px solid #396EAF",
  };
});

const BtnText = styled(motion.span)(() => {
  return {
    zIndex: 2,
    position: "relative",
  };
});

const HoverBackground = styled(motion.div)(() => {
  return {
    top: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    transformOrigin: "left",
    backgroundColor: "#396EAF",
  };
});

const BtnArrow = styled(RightGreenArrowSvg)<{ ishover: string }>(
  ({ ishover }) => ({
    marginLeft: "20px",

    "& path": {
      opacity: 1,
      transition: "stroke 0.4s ease",
      stroke: ishover === "true" ? "#fff" : "#396EAF",
    },
  }),
);

const Pagination = styled(Box)(() => {
  return {
    gap: "20px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const PagiDot = styled(Box)<{ dotcolor: string }>(({ dotcolor }) => {
  return {
    width: "16px",
    height: "16px",
    cursor: "pointer",
    borderRadius: "100%",
    backgroundColor: dotcolor,
  };
});
