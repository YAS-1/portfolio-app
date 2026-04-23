export type Project = {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  liveDemo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Friendly - Social Media Platform",
    description:
      "A real-time full-stack social platform with secure authentication, posts, comments, likes, profile management, and instant messaging.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Socket.io"],
    github: "https://github.com/YAS-1/Friendly",
    featured: true,
  },
  {
    name: "NITACB - AI Support & Onboarding Chatbot",
    description:
      "An enterprise chatbot platform built during internship to automate FAQ and ticket support, onboarding, and organization-wide information access.",
    techStack: ["JavaScript", "Python", "React", "Node.js", "Mistral AI"],
    github: "https://github.com/YAS-1/NITACB",
    featured: true,
  },
  {
    name: "Daystar DayCare Management System",
    description:
      "Role-based daycare management app for child registration, scheduling, attendance, incident management, and parent payment reminders.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/YAS-1/Daystar_Daycare",
  },
  {
    name: "EcoClassifier - Smart Waste Sorting",
    description:
      "AI-powered smart bin + analytics system that classifies waste and routes it into correct compartments using Raspberry Pi hardware control.",
    techStack: [
      "TensorFlow Lite",
      "Raspberry Pi GPIO",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/YAS-1/EcoClassifierDefault---Copy",
  },
];
