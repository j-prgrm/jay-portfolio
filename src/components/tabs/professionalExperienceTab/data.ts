export type T_ProfessionalExperienceData = {
  title: string;
  designation: string;
  skills: string[];
  address: string;
  workDurationRange: string;
  src?: string;
  points: string[];
};

export const data: T_ProfessionalExperienceData[] = [
  {
    title: "People10 Technosoft Private Limited",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Hotwire turbo",
      "Stimulus",
      "AWS Lambda",
      "AWS CloudFront",
      "AWS S3",
      "CI/CD",
      "Hono",
      "SST (Serverless Stack)",
      "Infrastructure as Code (IaC)",
      "GraphQL",
      "Node.js",
      "tsDoc",
      "Tailwind CSS",
      "SASS",
      "Jest",
      "Cucumber",
      "Playwright",
      "React Testing Library",
      "GitHub Actions",
      "REST API",
      "Bash scripting",
      "Python scripting",
    ],
    designation: "Associate Development Lead",
    address: "Banglore",
    workDurationRange: "Apr 2025 - Present",
    points: [
      "Spearheaded the adoption of Turboframe and Hono for building a modern web application with serverless architecture deployed on AWS Lambda and CloudFront using SST and GitHub Actions.",
      "Led CI/CD setup using GitHub Actions and Infrastructure as Code principles to automate deployment and ensure seamless development-to-production workflows.",
      "Resolved critical performance issues by debugging race conditions, optimizing React useEffect calls, and reducing unnecessary component re-renders.",
      "Mentored junior developers through pair programming, regular code reviews, and knowledge-sharing sessions to accelerate team skill growth.",
      "Conducted technical interviews focusing on evaluating candidates’ system design, problem-solving ability, and development practices to support team hiring.",
      "Championed clean code practices and scalability by enforcing separation of concerns in React applications.",
      "Owned delivery and technical execution of high-impact features by collaborating with cross-functional teams, ensuring project milestones were met efficiently.",
      "Developed performant and type-safe APIs using Hono, leveraging its lightweight middleware architecture to build scalable and maintainable server-side logic.",
    ],
  },
  {
    title: "People10 Technosoft Private Limited",
    skills: [
      "ReactJs",
      "NextJs",
      "GraphQL",
      "Typescript",
      "mobX",
      "Jest",
      "React Testing Library",
      "JSDoc",
      "Bash scripting",
      "python scripting",
    ],
    designation: "Software Engineer",
    address: "Banglore",
    workDurationRange: "Mar 2022 - Apr 2025",
    points: [
      "Developed GRAPHQL Api driven responsive and user friendly applications in React and Next.js with unit tests added using jest/React Testing Library for code maintainability.",
      "Implemented React context api’s, native state management in a mono repository.",
      "Implemented Google analytics in applications.",
      "Collaborated closely with client and UI/UX designers to implement matching Wireframe designs.",
      "Developed RESTful API driven Next.js application utilizing mobx state management library with observer subscription pattern for JSX and logic abstraction and implemented typescript for better developer experience and prevention of code bugs.",
      "Developed wrapper libraries in javascript with JSDoc for auto function usage prompts.",
      "Conducted code reviews and provided constructive and code optimization feedback to team members.",
      "Developed bash scripts, curl automation python scripts, productive python scripts for mono repositories for data extraction and productivity enhancement.",
    ],
  },
  {
    title: "upGrad",
    designation: "Student",
    skills: ["Java", "MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
    address: "online",
    workDurationRange: "Aug 2021 - Feb 2022",
    points: [
      "Enrolled in Java, MongoDb , Express , React , Node (MERN) course in upGrad.",
      "Created multiple end to end projects using Node.js Express.js for backend, React.js for frontend and mongodb for database.",
      "Successfully cleared all the exams and received certificate of completion.",
    ],
  },
  {
    title: "Engineering Technique",
    designation: "Application Engineer",
    skills: ["Solidwords", "VBA"],
    address: "Vadodara",
    workDurationRange: "Dec 2019 - Feb 2021",
    points: [
      "Worked as an application engineer in SOLIDWORKD 3D Designing software.",
      "Developed user interactive macros using VBA in SOLIDWORKS.",
    ],
  },
  {
    title: "Abellon Clean Energy",
    designation: "Graduate Engineer Trainee",
    skills: ["Mechanical Design", "Excel automation", "VBA"],
    address: "Ahmedabad",
    workDurationRange: "Dec 2018 - July 2019",
    points: [
      "Creating and maintaining Power plant daily reports in Excel.",
      "Automated excel sheets using vlookups and VBA in excel.",
      "MIS CAPEX Operations.",
    ],
  },
];
