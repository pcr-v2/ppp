"use client";

import { Box, styled } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import s2_1 from "@/public/images/home-s2/s2-1.png";
import s2_2 from "@/public/images/home-s2/s2-2.png";
import s2_3 from "@/public/images/home-s2/s2-3.png";
import s2_4 from "@/public/images/home-s2/s2-4.png";
import Dot from "@/app/_components/Dot";

interface IProps {}

const Section2 = forwardRef<HTMLDivElement, IProps>((_, ref) => {
  const [onView, setOnView] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const imageVariants = {
    hidden: { opacity: 0, y: 140 },
    visible: (i: number) => ({
      opacity: 1,
      y: -50 * i,
      transition: {
        delay: i * 0.7,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Wrapper ref={ref}>
      {isClient && (
        <Contents>
          <Text>
            <Title>
              What can I do
              <br />
              with PCR Lab?
            </Title>

            <Desc>
              Get your web-site with PCR-Lab and
              <br />
              Visit Art-BonBon, Ecole, ToolManager, BTB
            </Desc>

            <Dot color="#06C755" top={110} left={10} />
          </Text>

          {[s2_1, s2_2, s2_3, s2_4].map((image, index, arr) => (
            <MotionImg
              alt="img"
              key={index}
              index={index}
              custom={index}
              src={image.src}
              arrlength={arr.length}
              variants={imageVariants}
              onViewportEnter={() => setOnView(true)}
              onViewportLeave={() => setOnView(false)}
              initial={onView ? "hidden" : "visible"}
              animate={onView ? "visible" : "hidden"}
            />
          ))}
        </Contents>
      )}
      <BottomFog />
    </Wrapper>
  );
});

export default Section2;

const Wrapper = styled(Box)(() => {
  return {
    zIndex: 10,
    width: "100%",
    display: "flex",
    maxWidth: "1920px",
    minHeight: "100dvh",
    position: "relative",
    scrollMarginTop: "100px",
    justifyContent: "center",
    backgroundColor: "#fff",
  };
});

const Text = styled(Box)(() => {
  return {
    gap: "16px",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    padding: "120px 24px 0px",
  };
});

const Title = styled(Box)(() => {
  return {
    zIndex: 2,
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "56px",
    color: "#232323",
    letterSpacing: "-0.8px",
  };
});

const Desc = styled(Box)(() => {
  return {
    fontWeight: 400,
    color: "#999",
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "0.4px",
  };
});

const MotionImg = styled(motion.img)<{ index: number; arrlength: number }>(({
  index,
  arrlength,
}) => {
  return {
    width: "260px",
    height: "500px",
    position: "absolute",
    left: `${index * 200}px`,
    zIndex: arrlength - index,
    bottom: `${index * -25}px`,
  };
});

const BottomFog = styled(Box)(() => {
  return {
    bottom: 0,
    zIndex: 9,
    width: "100%",
    height: "270px",
    position: "absolute",
    background:
      "linear-gradient(180deg, hsla(0, 0%, 100%, 0) 12.76%, #fff 75.17%)",
  };
});

const Contents = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "860px",
    minHeight: "100%",
    overflow: "hidden",
    position: "relative",
  };
});
