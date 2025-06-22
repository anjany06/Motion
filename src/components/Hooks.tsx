import { Rocket } from "lucide-react";
import { desc, div, title } from "motion/react-client";
import React from "react";

const Hooks = () => {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {features.map((feature) => (
          <div key={feature.title} className="grid grid-cols-2 gap-20">
            <div>
              {feature.icon}
              <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
              <p className="text-neutral-400 text-lg">{feature.description}</p>
            </div>
            <div>{feature.content}</div>
          </div>
        ))}
      </div>
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
        <img src="" alt="" height="500" width="500" className="rounded-lg" />
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
        <img src="" alt="" height="500" width="500" className="rounded-lg" />
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
        <img src="" alt="" height="500" width="500" className="rounded-lg" />
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
        <img src="" alt="" height="500" width="500" className="rounded-lg" />
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
        <img src="" alt="" height="500" width="500" className="rounded-lg" />
      </div>
    ),
  },
];
