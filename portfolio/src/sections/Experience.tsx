import { SectionHeader } from "@/components/SectionHeader";
import React from "react";

const experience = [
  {
    role: "Software Developer",
    company: "Upwork",
    period: "January 2020 — Present",
    type: "Freelance",
    companyIcon: "fa6-brands:square-upwork",
    companyColor: "from-green-500 to-green-600",
    description:
      "Delivered high-quality projects across diverse domains, including website applications, API development, and cloud integrations (AWS).",
    achievements: [
      "Achieved Top-Rated status with a 91% job success score",
      "Completed 10+ projects focusing on scalable solutions",
      "Consistently praised for skillfulness, quick learning, and strong communication",
      "Earned repeated engagements through reliability and expertise",
    ],
    technologies: [
      "JavaScript",
      "MongoDB",
      "Node.js",
      "AWS",
      "Express",
      "API Integration",
      "Backend",
    ],
  },
];

export const Experience = () => {
  return (
    <div className="container" id="experience">
      <div className="py-20 md:py-17">
        <SectionHeader
          tagIcon="mdi:briefcase-outline"
          tagText="Professional Journey"
          showUnderline={true}
          centered={true}
          eyebrow="Experience"
          title="My Career & Experience"
          description="A journey of continuous learning and impactful contributions — here’s how I’ve applied my skills to deliver real-world results."
        />
      </div>
    </div>
  );
};
