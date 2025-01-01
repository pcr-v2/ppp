"use client";

import Header from "@/app/_components/Header";
import { RootToaster } from "@/app/_components/RootToaster";
import theme from "@/theme";
import { Box, styled, ThemeProvider } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

export type RootClientLayoutProps = {
  children?: ReactNode;
};

export default function ClientLayout({ children }: RootClientLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHover, setIsHover] = useState({ hover: false, name: "" });

  const handleHover = (type: "In" | "Out", value: string) => {
    if (type === "In") {
      setIsHover({ hover: true, name: value });
      return;
    }
    if (type === "Out") {
      setIsHover({ hover: false, name: "" });
      return;
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ChildrenWrapper>
        <HeaderFixedBox
          isscroll={isScrolled.toString()}
          ishover={String(isHover.hover)}
          onMouseEnter={() => handleHover("In", "Info")}
          onMouseLeave={() => handleHover("Out", "")}
        >
          <Header />
        </HeaderFixedBox>
        {children}
      </ChildrenWrapper>
      <RootToaster max={3} />
    </ThemeProvider>
  );
}

const ChildrenWrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const HeaderFixedBox = styled(Box)<{ ishover: string; isscroll: string }>(({
  ishover,
  isscroll,
}) => {
  return {
    top: 0,
    zIndex: 1000,
    width: "100%",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      isscroll === "true" || ishover === "true" ? "#fff" : "transparent",
    boxShadow:
      ishover === "true" || isscroll === "true"
        ? "0px 3px 6px 1px rgba(90, 97, 105, 0.12)"
        : "",
  };
});
