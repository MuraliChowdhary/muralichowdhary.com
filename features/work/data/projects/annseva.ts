import type { WorkProject } from "../../types/project"

export const annseva: WorkProject = {
  slug: "annseva",
  title: "AnnSeva",
  featured: true,
  status: "shipped",
  oneLiner:
    "Zero-hunger food redistribution platform connecting donors, volunteers, NGOs, and people in need through real-time coordination.",
  role: "Full-Stack Developer",
  company: "Personal Project",
  period: "June 2024 to Oct 2024",
  thumbnail: "/work/annseva.png",

  highlights: [
    "Built a food redistribution platform connecting donors, receivers, volunteers, and NGOs through role-based workflows",
    "Implemented OTP-based authentication and secure onboarding for multiple user types",
    "Streamlined volunteer coordination and donation matching to reduce food wastage and delivery delays",
    "Created a social impact platform focused on hunger reduction and accessible food distribution",
  ],

  features: [
    {
      title: "Food Donation & Redistribution",
      description:
        "Enabled individuals, restaurants, NGOs, and communities to donate surplus food while connecting it with receivers in need through structured workflows.",
    },
    {
      title: "Role-Based Access & Authentication",
      description:
        "Implemented OTP authentication and personalized dashboards for donors, volunteers, NGOs, and receivers with secure role-based access.",
    },
    {
      title: "Volunteer Coordination",
      description:
        "Built volunteer assignment and delivery workflows for efficient food pickup and distribution with transparent coordination.",
    },
    {
      title: "Food Request Matching",
      description:
        "Developed matching logic to connect available food donations with requests from nearby communities and NGOs, reducing food wastage and improving accessibility.",
    },
    {
      title: "Community-Driven Social Impact",
      description:
        "Designed the platform around the mission of reducing hunger and food waste by enabling communities to collaborate for food accessibility.",
    },
  ],

  liveUrl: "https://annseva-si6t.onrender.com/",
  githubUrl: "https://github.com/MuraliChowdhary/annseva",

  problem:
    "Large amounts of edible food are wasted daily while many people struggle to access meals. Existing donation systems are fragmented, making it difficult for donors, volunteers, NGOs, and receivers to coordinate food redistribution efficiently.",

  whatIBuilt:
    "Built a MERN-based food redistribution platform focused on the vision of zero hunger by connecting donors, volunteers, NGOs, and receivers in one system. Implemented OTP authentication, role-based workflows, volunteer coordination, and food request matching to streamline food distribution while minimizing waste and improving accessibility.",

  stats: [
    { label: "Core Mission", value: "Zero Hunger" },
    { label: "User Roles", value: "4+" },
    { label: "Authentication", value: "OTP Based" },
    { label: "Platform Type", value: "Social Impact" },
  ],

  tech: [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "JWT",
    "Fast2SMS API",
    "Tailwind CSS",
    "REST APIs",
  ],

  architectureImage: "annseva-architecture.png",
}
