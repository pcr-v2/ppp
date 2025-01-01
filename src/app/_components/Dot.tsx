"use client";

import { Box, styled } from "@mui/material";

interface IProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color: string;
}

export default function Dot(props: IProps) {
  return <Wrapper {...props} />;
}

const Wrapper = styled(Box)<IProps>((props) => {
  const { left, right, color, top, bottom } = props;

  return {
    zIndex: 1,
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    position: "absolute",
    backgroundColor: color,
    top: top ? top : undefined,
    left: left ? left : undefined,
    right: right ? right : undefined,
    bottom: bottom ? bottom : undefined,
  };
});
