import { ReactNode } from "react";

export type TMenus = {
  name: string;
  path: string;
  icon?: ReactNode;
  opened?: boolean;
  children?: TMenus[];
};

export const MENUS: TMenus[] = [
  {
    name: "Info",
    path: "/info",
    children: [
      {
        name: "career",
        path: "/info/career",
      },
      {
        name: "somthing1",
        path: "/resume/something2",
      },
      {
        name: "something2",
        path: "/info/something2",
      },
    ],
  },
  {
    name: "Skills",
    path: "/schedule",
    children: [
      {
        name: "NextJS",
        path: "/skills/nextjs",
      },
      {
        name: "TypeScript",
        path: "/skills/typescript",
      },
      {
        name: "ThreeJs",
        path: "/skills/threejs",
      },
    ],
  },
  {
    name: "Mind",
    path: "/mind",
    children: [
      {
        name: "co-work",
        path: "/mind/co-work",
      },
      {
        name: "developer",
        path: "/mind/developer",
      },
      {
        name: "attitude",
        path: "/mind/attitude",
      },
    ],
  },
];
