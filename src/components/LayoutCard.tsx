import { div } from "motion/react-client";
import React, { useEffect, useRef, useState } from "react";

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);
  return ref;
};

const LayoutCard = () => {
  const [current, setCurrent] = useState<Card | null>(null);

  const ref = useOutsideClick(() => setCurrent(null));
  return (
    <div className="min-h-screen p-10 bg-gray-100 relative">
      {current && (
        <div className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm"></div>
      )}

      {current && (
        <div
          ref={ref}
          className="h-[600px] inset-0 z-20 bg-white m-auto fixed w-72 rounded-2xl border border-neutral-200 p-4"
        >
          <img
            src={current.src}
            alt={current.title}
            className="w-full aspect-square rounded-xl"
          />

          <div className="flex flex-col justify-between items-center">
            <div className="flex items-start justify-between w-full py-4 gap-2">
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-bold text-sm tracking-tight text-black">
                  {current.title}
                </h2>
                <p className="text-[10px] text-neutral-500">
                  {current.description}
                </p>
              </div>
              <a
                href={current.ctaLink}
                className="px-3 py-2 bg-green-500 rounded-full text-white text-xs"
              >
                {current.ctaText}
              </a>
            </div>

            <div className="h-60 overflow-auto">{current.content()}</div>
          </div>
        </div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card, index) => (
          <button
            key={card.title}
            onClick={() => setCurrent(card)}
            className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200"
          >
            <div className="flex gap-4 items-center">
              <img
                src={card.src}
                alt={card.title}
                className="h-15 aspect-square rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-bold text-sm tracking-tight text-black">
                  {card.title}
                </h2>
                <p className="text-[10px] text-neutral-500">
                  {card.description}
                </p>
              </div>
            </div>
            <div className="px-3 py-2 bg-green-500 rounded-full text-white text-xs">
              {card.ctaText}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};
const cards = [
  {
    description: "Modern web design",
    title: "Creative Portfolio",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    ctaText: "play",
    ctaLink: "https://example.com/portfolio",
    content: () => (
      <p className="text-[10px] text-neutral-400">
        Discover the art of modern web design with our creative portfolio
        showcase. From minimalist layouts to bold typography, we craft digital
        experiences that captivate. Our team combines innovative thinking with
        technical expertise to deliver stunning results. Every project tells a
        unique story through carefully curated visual elements. Transform your
        brand's digital presence with our cutting-edge design solutions. Let
        creativity meet functionality in perfect harmony.
      </p>
    ),
  },
  {
    description: "Advanced AI technology",
    title: "Smart Analytics",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    ctaText: "play",
    ctaLink: "https://example.com/analytics",
    content: () => (
      <p className="text-[10px] text-neutral-400">
        Harness the power of artificial intelligence to unlock valuable business
        insights. Our smart analytics platform processes vast amounts of data in
        real-time. Machine learning algorithms identify patterns and trends that
        humans might miss. Make data-driven decisions with confidence using our
        intuitive dashboard interface. Predictive modeling helps you stay ahead
        of market changes and customer behavior. Experience the future of
        business intelligence with our AI-powered solutions.
      </p>
    ),
  },
  {
    description: "Sustainable energy solutions",
    title: "Green Tech",
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
    ctaText: "play",
    ctaLink: "https://example.com/greentech",
    content: () => (
      <p className="text-[10px] text-neutral-400">
        Join the renewable energy revolution with our innovative green
        technologies. Solar panels and wind turbines work together to create
        sustainable power systems. Our eco-friendly solutions reduce carbon
        footprint while maximizing efficiency. Smart grid integration ensures
        optimal energy distribution and storage. Environmental responsibility
        meets cutting-edge engineering in every project. Build a cleaner future
        for generations to come with our green tech innovations.
      </p>
    ),
  },
  {
    description: "Immersive gaming experience",
    title: "Virtual Reality",
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
    ctaText: "play",
    ctaLink: "https://example.com/vr",
    content: () => (
      <p className="text-[10px] text-neutral-400">
        Step into extraordinary worlds with our immersive virtual reality
        experiences. Advanced VR technology transports users to fantastical
        realms and distant places. Interactive storytelling combines with
        stunning 3D graphics for unforgettable adventures. From educational
        simulations to thrilling games, possibilities are limitless. Our
        platform supports multiple VR headsets for maximum accessibility.
        Redefine entertainment and learning through the magic of virtual
        reality.
      </p>
    ),
  },
  {
    description: "Modern web design",
    title: "Creative Portfolio",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    ctaText: "play",
    ctaLink: "https://example.com/portfolio",
    content: () => (
      <p className="text-[10px] text-neutral-400">
        Discover the art of modern web design with our creative portfolio
        showcase. From minimalist layouts to bold typography, we craft digital
        experiences that captivate. Our team combines innovative thinking with
        technical expertise to deliver stunning results. Every project tells a
        unique story through carefully curated visual elements. Transform your
        brand's digital presence with our cutting-edge design solutions. Let
        creativity meet functionality in perfect harmony.
      </p>
    ),
  },
];
export default LayoutCard;
