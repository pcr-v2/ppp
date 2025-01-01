"use client";

import Section1 from "@/app/(home)/Section1";
import Section2 from "@/app/(home)/Section2";
import { useRef } from "react";

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
    </>
  );
}
