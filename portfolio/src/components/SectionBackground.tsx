import React from "react";

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBackground({
  children,
  className = "",
}: SectionBackgroundProps) {
  return (
    <div className={`relative overflow-hidden py-16 bg-[#000000] ${className}`}>
      {children}
    </div>
  );
}
