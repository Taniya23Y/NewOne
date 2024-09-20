"use client";

import { SectionHeader } from "@/components/SectionHeader";
import Loader from "@/components/Loader";
import useData from "@/hooks/useData";
import { useEffect, useState } from "react";

import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaFigma, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { GiCandlebright, GiSteamLocomotive } from "react-icons/gi";
import { IoLogoCss3 } from "react-icons/io5";
import { PiGithubLogoBold } from "react-icons/pi";
import { RxNotionLogo } from "react-icons/rx";
import {
  SiExpress,
  SiNetlify,
  SiPostman,
  SiReactrouter,
  SiSecurityscorecard,
  SiShadcnui,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandRedux,
  TbBrandVercel,
  TbBrandVscode,
} from "react-icons/tb";
import Rating from "react-rating";

export const Skills = () => {
  const [FrontEnd, setFrontEnd] = useState(true);
  const [Backend, setBackend] = useState(false);
  const [Tools, setTools] = useState(false);

  const fillUpRating = (
    <div className="h-2 w-4 bg-light-primary-color  bg-opacity-70 border border-dark-primary-color dark:border-light-primary-color dark:bg-dark-primary-color rounded-sm"></div>
  );
  const emptyRating = (
    <div className="h-2 w-4 dark:bg-dark-primary-color/30 bg-light-secondary-color dark:border-light-primary-color border border-dark-primary-color bg-opacity-35  rounded-sm"></div>
  );

  const { FrontEndOptions, ToolsOptions, BackendOptions } = useData();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="py-20 relative" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="My Skills"
          title="Crafting Solutions that Shine"
          description="I blend creativity and technical expertise to deliver exceptional results. Here's a snapshot of my key skills:"
        />

        <div className="flex flex-col justify-center items-center pt-3">
          <div>
            <span className="font-extrabold">What Fires Me Up 🔥 </span>
          </div>
          <div>
            <ul className="list-inside opacity-50 pt-2">
              <li>
                <BsArrowRight className="inline-block text-2xl" />{" "}
                <span className="underline italic">Javascript:</span> My trusty
                sidekick in building dynamic web applications.
              </li>
              <li>
                <BsArrowRight className="inline-block text-2xl" />{" "}
                <span className="underline italic">React:</span> Where I weave
                magic into user interfaces.
              </li>
              <li>
                <BsArrowRight className="inline-block text-2xl" />{" "}
                <span className="underline italic">UI Development:</span> My
                canvas for creating pixel-perfect designs.
              </li>
            </ul>
          </div>
        </div>

        {/* ****************************************** */}

        <div
          className={`${
            typeof window !== "undefined" && window.innerWidth < 768
              ? "skills"
              : ""
          }  lg:bg-opacity-0  lg:pt-5`}
        >
          <div className=" items-center justify-center gap-x-3 mx-5  max-w-2xl lg:mb-[50px]  lg:mx-auto">
            <div className=" flex z-10 justify-center">
              <div
                role="button"
                onClick={() => {
                  setBackend(false);
                  setTools(false);
                  setFrontEnd(true);
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 1200);
                }}
                className={`flex items-center  gap-x-2 text-[11px] h-[80px] w-[80px] scale-75 justify-center md:-ml-14 max-sm:-mr-3 lg:ml-0 p-[2px] cursor-pointer  uppercase font-FiraCode rounded-[2rem] rotate-45  border- text-base-200 font-bold  duration-500 transform ${
                  FrontEnd ? "boxSkills" : "boxSkills2"
                }`}
              >
                <div className="w-full rounded-[2rem] flex items-center justify-center h-full bg-light-primary-color dark:bg-gradient-to-r from-emerald-300 to-sky-400">
                  <span
                    className={`-rotate-45  duration-500 transform tracking-wider  ${
                      FrontEnd
                        ? "text-dark-primary-color dark:text-light-primary-color"
                        : "text-dark-primary-color/30 dark:text-light-primary-color/30"
                    }`}
                  >
                    FrontEnd
                  </span>
                </div>
              </div>
            </div>
            <div
              className="flex w-1/5 mx-auto relative lg:mt-6  aos-init aos-animate"
              data-aosname="flip-left"
              data-aos-delay="0"
            >
              <div className="p-6 -z-10 transform rotate-90 border-r-4 border-b-4 rounded-br-full border-light-primary-color dark:border-dark-primary-color hidden lg:block relative left-[24px]  flex-1"></div>
              <div className="p-6 h-[100px] -z-10 transform rotate-180 border-r-4 border-t-4 rounded-tr-full  border-light-primary-color dark:border-dark-primary-color relative left-[33px] -mt-4 lg:hidden flex-1"></div>
              <div
                role="button"
                onClick={() => {
                  setBackend(true);
                  setTools(false);
                  setFrontEnd(false);
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 1200);
                }}
                className={`flex items-center gap-x-2 h-[80px] w-[80px] absolute scale-75 lg:-left-10 -left-[70px] top-3 z-10 lg:-top-2 justify-center p-0.5 cursor-pointer  uppercase font-FiraCode rounded-[2rem] rotate-45 border-base-200 text-sm font-bold boxSkills  duration-500 transform ${
                  Backend ? "boxSkills" : "boxSkills2"
                }`}
              >
                <div className="w-full rounded-[2rem]  flex items-center justify-center h-full bg-light-primary-color dark:bg-gradient-to-r from-emerald-300 to-sky-400">
                  <span
                    className={`-rotate-45 duration-500 transform font-manrope   tracking-wider  ${
                      Backend
                        ? "text-dark-primary-color dark:text-light-primary-color"
                        : "text-dark-primary-color/30 dark:text-light-primary-color/30"
                    }`}
                  >
                    BackEnd
                  </span>
                </div>
              </div>
              <div className="p-[20px] transform flipBox rotate-180 border-r-4 absolute border-b-4 rounded-br-full  border-light-primary-color dark:border-dark-primary-color lg:left-[25.2px] -left-[7.1458px] top-2.5  flex-1 lg:-top-3"></div>
              <div
                role="button"
                onClick={() => {
                  setBackend(false);
                  setTools(true);
                  setFrontEnd(false);
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 1200);
                }}
                className={`flex items-center gap-x-2 text-sm h-[75px] w-[75px]  justify-center p-0.5 cursor-pointer  uppercase font-FiraCode rounded-[2rem] absolute top-[50px] -right-16 lg:-right-7 scale-75 rotate-45  border-base-200 text-base-200 font-bold duration-500 transform ${
                  Tools ? "boxSkills" : "boxSkills2"
                }  `}
              >
                <div className="w-full rounded-[2rem]  flex items-center justify-center h-full dark:bg-dark-primary-color bg-gradient-to-r from-emerald-300 to-sky-400">
                  <span
                    className={`-rotate-45 font-manrope tracking-wider duration-500 transform ${
                      Tools
                        ? "text-dark-primary-color dark:text-light-primary-color"
                        : "text-dark-primary-color/30 dark:text-light-primary-color/30"
                    }`}
                  >
                    Tools
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-x-3 mx-5  px-[76px]   lg:mx-auto"></div>
          </div>

          <div className="w-full flex-col flex items-center  justify-center">
            {loading ? (
              <>
                <div className="w-full flex items-center justify-center h-[200px]">
                  <button className="ui-btn">
                    <span>
                      <Loader />
                    </span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div
                  role="button"
                  className="grid md:grid-cols-3 lg:grid-cols-4 max-w-[940px] grid-cols-2 mx-auto pb-10 gap-x-4  gap-y-8 mt-14"
                >
                  {FrontEnd &&
                    FrontEndOptions?.map((x: any, i: any) => (
                      <>
                        <div className="relative  mx-auto ">
                          <div className="w-[40px] rounded-xl  rotate-45 dark:bg-light-primary-color bg-dark-primary-color outline-light-primary-color dark:outline-dark-primary-color outline  p-px lg:scale-100 scale-90 h-[40px] -left-2 -top-[19px] lg:left-2  z-20 flex items-center justify-center   absolute ">
                            {x.name === "CSS" && (
                              <IoLogoCss3 className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Tailwind" && (
                              <SiTailwindcss className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "React Router" && (
                              <SiReactrouter className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Aceternity" && (
                              <GiCandlebright className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "ShadCn" && (
                              <SiShadcnui className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Locomotive" && (
                              <GiSteamLocomotive className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Redux" && (
                              <TbBrandRedux className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "TypeScript" && (
                              <BiLogoTypescript className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "HTML" && (
                              <FaHtml5 className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "JavaScript" && (
                              <TbBrandJavascript className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "ReactJs" && (
                              <TbBrandReact className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Firebase" && (
                              <TbBrandFirebase className="-rotate-45 text-primary-color text-xl" />
                            )}
                          </div>
                          <div className="dark:bg-light-primary-color bg-dark-primary-color outline overflow-hidden outline-primary-color/80 relative h-[90px] lg:h-[90px] w-[150px] items-center justify-center lg:w-[200px] flex rounded-xl py-3 -z-0 ">
                            <div className="w-full h-full  items-center flex justify-center flex-col">
                              <h1 className="font-bold flex  dark:text-dark-primary-color text-light-primary-color font-Space text-center">
                                {x.name}{" "}
                              </h1>
                              <h1 className="flex tracking-wider font-Rubik max-md:text-xs text-sm  text-center">
                                {x?.frame}{" "}
                              </h1>
                              <div className="w-full flex items-center justify-center  ">
                                <Rating
                                  readonly={true}
                                  stop={5}
                                  initialRating={x.level}
                                  emptySymbol={emptyRating}
                                  fullSymbol={fillUpRating}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  {Tools &&
                    ToolsOptions?.map((x: any, i: any) => (
                      <>
                        <div className="relative">
                          <div className="w-[40px] rounded-xl  rotate-45 dark:bg-light-primary-color bg-dark-primary-color outline-light-primary-color dark:outline-dark-primary-color outline  p-px lg:scale-100 scale-90 h-[40px] -left-2 -top-[19px] lg:left-2  z-20 flex items-center justify-center   absolute ">
                            {x.name === "Git" && (
                              <FaGitAlt className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Github" && (
                              <PiGithubLogoBold className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "VSCode" && (
                              <TbBrandVscode className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Postman" && (
                              <SiPostman className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Figma" && (
                              <FaFigma className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Vercel" && (
                              <TbBrandVercel className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Notion" && (
                              <RxNotionLogo className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Netlify" && (
                              <SiNetlify className="-rotate-45 text-primary-color text-xl" />
                            )}
                          </div>
                          <div className="dark:bg-light-primary-color bg-dark-primary-color outline overflow-hidden outline-primary-color/80 relative h-[90px] lg:h-[90px] w-[150px] items-center justify-center lg:w-[200px] flex rounded-xl py-3 -z-0 ">
                            <div className="w-full h-full  items-center flex justify-center flex-col">
                              <h1 className="font-bold flex  dark:text-dark-primary-color text-light-primary-color font-Space text-center">
                                {x.name}{" "}
                              </h1>
                              <h1 className="flex tracking-wider font-Rubik max-md:text-xs text-sm  text-center">
                                {x?.frame}{" "}
                              </h1>
                              <div className="w-full flex items-center justify-center  ">
                                {" "}
                                <Rating
                                  readonly={true}
                                  stop={5}
                                  initialRating={x.level}
                                  emptySymbol={emptyRating}
                                  fullSymbol={fillUpRating}
                                  className=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  {Backend &&
                    BackendOptions?.map((x: any, i: any) => (
                      <>
                        <div className="relative">
                          <div className="w-[40px] rounded-xl  rotate-45 dark:bg-light-primary-color bg-dark-primary-color outline-light-primary-color dark:outline-dark-primary-color outline  p-px lg:scale-100 scale-90 h-[40px] -left-2 -top-[19px] lg:left-2  z-20 flex items-center justify-center   absolute ">
                            {x.name === "JWT" && (
                              <SiSecurityscorecard className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "NodeJs" && (
                              <TbBrandNodejs className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "Express" && (
                              <SiExpress className="-rotate-45 text-primary-color text-xl" />
                            )}
                            {x.name === "MongoDB" && (
                              <BiLogoMongodb className="-rotate-45 text-primary-color text-xl" />
                            )}
                          </div>
                          <div className="dark:bg-light-primary-color bg-dark-primary-color outline overflow-hidden outline-primary-color/80 relative h-[90px] lg:h-[90px] w-[150px] items-center justify-center lg:w-[200px] flex rounded-xl py-3 -z-0 ">
                            <div className="w-full h-full  items-center flex justify-center flex-col">
                              <h1 className="font-bold flex  dark:text-dark-primary-color text-light-primary-color font-Space text-center">
                                {x.name}{" "}
                              </h1>
                              <h1 className="flex tracking-wider font-Rubik max-md:text-xs text-sm  text-center">
                                {x?.frame}{" "}
                              </h1>
                              <div className="w-full flex items-center justify-center  ">
                                {" "}
                                <Rating
                                  readonly={true}
                                  stop={5}
                                  initialRating={x.level}
                                  emptySymbol={emptyRating}
                                  fullSymbol={fillUpRating}
                                  className=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
