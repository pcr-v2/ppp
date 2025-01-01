"use client";

import { MENUS } from "@/config/Menus";
import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SubMenus from "@/app/_components/Header/SubMenus";
import Logo from "@/public/images/logo/logo.png";

interface IProps {}

export default function Header() {
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

  return (
    <Wrapper
      isscroll={isScrolled.toString()}
      ishover={String(isHover.hover)}
      onMouseEnter={() => handleHover("In", "Info")}
      onMouseLeave={() => handleHover("Out", "")}
    >
      <Contents>
        <LogoImg src={Logo.src} alt="logo" />

        <MenusBox>
          {MENUS.map((menu) => {
            const singleMenuHover = isHover.hover && menu.name === isHover.name;

            return (
              <Menu key={menu.name}>
                <Title
                  onMouseEnter={() => handleHover("In", menu.name)}
                  hovername={(isHover.name === menu.name).toString()}
                >
                  {menu.name}
                </Title>

                <AnimateLine
                  animate={{ width: singleMenuHover ? "55%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ left: "50%" }}
                />
                <AnimateLine
                  animate={{ width: singleMenuHover ? "55%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ right: "50%" }}
                />
              </Menu>
            );
          })}
        </MenusBox>
      </Contents>
      <ContactBtn>Contact</ContactBtn>

      <SubMenus {...isHover} />
    </Wrapper>
  );
}

const Wrapper = styled(Box)<{ ishover: string; isscroll: string }>(({
  ishover,
  isscroll,
}) => {
  return {
    width: "100%",
    height: "80px",
    display: "flex",
    maxWidth: "1920px",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
    transition: "background-color 0.4s ease",
    backgroundColor:
      isscroll === "true" || ishover === "true" ? "#fff" : "transparent",
    boxShadow:
      ishover === "true" || isscroll === "true"
        ? "0px 3px 6px 1px rgba(90, 97, 105, 0.12)"
        : "",
  };
});

const Contents = styled(Box)(({ theme }) => {
  return {
    gap: "100px",
    width: "100%",
    height: "100%",
    display: "flex",
    marginLeft: "90px",
    position: "relative",
    alignItems: "center",
    [theme.breakpoints.down("desktop")]: {
      marginLeft: "45px",
    },
  };
});

const LogoImg = styled("img")(() => {
  return {
    width: "170px",
    height: "16px",
  };
});

const MenusBox = styled(Box)(({ theme }) => {
  return {
    gap: "90px",
    height: "100%",
    display: "flex",
    [theme.breakpoints.down("desktop")]: {
      gap: "60px",
    },
  };
});

const Menu = styled(motion.div)(() => {
  return {
    height: "100%",
    display: "flex",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",
    alignItems: "center",
    position: "relative",
    letterSpacing: "0.2px",
  };
});

const Title = styled(Box)<{ hovername: string }>(({ hovername }) => {
  return {
    cursor: "pointer",
    color: hovername === "true" ? "#06C755" : "#212121",
  };
});

const ContactBtn = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    fontWeight: 500,
    fontSize: "18px",
    cursor: "pointer",
    color: "#06c755",
    lineHeight: "24px",
    borderRadius: "8px",
    textAlign: "center",
    marginRight: "90px",
    padding: "10px 24px",
    border: "1px solid #06c755",
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: "#F6FFF8",
      border: "1px solid #06c755",
    },
    [theme.breakpoints.down("desktop")]: {
      marginRight: "45px",
    },
  };
});

const AnimateLine = styled(motion.div)(() => {
  return {
    bottom: 0,
    height: "3px",
    display: "flex",
    position: "absolute",
    backgroundColor: "#06C755",
  };
});
