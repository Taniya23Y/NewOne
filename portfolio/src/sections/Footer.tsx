export const Footer = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col justify-center items-center gap-2 text-center">
          <div className="text-white/40">
            &copy; {startYear} - {currentYear}, All rights reserved.
          </div>
          <div className="text-white/40">
            This portfolio was made with ❤️ and my skills in
            <span className="text-white ml-1 font-medium">
              Next.js, TypeScript, React, Tailwind CSS, and JavaScript
            </span>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};
