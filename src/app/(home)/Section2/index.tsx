"use client";

import { Box, styled } from "@mui/material";
import { forwardRef } from "react";

interface IProps {}

const Section2 = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return <Wrapper ref={ref}>222</Wrapper>;
});

export default Section2;

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    minHeight: "calc(100dvh - 80px)",
  };
});
