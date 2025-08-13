"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🏐",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎼",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "65%",
  },
  {
    title: "Traveling",
    emoji: "🧳",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
    <div className="container py-20 md:py-28" id="overview">
      <motion.section
        className="mb-16 md:mb-24 lg:mb-32 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Section Header */}
          <SectionHeader
            tagText="Get To Know Me"
            tagIcon="solar:user-heart-bold"
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="Crafting digital experiences with passion, precision, and purpose"
            showUnderline={true}
            centered={true}
          />

          {/* Main Content Grid */}
          <div className="mt-10 grid lg:grid-cols-12 gap-6 md:gap-8 items-start px-4">
            {/* Main Profile Section */}
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <div className="space-y-6 md:space-y-8">
                {/* Introduction Card */}
                <div
                  className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-green-950/30 to-green-900/20 backdrop-blur-xl border  border-green-800/30 shadow-2xl flex flex-col"
                  //  className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-[#1d1d1d] backdrop-blur-xl border border-white/30  shadow-2xl"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-4 md:top-6 right-4 md:right-6 w-3 md:w-4 h-3 md:h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 md:top-6 right-10 md:right-14 w-2 md:w-3 h-2 md:h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <div className="hidden md:block absolute top-6 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>

                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white flex items-center gap-2 md:gap-3">
                        <span className="text-2xl sm:text-3xl md:text-4xl">
                          👋
                        </span>
                        Hello, I&apos;m Taniya Yadav
                      </h3>

                      <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
                        A passionate{" "}
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          Full Stack Developer
                        </span>{" "}
                        and
                        <span className="font-bold text-purple-600 dark:text-purple-400">
                          &nbsp; AI enthusiast
                        </span>{" "}
                        crafting digital experiences that users love.
                      </p>
                    </div>

                    {/* Expanded About Content */}
                    <div className="space-y-3 md:space-y-4 border-t border-gray-200/50 dark:border-gray-700/50 pt-4 md:pt-6">
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        I specialize in building scalable web and mobile
                        applications using React, Next.js, TypeScript, and
                        modern development technologies. I thrive on turning
                        complex problems into elegant solutions that users love.
                      </p>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        Beyond work, I love exploring emerging technologies,
                        contributing to open-source projects, and mentoring
                        aspiring developers. I believe in continuous learning &
                        staying at the forefront of technological innovation.
                      </p>
                    </div>

                    {/* Skills Highlight */}
                    <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4 md:pt-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                        <Icon
                          icon="solar:lightning-bold"
                          className="text-yellow-500 w-4 md:w-5 h-4 md:h-5"
                          width={20}
                          height={20}
                        />
                        Core Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {[
                          "AI Integration",
                          "React",
                          "Next.js",
                          "TypeScript",
                          "Node.js",
                          "Python",
                          "AWS",
                          "UI/UX Design",
                          "Healthcare IT",
                        ].map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-black text-white rounded-lg md:rounded-xl border border-blue-200/50  hover:shadow-lg transition-all duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Roles Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {/* hobbies  */}
                  <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                    <CardHeader
                      title="Beyond The Code"
                      description="Explore my interests and hobbies beyond the digital realm."
                      className="px-6 py-6"
                    />

                    <div className="relative flex-1" ref={constraintRef}>
                      {hobbies.map((hobby) => (
                        <motion.div
                          key={hobby.title}
                          className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                          style={{
                            left: hobby.left,
                            top: hobby.top,
                          }}
                          drag
                          dragConstraints={constraintRef}
                        >
                          <span className="font-medium text-gray-950">
                            {hobby.title}
                          </span>
                          <span>{hobby.emoji}</span>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Sidebar */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 space-y-8 mt-6 lg:mt-0"
            >
              {/* Contact Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/90 to-pink-50/90 dark:from-purple-950/30 dark:to-pink-950/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/40 shadow-xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Icon
                    icon="solar:chat-round-dots-bold"
                    className="text-purple-500 w-5 h-5"
                    width={20}
                    height={20}
                  />
                  Let&apos;s Connect
                </h4>
                <div className="space-y-3">
                  <motion.a
                    href="mailto:mramazan1@yahoo.com"
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30 hover:bg-white/90 dark:hover:bg-gray-800/50 transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                  >
                    <div className="p-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-md group-hover:from-orange-600 group-hover:to-red-600 transition-all shadow-md">
                      <Icon
                        icon="solar:letter-bold"
                        className="text-white w-4 h-4"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white break-all">
                        taniyayadav882@gmail.com
                      </div>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30"
                  >
                    <div className="p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-md">
                      <Icon
                        icon="solar:global-bold"
                        className="text-white w-4 h-4"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        taniyay-portfolio.vercel
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30"
                  >
                    <div className="p-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-md shadow-md border border-white/20 dark:border-gray-700/30">
                      <Icon
                        icon="solar:map-point-bold"
                        className="text-white w-4 h-4"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        Indore, India
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Available for Hire */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/40 shadow-xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Icon
                    icon="solar:rocket-bold"
                    className="text-emerald-600 w-5 h-5"
                    width={20}
                    height={20}
                  />
                  Available for Hire
                </h4>
                <div className="space-y-3.5">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                  >
                    <Icon
                      icon="solar:check-circle-bold"
                      className="text-green-600 w-5 h-5"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                      Open to New Opportunities
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                  >
                    <Icon
                      icon="solar:planet-2-bold"
                      className="text-cyan-600 w-5 h-5"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                      Open to Relocation
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.4 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                  >
                    <Icon
                      icon="solar:clock-circle-bold"
                      className="text-blue-600 w-5 h-5"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                      Remote & On-site Available
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* my reads */}
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspective"
                />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={BookImage} alt="book cover" />
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};
