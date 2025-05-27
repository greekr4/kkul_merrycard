"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  isVisible?: boolean;
  backgroundColor?: string;
}

export default function AnimatedSection({
  children,
  delay = 0.2,
  duration = 0.7,
  distance = 40,
  isVisible = true,
  backgroundColor = "rgb(237,236,231)",
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: +distance }}
      transition={{ duration, delay }}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      {children}
    </motion.div>
  );
}
