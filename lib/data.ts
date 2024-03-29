import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Innsight from "@/public/InnSight.png";
import SMember from "@/public/SgroupMember.jpg";
import SmartCradle from "@/public/smart_cardle.png";
import Flashcard from "@/public/Flashcard.png";

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
    title: "S-Group",
    location: "Da Nang, Viet Nam",
    description:
      "I learn about NodeJs, ExpressJs for backend and HTML, CSS and Javascript for frontend.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2022 - 06/2023",
  },
  {
    title: "DUT Scholarship",
    location: "Da Nang, Viet Nam",
    description:
      "Scholarship for students with excellent academic achievements. I have been awarded the scholarship in the academic year 2022-2023.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "TOPloop VietNam",
    location: "Da Nang, Viet Nam",
    description:
      "Web Developer Intern, I worked as a full-stack developer for 6 months. My stack includes React, TypeScript, Tailwind, Laravel and PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "08/2023-03/2024",
  },
  {
    title: "EVN Scholarship",
    location: "Da Nang, Viet Nam",
    description:
      "Scholarship for students with excellent academic achievements. I have been awarded the scholarship in the academic year 2023-2024.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2024",
  },
  {
    title: "Da Nang University of Science and Technology",
    location: "Da Nang, Viet Nam",
    description:
      "I am studying Computer Science at Da Nang University of Science and Technology. I have learned about algorithms, data structures, and programming languages such as  Java, Python, and C#. I have also learned about web development IoT, and AI.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Learn English by Flashcard",
    description:
      `This project is a web application that helps users learn English vocabulary, pronounciation and seft-testing.`,
    tags: ["Express", "React", "PostgreSQL", "Tailwind", "OAuth2"],
    imageUrl: Flashcard,
    github: "https://github.com/haitrieu123580/flashcard.git"
  },
  {
    title: "Innsight",
    description:
      `This booking system creates an online community connecting users and hosts, providing a flexible and convenient room rental experience, while offering efficient management tools for the admin.`,
    tags: ["React", "React Native", "MySQL", "Tailwind", "Spring"],
    imageUrl: Innsight,
    github: "https://github.com/haitrieu123580/InnSight-Client.git"
  },
  {
    title: "Smart Cradle",
    description:
      `Building a system for recognizing baby crying sound using AI combined with 
      an IoT system, with a mobile app to display data transmitted from the IoT 
      system`,
    tags: ["Python", "Firebase", "Tensorflow", "Java"],
    imageUrl: SmartCradle,
    github: "https://github.com/haitrieu123580/PBL5_BabyCryingDetection_raspberry.git",
  },
  {
    title: "S-Member",
    description:
      `This project involves building a web server to manage user accounts. It 
      includes basic user management features, user permissions, and voting 
      functionality.`,
    tags: ["NodeJs", "ExpressJs", "React", "MySQL", "Sequelize"],
    imageUrl: SMember,
    github: "https://github.com/haitrieu123580/S_Group_BE.git"
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
  "Tailwind",
  "Express",
  "Laravel",
  "PostgreSQL",
  "MongoDB",
  "Git",
  // "Python",
  // "Django",
] as const;
