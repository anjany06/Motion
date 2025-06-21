import { Cross, MessageCircle, X } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Card = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="w-72 min-h-[27rem] h-[27rem] rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
  p-6 flex flex-col"
          >
            <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              A collection of beautiful UI Components, let's get on with it.
            </p>
            <div className="flex justify-center items-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_2px_30px_rgba(0,0,0,0.20)] rounded-md py-1 px-2"
              >
                Aceternity
                <X className="h-4 w-4 text-neutral-400" />
              </button>
            </div>
            <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
              {/* MOTION DIVS HERE */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 h-full w-full border border-neutral-200 bg-white rounded-lg divide-y divide-neutral-200"
              >
                <div className="flex gap-2 p-2">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_2px_30px_rgba(0,0,0,0.20)] bg-white rounded-md flex items-center justify-center">
                    <MessageCircle
                      onClick={() => setOpen(false)}
                      className="h-4 w-4 text-neutral-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A Collection of UI Components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-2">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_2px_30px_rgba(0,0,0,0.20)] bg-white rounded-md flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A Collection of UI Components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-2">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_2px_30px_rgba(0,0,0,0.20)] bg-white rounded-md flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A Collection of UI Components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-2">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_2px_30px_rgba(0,0,0,0.20)] bg-white rounded-md flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A Collection of UI Components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-2">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_2px_30px_rgba(0,0,0,0.20)] bg-white rounded-md flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A Collection of UI Components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-2">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_2px_30px_rgba(0,0,0,0.20)] bg-white rounded-md flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A Collection of UI Components
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 
        MOTION DIVS ENDS HERE */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;

//inset-0 means top-0 right-0 bottom-0 left-0
//divide-y divide-neutral-200 means it will create a horizontal line between the divs (like the separator)
//exit means when the component is removed from the DOM, it will animate out
//AnimatePresence is used to animate the component when it is removed from the DOM (so, whenever you have exit animation maks sure wrap into the animatePresence component)
//animatePresence ka use jb boolean k basis state switch krte hai
