import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Globe,
  GitBranch,
  Monitor,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project/ChineseLearn.png";
import PROJECT_IMG_2 from "../assets/images/project/FPTCareer.png";
import PROJECT_IMG_3 from "../assets/images/project/greenZone.png";
import PROJECT_IMG_4 from "../assets/images/project/WanderVN.png";
import PROJECT_IMG_5 from "../assets/images/project/CatMusic.png";
import PROJECT_IMG_6 from "../assets/images/project/tpets.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    description: "Crafting beautiful, responsive user interfaces",
    icon: Monitor,
    skills: [
      {
        name: "React JS",
        level: 85,
        color: "bg-blue-500",
      },
      {
        name: "TypeScript",
        level: 75,
        color: "bg-blue-600",
      },
      {
        name: "Tailwind CSS",
        level: 80,
        color: "bg-teal-500",
      },
      {
        name: "HTML5 & CSS3",
        level: 95,
        color: "bg-orange-500",
      },
      {
        name: "JavaScript",
        level: 85,
        color: "bg-yellow-500",
      },
      {
        name: "Vite",
        level: 70,
        color: "bg-purple-500",
      },
    ],
  },
  {
    title: "Mobile",
    description: "Building cross-platform mobile applications",
    icon: Smartphone,
    skills: [
      {
        name: "React Native",
        level: 80,
        color: "bg-blue-500",
      },
      {
        name: "Expo",
        level: 65,
        color: "bg-orange-500",
      },
      {
        name: "Redux",
        level: 70,
        color: "bg-purple-600",
      },
      {
        name: "Firebase",
        level: 75,
        color: "bg-yellow-600",
      },
    ],
  },
  {
    title: "Backend",
    description: "Building robust server-side applications",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        level: 70,
        color: "bg-green-600",
      },
      {
        name: "Express.js",
        level: 80,
        color: "bg-orange-500",
      },
    ],
  },
  {
    title: "Database",
    description: "Managing and optimizing data storage",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL",
        level: 65,
        color: "bg-blue-700",
      },
      {
        name: "MySQL",
        level: 80,
        color: "bg-blue-600",
      },
      {
        name: "MongoDB",
        level: 70,
        color: "bg-green-700",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Deploying and scaling applications",
    icon: Cloud,
    skills: [
      {
        name: "Git & GitHub",
        level: 85,
        color: "bg-orange-500",
      },
      {
        name: "CI/CD",
        level: 70,
        color: "bg-green-600",
      },
      {
        name: "Figma",
        level: 80,
        color: "bg-pink-500",
      },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "NestJS",
  "Java",
  "Python",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Git",
  "Vite",
  "Figma",
  "Saga",
  "Redux"
];

export const STATS = [
  {
    number: "8+",
    label: "Projects Completed",
  },
  {
    number: "6+",
    label: "Months Experience",
  },
  {
    number: "5+",
    label: "Technologies",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Learning Chinese System",
    description:
      "A comprehensive Chinese learning mobile application featuring diverse learning methods including instructional videos, interactive documents, and practical exercises. The app includes an automated assessment system with detailed progress reports, gamification features, and smart reminders to ensure engaging and sustainable learning experiences.",
    image: PROJECT_IMG_1,
    tag: [
      "React Native",
      "Redux",
      "Firebase",
      "Cloud Messaging",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    githubPrivate: true,
    liveDemo: false,
    category: "Mobile",
  },
  {
    id: 2,
    title: "FPT Polytechnic Career Portal",
    description:
      "A professional career portal website for FPT Polytechnic students and employers. Features include job listings, student profiles, company showcases, and application management system. Built with modern web technologies to provide seamless user experience for both job seekers and recruiters.",
    image: PROJECT_IMG_2,
    tag: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Express.js",
    ],
    liveUrl: "https://tuyendung.qhdnpolyhcm.com/",
    githubUrl: "#",
    featured: true,
    githubPrivate: true,
    category: "Frontend",
  },
  {
    id: 3,
    title: "GreenZone Drinks Ordering System",
    description:
      "A comprehensive drinks ordering system developed as a graduation project. Features real-time order management, inventory tracking, payment integration, and customer management. Includes both mobile app for customers and web dashboard for administrators.",
    image: PROJECT_IMG_3,
    tag: [
      "React Native",
      "Redux",
      "Firebase",
      "Cloud Messaging",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
    ],
    liveUrl: "https://www.youtube.com/watch?v=bOus8FZFTdg",
    githubUrl: "https://github.com/GreenZone-FPL",
    featured: true,
    githubPrivate: false,
    category: "Fullstack",
  },
  {
    id: 4,
    title: "Wander Vietnam (Viet Adventure)",
    description:
      "A travel and adventure mobile application showcasing Vietnam's beautiful destinations. Features include destination guides, travel planning tools, booking integration, and social sharing capabilities. Designed to promote Vietnamese tourism and help travelers explore the country.",
    image: PROJECT_IMG_4,
    tag: [
      "React Native",
      "Redux",
      "Firebase",
      "Google Maps API",
      "Payment Gateway",
      "Social Integration",
    ],
    liveUrl: "https://www.youtube.com/watch?v=muk3qt0eQmM",
    githubUrl: "#",
    featured: false,
    githubPrivate: true,
    category: "Mobile",
  },
  {
    id: 5,
    title: "CatMusic - Music Streaming Platform",
    description:
      "A modern music streaming platform with features like playlist creation, music discovery, offline listening, and social sharing. Built with a focus on user experience and audio quality, supporting various music formats and streaming qualities.",
    image: PROJECT_IMG_5,
    tag: [
      "React",
      "Node.js",
      "MongoDB",
      "Audio Streaming",
      "Payment Integration",
      "Social Features",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Tanniiee/DuAn1",
    featured: false,
    githubPrivate: false,
    liveDemo: false,
    category: "Fullstack",
  },
  {
    id: 6,
    title: "T-Pets - Pet E-commerce Platform",
    description:
      "A complete e-commerce solution for pet sales featuring product catalog, shopping cart, secure payment processing, order management, and customer support. Includes both customer-facing website and admin dashboard for inventory and order management.",
    image: PROJECT_IMG_6,
    tag: [
      "React",
      "JavaScript",
      "CSS3",
      "Local Storage",
      "Payment Gateway",
      "Admin Dashboard",
    ],
    liveUrl: "https://tanniiee.github.io/ASM_JS_FINAL",
    githubUrl: "https://github.com/Tanniiee/ASM_JS_FINAL",
    featured: false,
    githubPrivate: false,
    category: "Frontend",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "02/2025 - Present",
    title: "Frontend Developer Intern",
    company: "FPT Polytechnic College, Ho Chi Minh City",
    description:
      "Working on modern web applications using React, TypeScript, and Tailwind CSS. Contributing to real-world projects and gaining hands-on experience in professional software development.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2023 - 2025",
    title: "Mobile Application Development",
    company: "FPT Polytechnic",
    description:
      "Specialized in mobile app development with React Native, learning full-stack development including backend technologies, databases, and deployment strategies.",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    year: "2017 - 2021",
    title: "Bachelor of Business Administration",
    company: "Saigon International University (SIU)",
    description:
      "Developed strong analytical and problem-solving skills, project management capabilities, and business acumen that complement technical development skills.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description:
      "Crafting intuitive interfaces that users love and enjoy using",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant, efficient solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Always exploring new technologies and best practices in development",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Building cutting-edge applications that push boundaries",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/Tanniiee",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com/in/thao-dang-dev",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-600",
  },
  {
    name: "Facebook",
    icon: FiFacebook,
    url: "https://facebook.com/profile",
    color: "hover:text-blue-500",
    bgColor: "hover:bg-blue-700",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    url: "https://instagram.com/profile",
    color: "hover:text-pink-400",
    bgColor: "hover:bg-pink-600",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "District 12, Ho Chi Minh City, Vietnam",
  },
  {
    icon: Mail,
    label: "Email",
    value: "dangthao11099@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84 925 103 825",
  },
];

export const ACHIEVEMENTS = [
  {
    icon: Award,
    title: "Outstanding Student Project",
    description: "GreenZone Drinks Ordering System - Graduation Project",
    year: "2024",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Successfully completed multiple full-stack projects",
    year: "2023-2024",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description: "Rapidly adapted to new technologies and frameworks",
    year: "2023-Present",
  },
];

export const SERVICES = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications using modern technologies",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps with React Native",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side applications and APIs",
  },
  {
    icon: Cloud,
    title: "DevOps & Deployment",
    description: "Application deployment and cloud infrastructure setup",
  },
];
