import React from "react";
import { SiGithub } from "react-icons/si";

export function GithubStarsButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      <a
        href="https://github.com/taniya23y/NewOne"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-2 bg-[#1d1d1d] text-white rounded-full shadow-md transition relative"
        aria-label="Star on GitHub"
      >
        <SiGithub className="w-5 h-5 relative z-10" />
        {/* Tooltip */}
        <span className="absolute top-1/2 left-full -translate-y-1/2 ml-3 px-2 py-1 text-sm text-black bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Give it a ⭐ on GitHub!
        </span>
      </a>
    </div>
  );
}
