"use client";

import { motion } from "framer-motion";

export default function Marquee({ items, speed = 28, reverse = false, className = "", separator = "·" }) {
  const track = [...items, ...items];

  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <motion.div
        className="flex shrink-0 items-center"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          // The second half only exists to make the loop seamless; hide it from screen readers.
          <span key={i} aria-hidden={i >= items.length || undefined} className="flex shrink-0 items-center whitespace-nowrap">
            <span className="px-6 lg:px-9">{item}</span>
            <span aria-hidden className="text-sky">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
