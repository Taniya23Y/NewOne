import piyushFolio from "@/assets/images/PortFolio.png";
import tasteTrekImg from "@/assets/images/TasteTrek.png";
import eduMeetImg from "@/assets/images/Banner.png";
import DuoStudioImg from "@/assets/images/DuoStudio.png";
import codeCompilerImg from "@/assets/images/CodeCompiler.png";
import RazorpayImg from "@/assets/images/Razorpay.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    tags: ["Figma, ", "React, ", "Redux-toolkit, ", "Framer-Motion, ", "GSAP"],
    year: "2024",
    title: "Piyush Portfolio",
    results: [
      {
        title:
          "This portfolio 🎯 was designed and developed by me 🎨 for my classmate Piyush 👨‍💻.",
      },
      {
        title:
          "It showcases Piyush's projects and skills in an intuitive and visually appealing manner 🌟.",
      },
    ],
    projectLink: "https://ui-portfolio-umber.vercel.app/",
    githubLink: "https://github.com/taniya23y/Piyush-Folio",
    image: piyushFolio,
  },

  {
    tags: [
      "MERN STACK, ",
      "React, ",
      "FireBase, ",
      "Stripe-payments, ",
      "Dashboard, ",
      "Jest",
    ],
    year: "2024",
    title: "TasteTrek Website ",
    results: [
      {
        title:
          "TasteTrek 🍽️ is a MERN STACK based food website using React Router, Redux Toolkit, and Jest.",
      },
      { title: "Designed in Figma and inspired by Dribbble." },
    ],
    projectLink: "https://taste-trek.netlify.app/",
    githubLink: "https://github.com/taniya23y/TasteTrek-Food-Webiste",
    image: tasteTrekImg,
  },

  {
    tags: ["Javascript, ", "React, ", "Redux-toolkit, ", "MongoDB"],
    year: "2023",
    title: "EduMeet Learning Hub",
    results: [
      { title: "EduMeet 🎯 is innovative online learning platform." },
      {
        title:
          "Offers users seamless access to a wide range of courses through an intuitive interface.",
      },
    ],
    projectLink: "https://edumeet-project.netlify.app/",
    githubLink: "https://github.com/taniya23y/edumeet",
    image: eduMeetImg,
  },

  {
    tags: ["Javascript, ", "Gsap, ", "Locomotive-scroll, ", "Design"],
    year: "2023",
    title: "DuoStudio-Clone",
    results: [
      {
        title:
          "Developed a 🕸️ responsive web application Clone inspired by Duo-Studio.",
      },
      { title: "showcasing a deep passion for web design and development." },
    ],
    projectLink: "https://Duo-Studio-Clone-project.netlify.app/",
    githubLink: "https://github.com/Taniya23Y/Duo-Studio-Clone",
    image: DuoStudioImg,
  },

  {
    tags: ["React, ", "TypeScript, ", "MongoDB, ", "Tailwind, ", "Shadcn"],
    year: "2023",
    title: "Code.Compiler",
    results: [
      {
        title:
          "Elevate your coding experience with CodeCompiler 💻, enabling real-time HTML, CSS, and JS coding, sharing.",
      },
      { title: "Seamlessly save, share, edit and download your projects." },
    ],
    projectLink: "https://Code-Compiler-Project.netlify.app/",
    githubLink: "https://github.com/Taniya23Y/Code.Compiler.Project",
    image: codeCompilerImg,
  },

  {
    tags: ["HTML, ", "CSS, ", "JAVASCRIPT", "Tailwind"],
    year: "2023",
    title: "Razorpay-Clone",
    results: [
      {
        title: "A 🌐 responsive web application Clone inspired by 💸Razorpay.",
      },
      { title: "showcasing a deep passion for web design and development." },
      { title: "built using HTML, CSS, and Tailwind CSS." },
    ],
    projectLink: "https://Razorpay-clone-Project.netlify.app/",
    projectUrl: "https://github.com/Taniya23Y/Razorpay.com-clone",
    image: RazorpayImg,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:pb-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-black rounded-3xl relative z-0 overflow-hidden after:z-10  after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:mt-16 lg:px-20 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-20"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.tags}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl  md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col lg:flex-row lg:gap-3">
                    <a href={project.projectLink}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>

                    <a href={project.githubLink}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>View Repo</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 lg:mt-0 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
