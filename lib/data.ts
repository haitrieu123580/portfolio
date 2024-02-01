import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Innsight from "@/public/InnSight.png";
import SMember from "@/public/SgroupMember.jpg";
import SmartCradle from "@/public/SgroupMember.jpg";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Innsight",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "S-Member",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Smart Cradle",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Innsight",
    description:
      `This booking system creates an online community connecting users and hosts, providing a flexible and convenient room rental experience, while offering efficient management tools for the admin.`,
    tags: ["React", "React Native", "MySQL", "Tailwind", "Spring","Firebase"],
    imageUrl: Innsight,
    github:"https://github.com/haitrieu123580/InnSight-Client.git"
  },
  {
    title: "Smart Cradle",
    description:
      `Building a system for recognizing baby crying sound using AI combined with 
      an IoT system, with a mobile app to display data transmitted from the IoT 
      system`,
    tags: ["Python", "Firebase", "Tensorflow", "Java"],
    imageUrl: SmartCradle,
    github:"https://github.com/haitrieu123580/PBL5_BabyCryingDetection_raspberry.git",
    },
  {
    title: "S-Member",
    description:
      `This project involves building a web server to manage user accounts. It 
      includes basic user management features, user permissions, and voting 
      functionality.`,
    tags: ["NodeJs", "ExpressJs", "React", "MySQL", "Sequelize"],
    imageUrl: SMember,
    github:"https://github.com/haitrieu123580/S_Group_BE.git"
  },
] as const;

export const skillsData = [
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
  "PostgreSQL",
  "Python",
  "Django",
] as const;
