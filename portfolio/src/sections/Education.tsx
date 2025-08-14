import { SectionHeader } from "@/components/SectionHeader";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "SVCE Indore",
    period: "2021 — 2025",
    type: "Full-time",
    institutionIcon: "mdi:school-outline",
    institutionColor: "from-purple-500 to-purple-700",
    description:
      "Focused on Computer Science fundamentals, web development, and modern technologies, building projects across MERN stack and UI/UX design.",
    achievements: [
      "Maintained CGPA of 8.17",
      "Lead Web Developer at SV Tech Club",
      "Built 4+ full-stack projects during coursework",
      "Represented college in hackathons and tech events",
    ],
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "UI/UX Design",
    ],
    bgColor: "#22242d",
    borderColor: "#ad9df5",
  },
  {
    degree: "Senior Secondary (Class 12) – PCM ",
    institution: "Aditya Vidya Vihar Senior Secondary School, Khargone",
    period: "2019 — 2021",
    type: "Full-time",
    institutionIcon: "mdi:book-education-outline",
    institutionColor: "from-yellow-500 to-yellow-700",
    description:
      "Studied Physics, Chemistry, Mathematics, and Computer Science with a focus on programming fundamentals.",
    achievements: ["Scored 85%", "School-level coding competition winner"],
    technologies: ["Maths", "PE", "Moral-Edu."],
    bgColor: "#565543",
    borderColor: "#FB9014",
  },
  {
    degree: "Secondary (Class 10)",
    institution: "Bapna Public School, Gogawan",
    period: "2018 — 2019",
    type: "Full-time",
    institutionIcon: "mdi:book-open-variant-outline",
    institutionColor: "from-emerald-500 to-emerald-700",
    description: "Laid the foundation of problem-solving and logical thinking.",
    achievements: ["Scored 82%", "Cultural Science Project Winner"],
    technologies: ["Science", "GK", "History"],
    bgColor: "#152D24",
    borderColor: "#33785f",
  },
];

export const EducationSection = () => {
  return (
    <div className="container text-[#22242d] py-20 md:py-24" id="education">
      {/* Section Header */}
      <SectionHeader
        tagIcon="mdi:school-outline"
        tagText="Academic Journey"
        showUnderline={true}
        centered={true}
        eyebrow="Education"
        title="My Education & Learning"
        description="A journey of knowledge, skills, and growth — here’s how my academic background shaped my career path."
      />

      {/* Education Timeline */}
      <div className="mt-12 space-y-8 relative">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              backgroundColor: edu.bgColor,
              border: `1px solid ${edu.borderColor}`,
            }}
          >
            {/* Header Row */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${edu.institutionColor} shadow-lg`}
              >
                <Icon
                  icon={edu.institutionIcon}
                  className="text-white w-6 h-6"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-sm text-white">
                  {edu.institution} | {edu.period}
                </p>
                <span className="text-xs text-white">{edu.type}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white mb-4">{edu.description}</p>

            {/* Achievements */}
            {edu.achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">
                  Achievements:
                </h4>
                <ul className="list-disc list-inside text-white space-y-1">
                  {edu.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {edu.technologies.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">
                  Key Subjects & Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs border rounded-full hover:opacity-80 transition"
                      style={{
                        backgroundColor: "#fff",
                        borderColor: edu.borderColor,
                        color: edu.borderColor,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
