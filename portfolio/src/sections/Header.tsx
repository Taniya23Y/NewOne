"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useActiveSectionContext } from "@/context/active-section-context";

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Overview", icon: "mdi:home-outline" },
    { name: "Education", icon: "mdi:school-outline" },
    { name: "Stack", icon: "mdi:layers-outline" },
    { name: "Experience", icon: "mdi:account-tie-outline" },
    { name: "Projects", icon: "mdi:folder-outline" },
    { name: "Social-links", icon: "mdi:link-variant-plus" },
    { name: "Certifications", icon: "mdi:certificate-outline" },
    { name: "Contact", icon: "mdi:email-outline" },
  ];

  return (
    <nav className="fixed top-0 md:top-4 w-full z-50">
      <div className="md:max-w-fit md:border-[0.1px] md:border-gray-500 md:rounded-full mx-auto px-7 py-2 bg-[#1D1D1D] backdrop-blur-3xl">
        <div className="flex justify-between items-center gap-10 font-spaceGrotesk">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-[#D2ACF7]"
          >
            <a href="#home"> Taniya Y.</a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-1 text-gray-300 hover:text-[#D2ACF7] transition-colors duration-300 text-sm font-medium"
              >
                <Icon icon={item.icon} width={16} height={16} />
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden relative">
            <AnimatePresence>
              {!isMenuOpen && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  onClick={() => setIsMenuOpen(true)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1d1d] border border-gray-50 hover:bg-[#2c2c2c] transition"
                >
                  {/* Menu icon */}
                  <div className="space-y-1.5">
                    <span className="block w-5 h-0.5 bg-white"></span>
                    <span className="block w-5 h-0.5 bg-white"></span>
                    <span className="block w-5 h-0.5 bg-white"></span>
                  </div>
                </motion.button>
              )}
            </AnimatePresence>

            {/* Expanding Menu Box */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 top-0 bg-white border border-black rounded-lg shadow-lg p-8 w-[12rem]"
                >
                  {/* Close Icon */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-1 rounded-full bg-[#ac74e5] text-black hover:bg-[#9f5be4] transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Menu Items */}
                  <ul className="flex flex-col gap-4 mt-6">
                    {navItems.map((item, i) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: i * 0.07,
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        <a
                          href={`#${item.name.toLowerCase()}`}
                          className="flex items-center gap-2 text-black hover:text-purple-800 hover:font-bold transition-colors text-sm font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon icon={item.icon} width={18} height={18} />
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};
