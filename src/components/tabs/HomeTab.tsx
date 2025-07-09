import "./home/home.css";
import CODING_NINJA_IMG from "../../assets/ninja.png";

const init_life = `const init_life = (breathing: "programming" | "other") => {
  while (breathing === "programming") {
    console.log("Fulfilled life");
  }
};

init_life("programming");
`;

export const HomeTab = () => {
  return (
    <div className="pt-4 md:pt-8 overflow-hidden">
      <div className="h-auto sm:h-[80vh] py-8 md:py-0 flex flex-col-reverse md:flex-row ">
        <div className="flex flex-col justify-center h-full w-full md:w-3/4  lg:w-1/2 p-4">
          <div className="px-0 sm:px-8 text-center md:text-left">
            <h1 className="animation-move-in-left font-bold text-2xl md:text-4xl lg:text-6xl text-transparent tracking-widest mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text">
              JAY SAVLANI
            </h1>
            <h2 className="animation-fade-in font-semibold text-lg lg:text-[22px] tracking-wider mb-6   text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 dark:from-yellow-400 dark:to-yellow-600  bg-clip-text">
              SOFTWARE ENGINEER
            </h2>
            <p className="text-base text-slate-200 dark:text-slate-600 tracking-wider animation-fade-in">
              Passionate and detail-oriented Software Engineer with 5 years of
              overall experience, including 3+ years specializing in React.js,
              Next.js, Node.js, TypeScript, and related modern web technologies.
              Skilled in building robust, user-friendly customer-facing and
              internal business applications. Proficient in optimizing React
              applications, leveraging TypeScript and JSDoc for maintainable
              code, and writing comprehensive unit tests. A Linux enthusiast,
              always eager to automate daily redundant tasks with bash scripting
              and Python to increase productivity.
            </p>
          </div>
        </div>
        <div className="grow flex justify-center">
          <img
            src={CODING_NINJA_IMG}
            className="h-[400px] animation-rotate-slight hover:rotate-12 transition-all"
          />
        </div>
      </div>
      <div className="px-3 mb-8 sm:mb-0 sm:px-0 py-4 sm:py-8 lg:py-20 flex  lg:flex-row sm:flex-col gap-6 sm:gap-14 flex-wrap items-center justify-center ">
        <p className="text-[100px] lg:text-[200px] text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text animation-pulse-slow">
          &lt;/&gt;
        </p>
        <code className="overflow-x-auto">
          <pre className="w-max py-3 text-sm sm:text-base lg:text-2xl text-transparent bg-gradient-to-r from-slate-200 to-slate-400 dark:from-slate-400 dark:to-slate-600 bg-clip-text">
            {init_life}
          </pre>
        </code>
      </div>
    </div>
  );
};
