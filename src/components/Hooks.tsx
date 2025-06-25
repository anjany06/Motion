import { Rocket } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useRef, useState } from "react";

const Hooks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgrounds = ["#343434", "#00193b", "#05291c"];
  const [background, setBackground] = useState(backgrounds[0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // jab element ka start viewport k start me toh tracking krna start and jab element ka end viewport k end me toh tracking krna stop
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //0.44 -- 0.44 * 3 = 1.32 --> 1
    //0.8 -- 0,8 * 3 = 2.4 --> 2
    setBackground(backgrounds[Math.floor(latest * backgrounds.length)]);
  });
  return (
    <motion.div
      ref={containerRef}
      animate={{
        background,
      }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-neutral-900 flex items-center justify-center"
    >
      <div className="flex flex-col max-w-4xl mx-auto py-40">
        {features.map((feature) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ feature }: { feature: Feature }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // jab element ka start viewport k end me toh tracking krna start and jab element ka end viewport k start me toh tracking krna stop
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  );
  //useTransform hm kyu use krte hain? jab bhi scrollYprogrss 0 se 1 hogi toh hme some values like yha pe -200 to 200 leke jani hai
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  //useMotionValueEvent hm events ko track krne ke liye use krte hain
  //->values dekh skte h latest

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll Progress:", latest);
  });
  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-2 gap-20 items-center py-40"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale: scale,
        }}
        className="flex flex-col gap-4"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-neutral-400 text-lg">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

export default Hooks;

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <Rocket className="w-6 h-6 text-cyan-500" />,
    title: "Generate ultra realistic  images in seconds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: (
      <div>
        <img
          src="/pic.jpg"
          alt=""
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Rocket className="w-6 h-6 text-cyan-500" />,
    title: "Generate ultra realistic  images in seconds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: (
      <div>
        <img
          src="/pic.jpg"
          alt=""
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Rocket className="w-6 h-6 text-cyan-500" />,
    title: "Generate ultra realistic  images in seconds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: (
      <div>
        <img
          src="/pic.jpg"
          alt=""
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Rocket className="w-6 h-6 text-cyan-500" />,
    title: "Generate ultra realistic  images in seconds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: (
      <div>
        <img
          src="/pic.jpg"
          alt=""
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
];
