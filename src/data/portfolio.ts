export const highlights = [
  "NCII Passer",
  "3+ Development Projects",
  "Game Development Enthusiast",
  "Mobile App Developer",
  "Cybersecurity Awareness Certified",
];

export const skills = {
  programming: [
    { name: "Python", icon: "SiPython" },
    { name: "C#", icon: "FaCode" },
    { name: "TypeScript", icon: "SiTypescript" },
  ],
  tools: [
    { name: "Blender", icon: "SiBlender" },
    { name: "Godot Engine", icon: "SiGodotengine" },
    { name: "Visual Studio Code", icon: "SiVisualstudiocode" },
    { name: "Android Studio", icon: "SiAndroidstudio" },
  ],
  databases: [
    { name: "MySQL", icon: "SiMysql" },
    { name: "Godot SQL", icon: "SiGodotengine" },
  ],
  interests: [
    "Game Development",
    "Mobile Development",
    "UI/UX Design",
    "Software Development",
  ],
};

export const education = [
  {
    period: "2010 ───────── 2017",
    school: "Tenement Elementary School",
    degree: "Elementary Education",
  },
  {
    period: "2017 ───────── 2023",
    school: "Western Bicutan National High School",
    degree: "Junior High School and Senior High School",
  },
  {
    period: "2023 ───────── Present",
    school: "STI College Global City",
    degree: "Bachelor of Science in Information Technology",
    expectedGraduation: "2027",
    areasOfStudy: [
      "Software Development",
      "Mobile Development",
      "Database Systems",
      "Systems Analysis and Design",
      "Game Development Fundamentals",
    ],
  },
];

export const certifications = [
  {
    title: "NC II Passer",
    year: "2023",
    description: "National Certificate II passer demonstrating foundational technical competencies.",
    icon: "ShieldCheck",
  },
  {
    title: "UI/UX Fundamentals",
    year: "Recent",
    description: "Understanding user-centered design and modern interface principles.",
    icon: "PenTool",
  },
  {
    title: "Cybersecurity Awareness",
    year: "Recent",
    description: "Foundational knowledge in digital security and best practices.",
    icon: "Lock",
  },
  {
    title: "IQ Literacy",
    year: "Recent",
    description: "Financial Budgeting and practical intelligence literacy.",
    icon: "BrainCircuit",
  },
];

export const projects = [
  {
    id: "securechat",
    title: "SecureChat",
    category: "Mobile Development",
    shortDescription: "A private social media application focused on secure communication.",
    description: "A private social media application focused on secure communication, user privacy, and modern mobile interaction.",
    image: "/projects/securechat.png",
    technologies: ["Android Studio", "MySQL", "Mobile Development"],
    highlights: ["User Authentication", "Private Messaging", "Social Features", "Secure Communication"],
    challenges: "Implementing end-to-end encryption in a resource-constrained mobile environment without compromising battery life.",
    solutions: "Utilized optimized cryptographic libraries and background service workers to handle encryption asynchronously.",
  },
  {
    id: "questcode",
    title: "QuestCode",
    category: "Game Development",
    shortDescription: "An educational game platform designed to make learning interactive.",
    description: "An educational game platform designed to make learning interactive and engaging through gamification and problem-solving activities.",
    image: "/projects/questcode.png",
    technologies: ["Godot", "C#", "Game Development"],
    highlights: ["Interactive Learning", "Educational Gameplay", "Progress Tracking", "User Engagement"],
    challenges: "Designing intuitive UI for complex programming concepts that younger audiences could understand.",
    solutions: "Implemented a visual node-based quest system that maps directly to coding logic, heavily tested with user feedback.",
  },
  {
    id: "packyao",
    title: "Pac-kyao",
    category: "Game Development",
    shortDescription: "A pixel-art arcade game inspired by classic maze-chasing gameplay.",
    description: "A pixel-art arcade game inspired by classic maze-chasing gameplay mechanics with modern enhancements and unique visual design.",
    image: "/projects/packyao.png",
    technologies: ["Godot", "C#", "Pixel Art Design"],
    highlights: ["Retro Gameplay", "Pixel Graphics", "Score System", "Fun User Experience"],
    challenges: "Creating performant pathfinding AI for enemies that felt challenging but not unfair.",
    solutions: "Adapted A* pathfinding algorithm with varied behaviors (scatter, chase, ambush) for different enemy types.",
  },
];

export const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "4+", label: "Certifications" },
  { value: "2", label: "Development Fields" },
  { value: "100%", label: "Continuous Learning" },
];
