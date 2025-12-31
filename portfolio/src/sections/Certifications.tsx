"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Certificate = {
  title: string;
  provider: string;
  platform: string;
  issued: string;
  credentialId: string;
  credentialCertificate: string;
  skills: string[];
  platformIcon: string;
  color: string;
  certificatePreview: string;
  platformIconSize: number;
};

const certifications: Certificate[] = [
  {
    title: "Namaste Nodejs",
    provider: "Akshay Saini",
    platform: "NamasteDev",
    issued: "Sept 2024",
    credentialId: "Z4AMQZ3L2",
    credentialCertificate:
      "https://www.linkedin.com/in/taniyay/details/certifications/1748114812783/single-media-viewer/?profileId=ACoAAD6CowwBh31APSVV08td8DjfhMH7OxclV34",
    skills: ["Nodejs", "Express", "MongoDB", "AWS", "Open Source"],
    platformIcon: "logos:nodejs",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/namaste-nodejs.png",
    platformIconSize: 88,
  },
  {
    title: "Namaste React",
    provider: "Akshay Saini",
    platform: "NamasteDev",
    issued: "January 2023",
    credentialId: "3UPD6SABRD3B",
    credentialCertificate:
      "https://www.linkedin.com/in/taniyay/details/certifications/1755089873306/single-media-viewer/?profileId=ACoAAD6CowwBh31APSVV08td8DjfhMH7OxclV34",
    skills: ["react", "routing", "react-hooks", "Frontend Development"],
    platformIcon: "logos:react",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/namaste-react.png",
    platformIconSize: 60,
  },
  {
    title: "Web Development with HTML, CSS, JavaScript Essentials",
    provider: "Udemy",
    platform: "Coursera",
    issued: "February 2023",
    credentialId: "5FNQEGLH78UD",
    credentialCertificate:
      "https://www.udemy.com/certificate/UC-c3752c48-4791-41dd-8669-f928a228c0c3/",
    skills: ["IBM Cloud", "HTML", "CSS", "Full-Stack Development"],
    platformIcon: "logos:java",
    color: "from-blue-500 to-purple-600",
    certificatePreview: "/certificates/HTML-CSS Certificate.jpg",
    platformIconSize: 60,
  },

  {
    title: "Namaste Javascript",
    provider: "Akshay Saini",
    platform: "NamasteDev",
    issued: "April 2023",
    credentialId: "OZ4QYZ",
    credentialCertificate:
      "https://www.linkedin.com/in/taniyay/details/certifications/1712564951045/single-media-viewer/?profileId=ACoAAD6CowwBh31APSVV08td8DjfhMH7OxclV34",
    skills: [
      "Frontend Development",
      "DOM Manipulation",
      "Event Handling",
      "Async JS",
      "ES6+ Features",
    ],
    platformIcon: "logos:javascript",
    color: "from-blue-500 to-purple-600",
    certificatePreview: "/certificates/namaste-javascript.png",
    platformIconSize: 60,
  },
  {
    title: "Supreme DSA 1.0",
    provider: "Love Babbar",
    platform: "Codehelp",
    issued: "January 2023",
    credentialId: "2AUUVS958L5Y",
    credentialCertificate:
      "https://www.linkedin.com/in/taniyay/details/certifications/1709805526367/single-media-viewer/?profileId=ACoAAD6CowwBh31APSVV08td8DjfhMH7OxclV34",
    skills: ["C++", "Programming", "Data Structures", "Algorithms"],
    platformIcon: "logos:c",
    color: "from-blue-500 to-purple-600",
    certificatePreview: "/certificates/supreme-dsa.jpeg",
    platformIconSize: 60,
  },

  {
    title: "Generative AI",
    provider: "Meta",
    platform: "Coursera",
    issued: "July 2025",
    credentialId: "BLGJKHN6UTSF",
    credentialCertificate: "",
    skills: ["Generative", "AI tools", "AI", "LLM Development"],
    platformIcon: "logos:python",
    color: "from-blue-500 to-purple-600",
    certificatePreview: "/certificates/HTML-CSS Certificate.jpg",
    platformIconSize: 60,
  },
];

export default function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="container relative z-10 pt-[5rem]" id="certifications">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <SectionHeader
            tagText="Professional Credentials"
            tagIcon="solar:verified-check-bold"
            eyebrow="Certifications"
            showUnderline={true}
            centered={true}
            title="Licenses & Certificates"
            description="Professional certifications and credentials that validate my expertise in modern technologies and development practices."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 px-1"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group h-full"
              >
                <div className="h-full bg-black/70  backdrop-blur-sm rounded-2xl border border-gray-300  hover:border-gray-400  transition-all duration-300 overflow-hidden">
                  <div
                    className={`h-20 flex items-center justify-between bg-[#1d1d1d] px-4 ${cert.color} relative overflow-hidden`}
                  >
                    <div className="flex items-center justify-end mr-4 gap-1">
                      <span className="text-white text-sm font-bold">×</span>
                      <Icon
                        icon={cert.platformIcon}
                        className=""
                        width={cert.platformIconSize}
                        height={cert.platformIconSize}
                      />
                    </div>
                    <div className="flex items-center justify-start gap-0">
                      <div className="relative w-8 h-8 rounded-lg flex items-center justify-center">
                        <div className="absolute top-1/5 left-1/4 w-1/2 h-1/2 bg-white rounded-lg -z-0"></div>
                        <Icon
                          icon="solar:verified-check-bold"
                          className="text-blue-500 z-10"
                          width={26}
                          height={26}
                        />
                      </div>
                      <span className="text-blue-500 text-sm font-medium">
                        Verified
                      </span>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
                    <div className="absolute top-6 right-8 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-500"></div>

                    <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-gray-100 transition-colors">
                      {cert.title}
                    </h3>

                    <div className="space-y-3 mb-6 :bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md flex items-center justify-center">
                          <Icon
                            icon="solar:buildings-2-bold"
                            className="text-white"
                            width={12}
                            height={12}
                          />
                        </div>
                        <span className="text-gray-400 font-medium">
                          Provider:
                        </span>
                        <span className="font-semibold text-white">
                          {cert.provider}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-md flex items-center justify-center">
                          <Icon
                            icon="solar:monitor-smartphone-bold"
                            className="text-white"
                            width={12}
                            height={12}
                          />
                        </div>
                        <span className="text-gray-400 font-medium">
                          Platform:
                        </span>
                        <span className="font-semibold text-blue-400">
                          {cert.platform}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-600 rounded-md flex items-center justify-center">
                          <Icon
                            icon="solar:calendar-bold"
                            className="text-white"
                            width={12}
                            height={12}
                          />
                        </div>
                        <span className="text-gray-400 font-medium">
                          Issued:
                        </span>
                        <span className="font-semibold text-gray-300">
                          {cert.issued}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md flex items-center justify-center">
                          <Icon
                            icon="solar:star-bold"
                            className="text-white"
                            width={10}
                            height={10}
                          />
                        </div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wide">
                          Skills Validated
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-200 rounded-lg text-xs font-medium border border-gray-600/50 hover:from-blue-900/20 hover:to-blue-800/20 hover:border-blue-600/50 hover:text-blue-200 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                      <Link
                        href={`${cert.credentialCertificate}`}
                        target="_blank"
                      >
                        <div className="flex items-center gap-2">
                          <Icon
                            icon="solar:arrow-right-up-bold"
                            className="text-green-500"
                            width={14}
                            height={14}
                          />
                          <span className="text-xs text-gray-400 font-medium">
                            ID:{" "}
                            <span className="text-gray-300 font-mono">
                              {cert.credentialId}
                            </span>
                          </span>
                          <Icon
                            icon="solar:link-bold"
                            className="text-gray-500"
                            width={14}
                            height={14}
                          />
                        </div>
                      </Link>
                      <button
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-900/20 to-blue-800/20 text-blue-400 hover:text-blue-300 rounded-lg border border-blue-700/50  hover:border-blue-600/70 hover:from-blue-800/30 hover:to-blue-700/30 transition-all duration-300 text-xs font-medium shadow-sm hover:shadow-md"
                        onClick={() => setSelectedCertificate(cert)}
                      >
                        <Icon icon="solar:eye-bold" width={12} height={12} />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16 px-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="inline-flex items-center gap-6 px-6 py-4 bg-[#1d1d1d]  backdrop-blur-sm border border-blue-200/50  hover:border-blue-300/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                  <Icon
                    icon="solar:star-outline"
                    className="text-white"
                    width={18}
                    height={18}
                  />
                </div>
                <span className="text-blue-300 text-sm md:text-base font-semibold">
                  7+ Professional Certifications
                </span>
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-blue-300/50 via-purple-300/50 to-blue-300/50"></div>
              <div className="flex items-center gap-3">
                <Icon
                  icon="solar:verified-check-bold"
                  className="text-blue-500"
                  width={22}
                  height={22}
                />
                <span className="text-gray-400 text-sm md:text-base font-medium">
                  Verified by Tech Leaders
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed  inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#1d1d1d] top-8 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden relative border border-gray-700/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50 backdrop-blur-sm">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {selectedCertificate.provider} •{" "}
                    {selectedCertificate.issued}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCertificate(null)}
                  className="p-3  hover:bg-gray-800/80 rounded-xl transition-all duration-300 border border-gray-700/50"
                >
                  <Icon
                    icon="solar:close-circle-bold"
                    className="text-white"
                    width={20}
                    height={20}
                  />
                </motion.button>
              </div>

              <div className="p-6 flex justify-center bg-black">
                <div className="relative max-w-full overflow-hidden shadow-lg border border-gray-700/50">
                  <Image
                    src={selectedCertificate.certificatePreview || ""}
                    alt={selectedCertificate.title}
                    width={400}
                    height={300}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-6 border-t border-gray-700/50 backdrop-blur-sm">
                <div className="text-sm text-gray-400 font-medium">
                  Credential ID:{" "}
                  <span className="text-[10px] text-gray-200">
                    {selectedCertificate.credentialId}
                  </span>
                </div>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCertificate(null)}
                    className="px-2 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border border-red-500/50"
                  >
                    <Icon
                      icon="solar:close-circle-bold"
                      className="text-white"
                      width={20}
                      height={20}
                    />
                    Close
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedCertificate.certificatePreview || ""}
                    download={`${selectedCertificate.title}.png`}
                    className="px-2 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border border-blue-500/50"
                  >
                    <Icon icon="solar:download-bold" width={16} height={16} />
                    Download
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
