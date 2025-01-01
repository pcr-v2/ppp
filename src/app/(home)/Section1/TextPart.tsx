"use client";

import Dot from "@/app/_components/Dot";
import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TextPart() {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <Wrapper>
      <TextLayoutBox>
        <Title>
          <span>PCR</span>
          <span style={{ zIndex: 2 }}>Creative</span>
          <span style={{ zIndex: 2 }}>Lab</span>

          <Dot color="#06C755" top={116} right={-20} />
          <Dot color="red" top={263} left={-15} />
        </Title>

        <Desc>
          <GreenDesc>Easy, Simple, Catch</GreenDesc>
          <GrayDesc>
            The best solution for making your own web-site!
            <br />
            Making catchy web-site is easy and simple.
          </GrayDesc>
        </Desc>

        <StartBtn
          onHoverStart={() => setBtnHover(true)}
          onHoverEnd={() => setBtnHover(false)}
        >
          <BtnText
            initial={{ color: "#06C755" }}
            animate={{ color: btnHover ? "#fff" : "#06C755" }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            Start CheolRyeon Lab
          </BtnText>
          <HoverBackground
            initial={{ scaleX: 0 }}
            animate={{ scaleX: btnHover ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </StartBtn>
      </TextLayoutBox>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "1160px",
    alignItems: "start",
    padding: "0px 24px",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const TextLayoutBox = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const Title = styled(Box)(() => {
  return {
    fontWeight: 900,
    display: "flex",
    fontSize: "96px",
    color: "#232323",
    lineHeight: "100px",
    marginRight: "61px",
    position: "relative",
    flexDirection: "column",
  };
});

const Desc = styled(Box)(() => {
  return {
    gap: "12px",
    width: "100%",
    display: "flex",
    marginTop: "60px",
    flexDirection: "column",
  };
});

const GreenDesc = styled("span")(() => {
  return {
    fontSize: "28px",
    fontWeight: 500,
    lineHeight: "32px",
    color: "#06C755",
    letterSpacing: "-0.2px",
  };
});

const GrayDesc = styled("span")(() => {
  return {
    color: "#999",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "-0.2px",
  };
});

const StartBtn = styled(motion.div)(() => {
  return {
    fontWeight: 500,
    fontSize: "20px",
    cursor: "pointer",
    marginTop: "40px",
    lineHeight: "24px",
    overflow: "hidden",
    textAlign: "center",
    borderRadius: "12px",
    padding: "22px 40px",
    position: "relative",
    letterSpacing: "0.4px",
    backgroundColor: "#fff",
    border: "2px solid #06c755",
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
    backgroundColor: "#06c755",
  };
});
