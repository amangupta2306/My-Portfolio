"use client";

import * as motion from "framer-motion/client";

import { FaLinkedin } from "react-icons/fa";
import { ArrowDownToLine, MoveRight } from "lucide-react";

import { Button } from "./ui/button";
import Link from "next/link";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";

export const Links = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <section className="flex items-center flex-col md:flex-row gap-2">
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          className="rounded-full text-xl p-7 bg-slate-950"
          onClick={() => scrollToSection("contact")}
          size={"lg"}
        >
          Contact me here
          <MoveRight />
        </Button>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href={
            "https://drive.google.com/file/d/1M1H4BjsVQhRJ1ocBJ33cxqZ-QnSAw1By/view?usp=sharing"
          }
          target="_blank"
        >
          <Button className="rounded-full text-xl p-7 bg-slate-950" size={"lg"}>
            Download CV
            <ArrowDownToLine />
          </Button>
        </Link>
      </motion.div>
      <div className="flex gap-2">
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="bg-slate-950  p-4 rounded-full"
        >
          <Link href={"https://github.com/amangupta2306"} target="_blank">
            <FaSquareGithub size={22} />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="bg-slate-950 p-4 rounded-full"
        >
          <Link
            href={"https://www.linkedin.com/in/aman-gupta23/"}
            target="_blank"
          >
            <FaLinkedin size={22} />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="bg-slate-950 p-4 rounded-full"
        >
          <Link href={"https://x.com/AmanGupta2306"} target="_blank">
            <FaSquareXTwitter size={22} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
