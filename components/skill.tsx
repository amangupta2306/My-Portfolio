"use client";

import { SkillBrick } from "./skills-tab";
import { motion } from "framer-motion";

export const Skill = () => {
  const skills = [
    "Next Js",
    "React Js",
    "Node js",
    "MongoDB",
    "Prisma",
    "Git",
    "JavaScript",
    "TypeScript",
    "Github",
    "Convex",
    "Next Auth",
    "Clerk",
    "Tailwind Css",
  ];

  const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section id="skills" className="space-y-5 px-2 py-10">
      <h2 className="text-3xl text-center font-medium pb-6">My Skills</h2>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={container}
        className="flex flex-wrap gap-2 justify-center items-center max-w-[650px]"
      >
        {skills.map((skill, index) => (
          <motion.li key={index} variants={item}>
            <SkillBrick title={skill} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
