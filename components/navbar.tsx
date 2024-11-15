"use client";

import { cn } from "@/lib/utils";

import { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 10,
  };

  const navItems = [
    { title: "Home", link: "about" },
    { title: "Projects", link: "projects" },
    { title: "Skills", link: "skills" },
    { title: "Contact", link: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section?.scrollIntoView({ behavior: "smooth", block: "center" });
      setActive(sectionId);
    }
  };

  return (
    <nav className="bg-slate-900 bg-transparent/85 flex items-center rounded-full px-4 md:px-20 py-2">
      <div className="flex items-center justify-center md:gap-10">
        {navItems.map((navItem, index) => (
          <div
            key={index}
            className={cn(
              "cursor-pointer text-gray-500 font-semibold hover:text-gray-300 rounded-full px-3 py-1",
              active === navItem.link && "bg-slate-700 text-gray-300 "
            )}
            onClick={() => scrollToSection(navItem.link)}
          >
            <motion.div layout transition={spring}>
              {navItem.title}
            </motion.div>
          </div>
        ))}
      </div>
    </nav>
  );
};
