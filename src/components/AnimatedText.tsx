import { stagger } from "motion";
import { useAnimate, motion } from "motion/react";
import React, { useEffect } from "react";

const AnimatedText = () => {
  const [scope, animate] = useAnimate();
  const text =
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 1,
        delay: stagger(0.1),
        ease: "easeInOut",
      }
    );
  };

  return (
    <div
      ref={scope}
      className="text-white max-w-4xl mx-auto font-bold text-4xl"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          key={word + index}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
