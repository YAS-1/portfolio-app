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
    title: "Frameworks & Libraries & Technical Skills",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Socket.io",
      "TensorFlow",
      "Keras",
      "API Integration",
      "API Testing",
      "Version Control",
      "Data Visualization", 
      "Data Analysis",
    ],
  },
  {
    title: "Tools & Software",
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Drupal 11",
      "Wix",
      "Jupyter",
      "Power BI",
      "Figma",
      "Postman",
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
