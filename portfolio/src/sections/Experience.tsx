import { SectionHeader } from "@/components/SectionHeader";
import React from "react";
import { Icon } from "@iconify/react";

const experience = [
  // {
  //   role: "Software Developer",
  //   company: "Upwork",
  //   period: "January 2025 — Present",
  //   type: "Freelance",
  //   companyIcon: "fa6-brands:square-upwork",
  //   companyColor: "from-green-500 to-green-600",
  //   borderLeftColor: "#1BB152",
  //   description:
  //     "Delivered high-quality projects across diverse domains, including website applications, API development, and cloud integrations (AWS).",
  //   achievements: [
  //     "Achieved Top-Rated status with a 91% job success score",
  //     "Completed 10+ projects focusing on scalable solutions",
  //     "Consistently praised for skillfulness, quick learning, and strong communication",
  //     "Earned repeated engagements through reliability and expertise",
  //   ],
  //   technologies: [
  //     "JavaScript",
  //     "MongoDB",
  //     "Node.js",
  //     "AWS",
  //     "Express",
  //     "API Integration",
  //     "Backend",
  //   ],
  //   workImage: "/certificates/supreme-dsa.jpeg",
  // },
  {
    role: "Mern Stack Developer",
    company: "TechCodes",
    period: "February 2025 — July 2025",
    type: "Remote",
    companyIcon: "mdi:code-tags",
    companyColor: "from-yellow-500 to-yellow-600",
    borderLeftColor: "#DFA406",
    description:
      "Delivered high-quality projects across diverse domains, including website applications, API development, and cloud integrations (AWS).",
    achievements: [
      "My first taste of professional development! Got to work with the MERN stack and build stuff that users would interact with.",
      "The highlight? Building a real-time dashboard that boosted user engagement by 40% (yeah, I was pretty proud of that).",
      "Also learned why responsive design matters - nothing humbles you like seeing your desktop app look terrible on mobile.",
    ],
    technologies: [
      "JavaScript",
      "MongoDB",
      "Node.js",
      "Express",
      "typeScript",
      "API Integration",
      "React",
    ],
    workImage: "/certificates/namaste-react.png",
  },
  {
    role: "Lead Web Developer",
    company: "SV Tech Club",
    period: "February 2023 — April 2023",
    type: "Tech-Club",
    companyIcon: "mdi:school-outline",
    companyColor: "from-sky-500 to-sky-600",
    borderLeftColor: "#0998DC",
    description:
      "Delivered high-quality projects across diverse domains, including website applications, API development, and cloud integrations (AWS).",
    achievements: [
      "Leading our college's coding community and managed the annual tech fest - coordinating events, competitions, and workshops for 500+ students!",
      "Been guiding junior developers through their coding journey, teaching them DSA concepts and helping them build their first projects (pretty rewarding stuff).",
      "Plus, organizing coding bootCamps and hackathons while mentoring students has been honestly one of the best parts - seeing growth never gets old.",
    ],
    technologies: [
      "Web-Dev",
      "DSA",
      "Teaching",
      "Hackathons",
      "Team Leadership",
      "React",
    ],
    workImage: "/certificates/HTML-CSS Certificate.jpg",
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

        <div className="relative border-l-4 border-gray-300 mt-10">
          {experience.map((exp, idx) => (
            <div key={idx} className="mb-12 ml-6 relative">
              {/* Timeline Icon */}
              <span
                className={`absolute -left-[3.5rem] top-5  flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${exp.companyColor} text-white shadow-lg`}
              >
                <Icon icon={exp.companyIcon} className="text-3xl" />
              </span>

              {/* Content Card */}
              <div
                className={`bg-black rounded-lg shadow-lg p-6 border-l-4 border-transparent  transition-colors duration-300`}
                style={{
                  borderColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = exp.borderLeftColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-purple-500">
                      {exp.company} • {exp.type}
                    </p>
                    <p className="text-sm text-emerald-600">{exp.period}</p>
                  </div>
                </div>

                <p className="mt-4 text-white">{exp.description}</p>

                <ul className="mt-3 list-disc pl-5 space-y-1 text-white">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#1d1d1d] text-white text-sm rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="py-6">
                  <img
                    src={exp.workImage}
                    alt={exp.company}
                    className="w-[13rem] h-[9rem] object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
