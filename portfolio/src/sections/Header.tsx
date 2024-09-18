"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <div className="flex flex-row">
          {links.map((link) => (
            <motion.div
              className="h-full flex items-center justify-center relative"
              key={link.hash}
            >
              <a
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-2 transition dark:text-gray-500 dark:hover:text-gray-300",
                  "hover:text-white", // Tailwind styles for hover effect
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name, // Active state styles
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-white rounded-full absolute inset-0 -z-10 dark:bg-white"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </nav>
    </div>
  );
};
