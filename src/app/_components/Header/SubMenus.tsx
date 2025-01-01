import { MENUS } from "@/config/Menus";
import { Box, Button, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

interface IProps {
  hover: boolean;
  name: string;
}

export default function SubMenus(props: IProps) {
  const { hover, name = "Info" } = props;

  const [hoverChild, setHoverChild] = useState({ hover: false, childName: "" });

  return (
    <Wrapper
      initial={{ height: 0 }}
      animate={{ height: hover ? "auto" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Contents hovername={name}>
        <Box sx={{ display: "flex", width: "100%" }}>
          {MENUS.map((menu) => (
            <SubMenusGroup key={menu.name}>
              {menu?.children &&
                menu?.children.map((child) => {
                  if (menu.name !== name) return;
                  return (
                    <SubMenuItem
                      key={child.name}
                      onClick={() => {}}
                      path={""}
                      onMouseEnter={() =>
                        setHoverChild({ hover: true, childName: child.name })
                      }
                      onMouseLeave={() =>
                        setHoverChild({ hover: false, childName: "" })
                      }
                      initial={{ opacity: 0 }}
                      animate={{ opacity: menu.name === name ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {child.name}

                      <UnderLine
                        initial={{ width: 0 }}
                        animate={{
                          width:
                            child.name === hoverChild.childName ? "105%" : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </SubMenuItem>
                  );
                })}
            </SubMenusGroup>
          ))}
        </Box>
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)(() => {
  return {
    top: 80,
    zIndex: 9999,
    width: "100%",
    display: "flex",
    overflow: "hidden",
    position: "absolute",
    justifyContent: "start",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.12)",
  };
});

const Contents = styled(Box)<{ hovername: string }>(({ hovername, theme }) => {
  return {
    width: "100%",
    display: "flex",
    padding:
      hovername === "Info"
        ? "24px 0px 29px 360px"
        : hovername === "Skills"
          ? "24px 0px 29px 482.52px"
          : "24px 0px 29px 617.06px",

    [theme.breakpoints.down("desktop")]: {
      padding:
        hovername === "Info"
          ? "24px 0px 29px 315px"
          : hovername === "Skills"
            ? "24px 0px 29px 407.52px"
            : "24px 0px 29px 512.06px",
    },
  };
});

const SubMenusGroup = styled(Box)(() => ({
  gap: "12px",
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  justifyContent: "start",
}));

const SubMenuItem = styled(motion.div)<{ path: string }>(({ path }) => ({
  fontWeight: 400,
  fontSize: "14px",
  cursor: "pointer",
  lineHeight: "17px",
  position: "relative",
  color: path === "true" ? "#3196ff" : "#333",
}));

const UnderLine = styled(motion.div)(() => {
  return {
    left: 0,
    bottom: -4,
    height: "1px",
    width: "100%",
    display: "flex",
    position: "absolute",
    backgroundColor: "#212121",
  };
});
