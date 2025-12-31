import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setIsVisible(scrollTop > 300);
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <div className="fixed bottom-16 right-2 z-50">
        <button
          onClick={scrollToTop}
          className="relative p-3 bg-[#1d1d1d] text-white rounded-full shadow-md hover:bg-[#D2ACF7] hover:text-black transition group"
          aria-label="Scroll to top"
        >
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${
                2 * Math.PI * 20 * (1 - scrollProgress / 100)
              }`}
              className="transition-all duration-150 ease-out"
            />
          </svg>

          <ArrowUp className="w-5 h-5 relative z-10" />

          <span className="absolute top-1/2 right-full -translate-y-1/2 ml-3 px-2 py-1 text-sm text-black bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            Scroll to 👆 top!
          </span>
        </button>
      </div>
    )
  );
}
