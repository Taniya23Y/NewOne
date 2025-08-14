export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 "></div>
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
