import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLink = [
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/taniyay",
  },
  {
    title: "GitHub",
    href: "https://github.com/taniya23y",
  },
  {
    title: "Leetcode",
    href: "https://leetcode.com/u/taniyayadav882",
  },
  {
    title: "Twitter",
    href: "https://x.com/FairyTaniya",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex justify-center items-center gap-8">
          <div className="text-white/40 text-center ">
            &copy; 2024, All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
