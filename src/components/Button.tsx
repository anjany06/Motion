import React from "react";
import { motion } from "motion/react";

const Button = () => {
  return (
    <div
      className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-950 flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(6,182,212,0.4) 0.5px, transparent 0.5px)`,
        backgroundSize: "10px 10px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(6, 182, 212, 0.7)",
          y: -20,
        }}
        whileTap={{
          y: 0,
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="group relative text-neutral-200 bg-black py-4 px-12 rounded-lg shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Hello
        </span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm transition-opacity duration-300"></span>
      </motion.button>
    </div>
  );
};

export default Button;

// what is group and group hover ?
//-> Ager m button  hover kru aur mujhe uske child animate krne hai
//-> button ko group child class class ko group-hover:classname se animate kr sakte hai

// initial={{
//   rotate: 0,
// }}
// animate={{
//   rotate: [0, 60, 0],
// }}
// transition={{
//   duration: 2,
//   ease: "easeInOut",
// }}

// rotate: [0, 60, 0], keyFrames-> like cheeze steps me hongi pehle 0 degree, phir 60 degree, phir vapas 0 degree
