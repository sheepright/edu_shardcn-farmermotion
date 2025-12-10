"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Reorder() {
  const initialOrder = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"];

  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul className="list-none p-0 m-0 relative flex flex-wrap gap-2.5 w-[300px] flex-row justify-center items-center">
      {order.map((backgroundColor) => (
        <motion.li
          key={backgroundColor}
          layout
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
          className="w-[100px] h-[100px] rounded-[10px]"
          style={{ backgroundColor }}
        />
      ))}
    </ul>
  );
}

function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}
