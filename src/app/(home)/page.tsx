"use client";

import { useRef } from "react";

import Section1 from "@/app/(home)/Section1";
import Section2 from "@/app/(home)/Section2";
import Section4 from "@/app/(home)/Section4";
import Section3 from "@/app/(home)/section3";

export default function Home() {
  const section2Ref = useRef<HTMLDivElement>(null);

  const onClickScroll = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Section1 onClickScroll={onClickScroll} />
      <Section2 ref={section2Ref} />
      <Section3 />
      <Section4 />
    </>
  );
}
