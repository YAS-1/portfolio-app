export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Socket.io",
      "TensorFlow",
      "Keras",
    ],
  },
  {
    title: "Tools & Software",
    items: [
      "MongoDB",
      "MySQL",
      "Docker",
      "Drupal 11",
      "Wix",
      "Jupyter",
      "Google Colab",
      "Tableau",
      "Git/GitHub",
      "OpenCV",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Communication",
      "Presentation",
      "Problem Solving",
      "Teamwork",
      "Time Management",
      "Critical Thinking",
    ],
  },
];
