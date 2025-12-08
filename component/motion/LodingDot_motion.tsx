"use client";

import { motion, Variants } from "motion/react";

export default function LodingDot_motion() {
  return (
    <div className="flex justify-center items-center gap-10">
      <JumpDot />
      <PulseDot />
    </div>
  );
}

interface AnimationProps {
  variants: Variants;
}

function Dot({ variants }: AnimationProps) {
  return (
    <motion.div
      className="w-3 h-3 rounded-full bg-pink-500 will-change-transform"
      variants={variants}
    />
  );
}

function JumpDot() {
  const jumpVariants: Variants = {
    jump: {
      y: -10,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      animate="jump"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="flex justify-center items-center gap-2"
    >
      <Dot variants={jumpVariants} />
      <Dot variants={jumpVariants} />
      <Dot variants={jumpVariants} />
    </motion.div>
  );
}

function PulseDot() {
  const pluseVariants: Variants = {
    pulse: {
      scale: [1, 1.3, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="flex justify-center items-center gap-3"
      animate="pulse"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
    >
      <Dot variants={pluseVariants} />
      <Dot variants={pluseVariants} />
      <Dot variants={pluseVariants} />
    </motion.div>
  );
}
