import type { Variants } from "framer-motion";


export const slide: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1], // easeOut cubic bezier
    },
  },
};