"use client";

import piyushFolio from "@/assets/images/PortFolio.png";
import tasteTrekImg from "@/assets/images/TasteTrek.png";
import eduMeetImg from "@/assets/images/edumeetImg1.png";
import DuoStudioImg from "@/assets/images/DuoStudio.png";
import codeCompilerImg from "@/assets/images/CodeCompiler.png";
import RazorpayImg from "@/assets/images/Razorpay.png";
import MyPortfolioImg from "@/assets/images/MyPortfolioImg.png";
import DineTasteImg from "@/assets/images/DineTaste.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useSectionInView } from "@/lib/hooks";
import LinkPreviewWrapper from "@/components/LinkPreviewWrapper";

const portfolioProjects = [
  {
    tags: ["Javascript, ", "React, ", "Redux-toolkit, ", "MongoDB"],
    year: "2023",
    title: "EduMeet",
    results: [
      {
        title:
          "📚 EduMeet is a learning platform offering a smooth experience for students and admins.",
      },
      {
        title:
          "🎥 Users can explore, purchase, and watch video courses with ease.",
      },
      {
        title:
          "⭐ Learners can leave ratings and reviews after completing courses.",
      },
    ],
    projectLink: "https://edumeet-learn.vercel.app",
    githubLink: "https://github.com/Taniya23Y/Next-Edumeet",
    image: eduMeetImg,
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
    projectLink: "https://Code-Compiler-Project.vercel.app",
    githubLink: "https://github.com/Taniya23Y/Code.Compiler.Project",
    image: codeCompilerImg,
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
    projectLink: "https://tastetrek.vercel.app/",
    githubLink: "https://github.com/taniya23y/TasteTrek-Food-Website",
    image: tasteTrekImg,
  },

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
    projectLink: "https://duo-studio-webclone.netlify.app",
    githubLink: "https://github.com/Taniya23Y/Duo-Studio-Clone",
    image: DuoStudioImg,
  },

  {
    tags: [
      "TypeScript, ",
      "Next.js, ",
      "Tailwind CSS, ",
      "Framer Motion, ",
      "Radix UI, ",
      "React Rating, ",
      "React Icons",
    ],
    year: "2024",
    title: "My-Portfolio",
    results: [
      {
        title:
          "Built with TypeScript and Next.js to showcase projects and skills effectively.",
      },
      {
        title:
          "Responsive Design 📱 using Tailwind CSS for optimized display on all devices.",
      },
      {
        title:
          "SEO Friendly 🔍 leveraging Next.js for better search engine visibility.",
      },
    ],
    projectLink: "https://taniyay-portfolio.vercel.app",
    githubLink: "https://github.com/Taniya23Y/NewOne",
    image: MyPortfolioImg,
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
    projectLink: "https://Razorpay-clone-Project.netlify.app",
    githubLink: "https://github.com/Taniya23Y/Razorpay.com-clone",
    image: RazorpayImg,
  },

  {
    tags: ["React, ", "FireBase, ", "Stripe-payments, ", "Parcel, ", "Jest"],
    year: "2023",
    title: "DineTaste",
    results: [
      {
        title:
          "DineTaste lets users view restaurants and browse their live menu fetched from Swiggy’s API.",
      },
      {
        title:
          "🛒 Users can add or remove items from cart with working discount functionality.",
      },
      {
        title:
          "⚛️ Built with React, Parcel, Redux Toolkit, and Tailwind CSS with key learnings in hooks.",
      },
    ],
    projectLink: "https://dine-taste.vercel.app/",
    githubLink: "https://github.com/Taniya23Y/DineTaste",
    image: DineTasteImg,
  },
];

export const ProjectsSection = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section className="pt-[5rem] pb-20 lg:pb-28" ref={ref} id="projects">
      <div className="container">
        <SectionHeader
          tagIcon="solar:code-square-bold"
          tagText="Portfolio Showcase"
          showUnderline={true}
          centered={true}
          eyebrow="Real-world Results"
          title="Featured Projects"
          description=" See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col gap-1 pb-20 mt-0 md:mt-1">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 md:pt-12 md:px-10 pb-0 lg:mt-16 lg:px-20 "
              style={{
                top: `calc(64px + ${projectIndex * 30}px)`,
              }}
            >
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
                    <LinkPreviewWrapper url={project.projectLink} className="">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </LinkPreviewWrapper>

                    <LinkPreviewWrapper
                      url={project.githubLink ?? ""}
                      className=""
                    >
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>View Repo</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </LinkPreviewWrapper>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
