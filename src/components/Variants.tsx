import {
  ChartBar,
  ChevronLeft,
  ChevronRight,
  HomeIcon,
  Settings,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";

const Variants = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: <ChartBar />,
    },
    {
      name: "users",
      href: "/users",
      icon: <User />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings />,
    },
  ];

  // const sidebarVariant = {
  //   open: {
  //     width: "16rem",
  //   },
  //   closed: {
  //     width: "4.5rem",
  //   },
  // };

  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.07, //kitni der se animation chalegi
        delayChildren: 0.2, //kitni der baad animation chalegi (ek k baad dusra ane me kitna time)
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const childVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      transition={{ duration: 0.3 }}
      className="border-r border-neutral-100 h-full"
    >
      <motion.nav
        // variants={sidebarVariant}
        className={`bg-white shadow-md h-full`}
      >
        <div className="p-4 gap-3 flex justify-between items-center">
          <h2 className={`text-xl font-semibold ${!isOpen && "sr-only"}`}>
            Dashboard
          </h2>

          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <div className="relative">
          {/* SideBar Content */}
          <nav className="p-4">
            <motion.ul variants={parentVariants} className="space-y-2">
              {links.map((link) => (
                <motion.li variants={childVariants} key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {link.icon}
                    {isOpen && link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Variants;

//Animation Orchestration
//->bahut sare animations ko ek sath control karne ke liye
//-> yeh hm variants ki madad se karte hain
