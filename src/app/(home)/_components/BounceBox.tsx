import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  text: ReactNode;
}

export const BounceBox = (props: IProps) => {
  const { text } = props;

  return (
    <motion.span
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 1.8,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      {text}
    </motion.span>
  );
};
