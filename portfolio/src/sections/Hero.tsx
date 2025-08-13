"use client";

import memojImage from "@/assets/images/hero-removebg-preview.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import LinkPreviewWrapper from "@/components/LinkPreviewWrapper";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { link } from "fs";

export const HeroSection = () => {
  return (
    <div
      className="py-32 md:py-47 lg:py-51 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {/* hero-rings */}
        <div className="size-[600px] hero-ring"></div>
        <div className="size-[800px] hero-ring"></div>
        <div className="size-[1000px] hero-ring"></div>
        <div className="size-[1200px] hero-ring"></div>

        {/* hero-stars */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="3s"
        >
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="3s"
        >
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container relative z-10">
        {/* image and green btn */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Image
            src={memojImage}
            className="size-[100px] object-contain"
            alt="Person from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </motion.div>

        {/* heading and para */}
        <div className="max-w-lg mx-auto">
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 text-center tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-center bg-[#D2ACF7] font-spaceGrotesk bg-clip-text text-transparent z-10">
              Taniya Yadav
            </span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide"
          >
            Building Exceptional User Experiences
          </motion.h1>
          {/* Tagline */}
          <motion.p
            className="mt-4 text-center text-lg md:text-xl text-[#CFE4FF] mb-10 max-w-2xl mx-auto leading-relaxed font-spaceGrotesk"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Crafting exceptional digital experiences with clean code and
            thoughtful design
          </motion.p>
        </div>

        {/* Social Links - keeping exactly the same */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {[
            {
              href: "https://github.com/taniya23y",
              icon: "simple-icons:github",
              label: "GitHub",
              colorClass: "text-pink-500",
              bg: "#EFCCCA",
            },
            {
              href: "https://linkedin.com/in/taniyay",
              icon: "skill-icons:linkedin",
              label: "LinkedIn",
              colorClass: "text-blue-600",
              bg: "#CFE4FF",
            },
            {
              href: "mailto:taniyayadav882@gmail.com",
              icon: "material-icon-theme:email",
              label: "Email",
              colorClass: "text-yellow-900",
              bg: "#E7D38A",
            },
          ].map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full"
              style={{
                backgroundColor: link.bg,
              }}
            >
              <LinkPreviewWrapper
                url={link.href}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-xl ${link.colorClass}`}
              >
                <Icon icon={link.icon} width={18} height={18} />
                {link.label}
              </LinkPreviewWrapper>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
