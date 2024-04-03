"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function Pagetransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.main
      className="h-full"
      key={pathname}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 1,
      }}
      variants={{
        initialState: {
          opacity: 0,
        },
        animateState: {
          opacity: 1,
        },
        exitState: {
          opacity: 0,
        },
      }}>
      <div className="h-full">{children}</div>
    </motion.main>
  );
}
