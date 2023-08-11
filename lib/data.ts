import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LiaSkiingSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import portfolioImg from "@/public/sample.jpg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Computer Science",
    location: "Montreal, QC",
    description:
      "I finished my Bachelor of Computer Science, Software System Option from Concordia University.",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2017",
  },
  {
    title: "Co-founder",
    location: "Montreal, QC",
    description:
      "I started my company engaged in Import and Export Trade.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Level 3 Ski Instructor",
    location: "Tremblant, QC",
    description:
      "Every winter, I worked at Mont-Treamblant as a ski instructor.",
    icon: React.createElement(LiaSkiingSolid),
    date: "Seasonal",
  },
  {
    title: "Bachelor of Engineering, Computer Engineering (Co-op)",
    location: "Montreal, QC",
    description:
      "I went back to university to learn some new things since 2022.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "I worked as a full-stack developer on this portfolio website.",
    tags: ["React", "Next.js","Tailwind"],
    imageUrl: portfolioImg,
  },
  
] as const;

export const skillsData = [
  "VHDL",
  "C",
  "C#",
  "C++",
  "Java",
  "OpenGL",
  "OpenCL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;