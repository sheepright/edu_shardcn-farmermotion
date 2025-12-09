"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function Number() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <motion.pre className="text-4xl font-semibold text-black">
        {rounded}
      </motion.pre>
    </div>
  );
}
