import { motion } from "motion/react";
import React, { useState } from "react";

const NavbarLayout = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];
  const [hovered, sethovered] = useState<number | null>(null);
  return (
    <div className="py-40">
      <nav className="max-w-xl mx-auto bg-gray-100 rounded-full px-4 py-2 flex">
        {navItems.map((item, idx) => (
          <a
            onMouseEnter={() => sethovered(idx)}
            onMouseLeave={() => sethovered(null)}
            key={item.title}
            href={item.href}
            className="w-full group relative py-3 text-center text-xs text-neutral-500"
          >
            {hovered === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 bg-black rounded-full"
              />
            )}
            <span className="relative group-hover:text-white">
              {item.title}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavbarLayout;
