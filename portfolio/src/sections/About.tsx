import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/mapImage.png";
import { ToolboxItems } from "@/components/ToolboxItems";
import { CardHeader } from "@/components/CardHeader";
import { BsArrowRight } from "react-icons/bs";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "C/C++",
    iconType: HTMLIcon,
  },
  {
    title: "React.js",
    iconType: ReactIcon,
  },
  {
    title: "Tailwind css | Shadcn | Framer motion",
    iconType: CSSIcon,
  },
  {
    title: "Figma | GSAP | LOcomotive.js",
    iconType: CSSIcon,
  },
  {
    title: "frontend",
    iconType: CSSIcon,
  },
  {
    title: "MERN STACK",
    iconType: CSSIcon,
  },
  {
    title: "FireBase",
    iconType: CSSIcon,
  },
  {
    title: "Node.js",
    iconType: CSSIcon,
  },
  {
    title: "SQL",
    iconType: CSSIcon,
  },
  {
    title: "MongoDB",
    iconType: CSSIcon,
  },
  {
    title: "Express",
    iconType: CSSIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🏐",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎼",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "65%",
  },
  {
    title: "Traveling",
    emoji: "🧳",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, What I do, and what inspires me."
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
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="book cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond The Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />

              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="mapImage"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={smileMemoji}
                  alt="smile emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
