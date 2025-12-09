"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollLinked_motion() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 bottom-0 left-0 right-0 h-2 bg-linear-to-r from-purple-500 to-pink-500 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
