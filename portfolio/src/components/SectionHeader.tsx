"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const SectionHeader = ({
  tagText,
  tagIcon,
  title,
  showUnderline = false,
  centered = false,
  eyebrow,
  description,
}: {
  tagText: string;
  tagIcon: string;
  title: string;
  showUnderline: boolean;
  centered: boolean;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        {/* Tag Badge */}
        <motion.div
          className={`inline-flex items-center gap-2 px-4 py-2 bg-black/10 border border-white/30 rounded-full mb-4 md:mb-6 ${
            centered ? "justify-center" : ""
          }`}
          whileHover={{ scale: 1.05 }}
        >
          <Icon
            icon={tagIcon}
            className="text-[#c1d9f8]"
            width={20}
            height={20}
          />
          <span className="text-[#c1d9f8] text-sm font-medium">{tagText}</span>
        </motion.div>
        <p className="uppercase font-semibold tracking-widest text-[#D2ACF7] text-center">
          {eyebrow}
        </p>

        {/* Underline */}
        {showUnderline && (
          <motion.div
            className={`h-1 md:h-1.2 lg:h-1.3 bg-gradient-to-l from-[#D2ACF7] via-purple-300 to-purple-200 rounded-full mb-3 md:mb-4 lg:mb-7 ${
              centered ? "mx-auto" : ""
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        )}
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center text-white">
        {title}
      </h2>

      <p className="italic text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
