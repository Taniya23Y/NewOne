import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Typescript",
  "Redis",
  "MongoDB",
  "Search Optimized",
  "MERN",
  "Frontend",
  "Javascript",
  "React",
  "Design",
  "Development",
  "testing",
  "Maintainable",
  "Responsive",
];

export const TapeSection = () => {
  return (
    <div className="py-20 lg:py-28 pt-[10rem] overflow-x-clip ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm -rotate-12">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
