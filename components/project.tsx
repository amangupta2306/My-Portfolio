"use client";

import { ProjectCard } from "./project-card";

export const Project = () => {
  const projects = [
    {
      title: "Meet Connect",
      description:
        "Meet Connect is a video conferencing app. It supports instant and scheduled meetings, personal meeting links, and recorded playback.",
      skills: ["next js", "stream", "clerk", "tailwind css"],
      githubLink: "https://github.com/amangupta2306/Meet-Connect",
      image: "/meet-connect.jpg",
      liveLink: "https://meet-connect.vercel.app/",
    },
    {
      title: "Note Docs",
      description:
        "A Notion-inspired app featuring real-time document editing, cover images, emojis, trash recovery, and publishing with shareable URLs for seamless note-taking and organization.",
      skills: ["next js", "convex", "clerk", "TypeScript", "tailwind css"],
      githubLink: "https://github.com/amangupta2306/Note-Docs",
      image: "/note-docs.png",
      liveLink: "https://note-docs.vercel.app/",
    },
    {
      title: "B2B Invoice Management",
      description:
        "A streamlined B2B invoice management platform featuring automated invoice generation, tracking, and payment reminders. Built for efficiency, it simplifies financial workflows.",
      skills: [
        "next js",
        "mongodb",
        "prisma",
        "node js",
        "next auth",
        "tailwind css",
      ],
      githubLink: "https://github.com/amangupta2306/B2B-Invoice-Management",
      image: "/b2b-invoice-management.png",
    },
  ];

  return (
    <section id="projects" className="w-full py-12 px-7">
      <h1 className="text-3xl text-center font-medium pb-10 md:pb-14">
        My projects
      </h1>
      <div className="grid gap-20 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            skills={project.skills}
            githubLink={project.githubLink}
            image={project.image}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
};
