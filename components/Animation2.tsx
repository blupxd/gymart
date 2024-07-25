"use client";
import { FC, ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedComponentProps {
  children: ReactNode;
}

const Animation2: FC<AnimatedComponentProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="inline-block w-full"
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Animation2;
