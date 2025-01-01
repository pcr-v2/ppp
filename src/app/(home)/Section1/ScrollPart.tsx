"use client";

import { Box, styled } from "@mui/material";
import DownArrow from "@/public/images/icons/donw-arrow.svg";
import { BounceBox } from "@/app/(home)/_components/BounceBox";

interface IProps {
  onClickScroll: () => void;
}

export default function ScrollPart(props: IProps) {
  const { onClickScroll } = props;

  return (
    <Wrapper>
      <BounceBox
        text={
          <Scroll onClick={onClickScroll}>
            Scroll
            <Arrow src={DownArrow.src} />
          </Scroll>
        }
      />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    bottom: 0,
    width: "100%",
    display: "flex",
    minHeight: "120px",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  };
});

const Scroll = styled(Box)(() => {
  return {
    gap: "11px",
    fontWeight: 700,
    display: "flex",
    cursor: "pointer",
    color: "#232323",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const Arrow = styled("img")(() => {
  return {
    width: "18px",
    height: "9px",
  };
});
