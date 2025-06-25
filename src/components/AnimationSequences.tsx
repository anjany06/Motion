import React from "react";
import { motion, useAnimate } from "motion/react";

const AnimationSequences = () => {
  const [scope, animate] = useAnimate();

  const startAnimating = async () => {
    const sequence: any[] = [
      // Step 1: Shrink button to accommodate loader
      [
        "button",
        {
          width: "18rem", // Wider to fit loader + text
          borderRadius: "1000px",
        },
        {
          duration: 0.3,
        },
      ],
      // Step 2: Show loader next to text
      [
        ".loader",
        {
          opacity: 1,
          scale: 1,
        },
        {
          duration: 0.2,
        },
      ],
      // Step 3: Rotate loader
      [
        ".loader",
        {
          rotate: 360,
        },
        {
          duration: 1.5,
          ease: "linear",
          repeat: 2,
        },
      ],
      // Step 4: Hide loader and text
      [
        ".loader",
        {
          opacity: 0,
          scale: 0,
        },
        {
          duration: 0.2,
        },
      ],
      [
        ".text",
        {
          opacity: 0,
        },
        {
          duration: 0.2,
        },
      ],
      // Step 5: Change button to success state
      [
        "button",
        {
          backgroundColor: "rgb(34, 197, 94)", // green-500
          scale: [1, 1.2, 0.8, 1],
          width: "5rem", // Shrink to just fit checkmark
        },
        {
          duration: 0.8,
        },
      ],
      // Step 6: Show checkmark
      [
        ".check-icon",
        {
          opacity: 1,
          scale: [0, 1.2, 1],
        },
        {
          duration: 0.3,
          at: "-1",
        },
      ],
      // Step 7: Animate checkmark path
      [
        ".check-icon path",
        {
          pathLength: 1,
        },
        {
          duration: 0.5,
        },
      ],
    ];

    await animate(sequence as any);
  };

  return (
    <div
      ref={scope}
      className="relative w-80 h-20 flex items-center justify-center"
    >
      <motion.button
        onClick={startAnimating}
        style={{
          width: "16rem",
        }}
        className="h-16 rounded-lg bg-purple-500 text-white font-medium cursor-pointer relative flex items-center justify-center gap-3"
      >
        <span className="text">Purchase Now ($26)</span>

        {/* Loader next to text */}
        <motion.div
          className="loader h-4 w-4 border-2 border-white border-t-transparent rounded-full"
          style={{
            opacity: 0,
            scale: 0,
          }}
        />
      </motion.button>

      {/* Success Checkmark */}
      <motion.svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="#FFFFFF"
        strokeWidth={3}
        className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
        style={{
          opacity: 0,
        }}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </motion.svg>
    </div>
  );
};

export default AnimationSequences;
