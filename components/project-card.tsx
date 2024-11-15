import * as motion from "framer-motion/client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { SkillTab } from "./skills-tab";

import { HiLink } from "react-icons/hi";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  githubLink: string;
  image: string;
  liveLink?: string;
}

export const ProjectCard = ({
  title,
  description,
  skills,
  githubLink,
  image,
  liveLink,
}: ProjectCardProps) => {
  return (
    <section className="relative rounded-lg bg-[#3f566a] hover:bg-[#34495b] md:w-[650px] md:h-80">
      <div
        className={cn(
          "bg-white p-1 rounded-md absolute -top-5 right-7 z-10",
          !liveLink && "-right-5"
        )}
      >
        <motion.div whileHover={{ rotate: 45 }}>
          <Link href={githubLink} target="_blank">
            <Image src={"/github.svg"} alt="" width={30} height={30} />
          </Link>
        </motion.div>
      </div>

      {liveLink && (
        <div className="p-1 rounded-md absolute -top-5 -right-5 z-10 bg-white text-black">
          <motion.div whileHover={{ rotate: 45 }}>
            <Link href={liveLink} target="_blank">
              <HiLink size={30} />
            </Link>
          </motion.div>
        </div>
      )}

      <div className="relative overflow-hidden h-full rounded-lg">
        <div className="md:absolute md:top-7 md:-right-72">
          <Image
            className="rounded-lg"
            alt="website image"
            src={image}
            width={550}
            height={550}
          />
        </div>

        <div className="md:w-[60%] p-4 md:p-8">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="pr-4">{description}</p>
          <div className="flex flex-wrap gap-2 pt-5">
            {skills.map((skill: string, index: number) => (
              <SkillTab key={index} title={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
