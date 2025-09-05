"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface LoaderProps {
  onFinish?: () => void;
  topColor?: string;
  bottomColor?: string;
  barColor?: string;
}

export default function Loader({
  onFinish,
  topColor = "bg-blue-600",
  bottomColor = "bg-blue-900",
  barColor = "bg-white",
}: LoaderProps) {
  const [progress, setProgress] = useState<number>(0);
  const [completed, setCompleted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();

  // To simulate natural human progress, use a ref to track the increments
  const incrementRef = useRef(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setCompleted(true);
          return 100;
        }
        // Add randomness to how much progress increments each time (between 2 and 5)
        const randomIncrement = Math.min(
          5,
          Math.max(2, incrementRef.current + (Math.random() * 2 - 1))
        );
        incrementRef.current = randomIncrement;
        return Math.min(100, p + randomIncrement);
      });
    }, 50); // slightly slower intervals for natural feel

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (completed) {
      setFadeOut(true);

      const doorTimeout = setTimeout(() => {
        controls.start("open");

        const finishTimeout = setTimeout(() => {
          setVisible(false);
          onFinish?.();
        }, 1200); // doors finish
        return () => clearTimeout(finishTimeout);
      }, 700); // wait for fade out

      return () => clearTimeout(doorTimeout);
    }
  }, [completed, controls, onFinish]);

  const doorVariants: Variants = {
    closed: () => ({ y: 0 }),
    open: (side: "top" | "bottom") => ({
      y: side === "top" ? "-100%" : "100%",
      transition: { duration: 1.3, ease: [0.68, -0.55, 0.265, 1.55] }, // easeOutBack for nice door open bounce
    }),
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white text-white z-50 overflow-hidden">
      {/* Progress text */}
      <motion.div
        className="z-20 text-3xl mb-6"
        animate={{
          opacity: fadeOut ? 0 : 1,
          scale: fadeOut ? 0.85 : 1,
          rotate: fadeOut ? [0, 2, -2, 0] : 0, // subtle wiggle on fade
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {Math.min(100, Math.floor(progress))}%
      </motion.div>

      {/* Progress bar */}
      {/* Progress bar */}
      <motion.div
        className="relative w-full h-1 rounded-full overflow-hidden z-20"
        animate={{
          opacity: fadeOut ? 0 : 1,
          scaleX: fadeOut ? 0.9 : 1,
          borderRadius: fadeOut ? "50%" : "0.5rem",
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <motion.div
          className={`h-full ${barColor} rounded-full shadow-lg`}
          initial={{ width: "0%" }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </motion.div>

      {/* Top door */}
      <motion.div
        custom="top"
        initial="closed"
        animate={controls}
        variants={doorVariants}
        className={`absolute top-0 left-0 w-full h-1/2 ${topColor}`}
      />

      {/* Bottom door */}
      <motion.div
        custom="bottom"
        initial="closed"
        animate={controls}
        variants={doorVariants}
        className={`absolute bottom-0 left-0 w-full h-1/2 ${bottomColor}`}
      />
    </div>
  );
}
