"use client";
import ScrollPart from "@/app/(home)/Section1/ScrollPart";
import TextPart from "@/app/(home)/Section1/TextPart";
import { Box, styled } from "@mui/material";

interface IProps {
  onClickScroll: () => void;
}

export default function Section1(props: IProps) {
  const { onClickScroll } = props;

  return (
    <Wrapper>
      <ContentsPart>
        <TextPart />

        <ImgBox>
          <img
            src="/images/home-s1/center2.gif"
            alt="main-center"
            style={{ width: "100%", height: "100%" }}
          />
        </ImgBox>
      </ContentsPart>

      <ScrollPart onClickScroll={onClickScroll} />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    contain: "paint",
    maxWidth: "1920px",
    minHeight: "100dvh",
    position: "relative",
    flexDirection: "column",

    background: `url("/images/home-s1/home-bg.png") no-repeat`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
});

const ContentsPart = styled(Box)(() => {
  return {
    flex: 1,
    width: "100%",
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  };
});

const ImgBox = styled(Box)(() => {
  return {
    top: "50%",
    left: "43.5%",
    width: "100%",
    display: "flex",
    maxWidth: "1027px",
    minHeight: "1000px",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateY(-50%)",
  };
});
