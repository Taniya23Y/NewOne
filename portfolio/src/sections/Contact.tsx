import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

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

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div
            className="absolute inset-0 -z-1 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col gap-8  items-center ">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-center">
                Let&apos;s create something amazing together
              </h2>

              <p className="text-sm md:text-base mt-2 text-center">
                Interested in working together or have a question? Feel free to
                reach out. I&apos;m here to help you turn your ideas into
                amazing digital realities. Looking forward to hearing from you
                soon!
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="border-t border-white py-3 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
                <nav className="flex flex-col md:flex-row items-center gap-8">
                  {footerLink.map((link) => (
                    <a
                      href={link.href}
                      key={link.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex gap-1.5 cursor-pointer"
                    >
                      <span className="font-semibold">{link.title}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
