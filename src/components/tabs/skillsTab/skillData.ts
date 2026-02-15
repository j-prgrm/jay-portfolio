import REACT_LOGO from "../../../assets/react.svg";
import JEST_LOGO from "../../../assets/Jest.svg";
import ELECTRON_LOGO from "../../../assets/electronjs-icon.svg";
import GRAPHQL_LOGO from "../../../assets/graphql.svg";
import NEXT_LOGO from "../../../assets/nextjs.svg";
import NODE_LOGO from "../../../assets/nodejs.svg";
import MOBX_LOGO from "../../../assets/mobx.png";
import DOCKER_LOGO from "../../../assets/Docker-Logos/docker-logos/SVG/docker-logo-blue.svg";
import TYPESCRIPT_LOGO from "../../../assets/typescript-design-assets/ts-logo-256.png";
import EXPRESS_LOGO from "../../../assets/icons8-express-js.svg";
import HTML_LOGO from "../../../assets/html.png";
import CSS_LOGO from "../../../assets/css-3.png";
import SASS_LOGO from "../../../assets/sass-1.svg";
import REDUX_LOGO from "../../../assets/redux.svg";
import REST_API_LOGO from "../../../assets/rest-api-icon.svg";
import BOOTSTRAP_LOGO from "../../../assets/bootstrap-logo.svg";
import TAILWIND_LOGO from "../../../assets/Tailwind_CSS_Logo.svg.png";
import PYTHON_LOGO from "../../../assets/python_logo.png";
import BASH_LOGO from "../../../assets/bash_logo.jpg";
import SVELTE_LOGO from "../../../assets/svelte_logo.svg";
import AWS_S3_LOGO from "../../../assets/Aamazon_s3.png";
import AWS_LAMBDA_LOGO from "../../../assets/AWS_lambda.png";
import AWS_CLOUDFRONT_LOGO from "../../../assets/AWS_cloudfront.webp";
import SST_LOGO from "../../../assets/SST.png";
import HOTWIRE_TURBO_LOGO from "../../../assets/Hotwire_turbo.png";
import STIMULUS_LOGO from "../../../assets/Stimulus_js.png";
import HONO_LOGO from "../../../assets/Hono_js.png";
import JAVA_LOGO from "../../../assets/Java.png";
import JAVA_SPRING_LOGO from "../../../assets/java-spring.png";

export type T_SKillData = {
  title: string;
  src: string;
  summary: string;
};

export const skillData: T_SKillData[] = [
  {
    title: "ReactJs",
    src: REACT_LOGO,
    summary:
      "React is a JavaScript library for building user interfaces, particularly for single-page applications. It enables developers to create reusable UI components that efficiently update and render based on data changes. React uses a declarative approach, allowing developers to describe how their UI should look at any given point in time, and it efficiently handles the rendering and updating of components through its virtual DOM (Document Object Model) reconciliation process. React's component-based architecture and use of JSX (JavaScript XML) make it a popular choice for building modern, interactive, and scalable web applications.",
  },
  {
    title: "Jest",
    src: JEST_LOGO,
    summary:
      "Jest is a popular JavaScript testing framework developed by Facebook. It is designed to simplify and automate the process of writing and executing tests for JavaScript code, particularly for React applications. Jest provides a comprehensive set of features for testing including assertions, test runners, mocking capabilities, and code coverage analysis. It supports modern JavaScript features such as ES modules and async/await functions out of the box. Jest's ease of use, fast execution speed, and integration with tools like React make it a favored choice for unit testing, integration testing, and snapshot testing in JavaScript projects.",
  },
  {
    title: "ElectronJs",
    src: ELECTRON_LOGO,
    summary:
      "Electron is an open-source framework developed by GitHub that allows developers to build cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript. It leverages Chromium and Node.js to provide a runtime environment for creating native-like applications for Windows, macOS, and Linux. Electron applications combine the power of web technologies with the capabilities of native desktop applications, enabling developers to create highly customizable, feature-rich desktop software that can access operating system APIs and interact with hardware devices. Electron is widely adopted by developers and organizations to build desktop applications ranging from simple utilities to complex productivity tools and desktop-based versions of web apps.",
  },
  {
    title: "GRAPHQL",
    src: GRAPHQL_LOGO,
    summary:
      "GraphQL is a query language and runtime for APIs that enables clients to request and receive precisely the data they need. Developed by Facebook, GraphQL provides a flexible, efficient, and declarative approach to fetching data from a server. It allows clients to specify the shape and structure of the data they require using a single endpoint, reducing over-fetching and under-fetching of data. GraphQL is independent of any specific database or storage engine, making it suitable for integrating with various backend systems. Its introspective nature allows for powerful tooling and a self-documenting API.",
  },
  {
    title: "NextJs",
    src: NEXT_LOGO,
    summary:
      "Next.js is a popular React framework that enables developers to build production-ready web applications with ease. It provides a powerful set of features including server-side rendering (SSR), static site generation (SSG), automatic code splitting, and routing out of the box. Next.js abstracts away complex configurations, allowing developers to focus on building UI components and features. It supports TypeScript, CSS-in-JS solutions like styled-components, and has built-in optimizations for performance and SEO. Next.js is widely used for building modern web applications that require enhanced performance, SEO capabilities, and scalability.",
  },
  {
    title: "Nodejs",
    src: NODE_LOGO,
    summary:
      "Node.js is a server-side JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code outside of a web browser, making it ideal for building scalable and efficient server-side applications. Node.js is event-driven and uses a non-blocking I/O model, which enables handling of multiple connections simultaneously without the overhead of threading. It has a rich ecosystem of npm packages and is widely used for building web servers, RESTful APIs, real-time applications, microservices, and more. Node.js is known for its performance, versatility, and developer-friendly features, making it a popular choice for modern backend development.",
  },
  {
    title: "MobX",
    src: MOBX_LOGO,
    summary:
      "MobX is a state management library for React and other JavaScript frameworks that simplifies the process of managing application state. It uses observables to automatically track dependencies between data and components, ensuring efficient re-rendering when state changes. MobX embraces a transparent and minimalistic approach, allowing developers to manage complex application state with ease using simple concepts like observable data, actions, and computed values. It provides a flexible and scalable solution for state management, offering predictable and optimized state updates without boilerplate code. MobX is well-suited for building maintainable and responsive applications with minimal cognitive overhead.",
  },
  {
    title: "Docker",
    src: DOCKER_LOGO,
    summary:
      "Docker is a platform that enables developers to build, ship, and run applications in containers. Containers are lightweight, standalone, and executable packages that include everything needed to run a piece of software, including code, runtime, libraries, and dependencies. Docker simplifies application deployment by providing a consistent environment across different infrastructure and operating systems. It allows developers to containerize their applications, isolate dependencies, and efficiently manage resources, making it easier to develop, deploy, and scale applications in a predictable and reproducible manner. Docker is widely used in modern software development for creating portable and self-contained environments for applications.",
  },
  {
    title: "Typescript",
    src: TYPESCRIPT_LOGO,
    summary:
      "TypeScript is a superset of JavaScript that adds optional static typing to the language, enhancing its scalability, maintainability, and tooling support. It allows developers to catch errors early during development and provides rich IDE support with features like auto-completion, refactoring, and type checking. TypeScript compiles down to plain JavaScript, making it compatible with any JavaScript runtime. It introduces modern language features such as interfaces, enums, generics, and advanced type system capabilities that enable developers to write more robust and reliable code for large-scale applications. TypeScript is widely adopted in the JavaScript ecosystem for building scalable and maintainable software projects.",
  },
  {
    title: "ExpressJs",
    src: EXPRESS_LOGO,
    summary:
      "Express.js is a minimalist and flexible Node.js web application framework that provides a robust set of features for building web and API applications. It simplifies the process of creating server-side logic by offering a lightweight, unopinionated architecture with powerful middleware capabilities. Express.js allows developers to define routes, handle requests and responses, manage sessions, and integrate with databases and other services easily. It is widely used in building RESTful APIs and server-side applications due to its simplicity, performance, and extensibility through a vast ecosystem of middleware and plugins.",
  },
  {
    title: "HTML",
    src: HTML_LOGO,
    summary:
      "HTML (HyperText Markup Language) is the standard markup language used to structure and present content on the World Wide Web. It consists of a series of elements that define the structure and semantics of web documents. HTML elements are composed of tags that enclose content and provide meaning to different parts of a webpage, such as headings, paragraphs, links, images, forms, and more. By using HTML, developers can create well-organized and accessible web pages that can be rendered by web browsers, enabling the display of text, images, multimedia, and interactive elements on the internet.",
  },
  {
    title: "CSS",
    src: CSS_LOGO,
    summary:
      "CSS (Cascading Style Sheets) is a styling language used to describe the presentation of HTML (and XML) documents. It allows developers to control the layout, appearance, and design of web pages, including colors, fonts, spacing, positioning, and responsiveness. CSS works by targeting HTML elements and applying styles through selectors and declarations. It enables the separation of content from presentation, making it easier to create visually appealing and consistent designs across websites. CSS is essential for creating modern, responsive, and visually engaging web interfaces.",
  },
  {
    title: "SASS",
    src: SASS_LOGO,
    summary:
      "Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that extends CSS with powerful features like variables, nesting, mixins, functions, and more. It provides a structured and efficient way to write stylesheets, allowing developers to write cleaner, more maintainable CSS code. Sass files are compiled into standard CSS that can be used in web projects. With Sass, developers can streamline their CSS workflow, reuse styles, and leverage advanced features to create flexible and modular stylesheets for modern web applications.",
  },
  {
    title: "Redux",
    src: REDUX_LOGO,
    summary:
      "Redux is a predictable state management library for JavaScript applications, commonly used with React. It provides a centralized store that holds the entire application state, which can be accessed and modified using pure functions called reducers. Redux follows a unidirectional data flow pattern, making it easier to manage and debug application state changes. Actions are dispatched to trigger state updates, and components can subscribe to changes in the Redux store to re-render when necessary. Redux is widely adopted for managing complex application states, enabling scalable and maintainable frontend architectures.",
  },
  {
    title: "REST API",
    src: REST_API_LOGO,
    summary:
      "REST (Representational State Transfer) is an architectural style used for designing networked applications, particularly web services. It relies on a set of principles for creating scalable, stateless, and interoperable APIs. RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE, etc.) to perform CRUD (Create, Read, Update, Delete) operations on resources identified by URLs. REST emphasizes a uniform interface, resource-based interactions, stateless communication, and layered system architecture. It is widely adopted for building web APIs that can be easily understood, maintained, and integrated with various clients and platforms.",
  },
  {
    title: "Tailwind",
    src: TAILWIND_LOGO,
    summary:
      "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for styling, enabling developers to build custom designs without writing traditional CSS. It promotes a responsive design approach by offering a variety of pre-configured classes for common tasks such as layout, spacing, typography, and colors. Tailwind CSS is highly configurable, allowing for easy customization through a central configuration file. This framework enhances productivity by minimizing the need for writing custom CSS and facilitating a consistent design system across a project.",
  },
  {
    title: "Bootstrap",
    src: BOOTSTRAP_LOGO,
    summary:
      "Bootstrap is a popular front-end framework for developing responsive and mobile-first web projects. It offers a comprehensive set of pre-designed components, such as grids, buttons, forms, and navigation elements, along with powerful JavaScript plugins. Bootstrap's extensive customization options and consistent design patterns help developers quickly create visually appealing and functional web interfaces. Its wide adoption and robust documentation make it a go-to choice for both beginners and experienced developers.",
  },
  {
    title: "BASH Scripting",
    src: BASH_LOGO,
    summary:
      "Bash scripting involves writing sequences of commands for the Bourne Again Shell (bash) to automate tasks in Unix-like operating systems. It utilizes shell scripting syntax to execute commands, perform file operations, and control program flow. Bash scripts are commonly used for system administration, task automation, and building complex workflows in Linux and macOS environments.",
  },
  {
    title: "Python Scripting",
    src: PYTHON_LOGO,
    summary:
      "Python scripting involves writing Python code to automate tasks, perform data manipulation, and build applications. Python's simplicity, readability, and extensive standard library make it a popular choice for scripting, allowing users to easily write scripts for various purposes such as system administration, web scraping, data analysis, and more. Python scripting is widely used across different domains, from software development to scientific computing and beyond.",
  },
  {
    title: "SvelteJs",
    src: SVELTE_LOGO,
    summary:
      "Svelte is a modern JavaScript framework designed for building fast, efficient web applications. Unlike traditional frameworks, Svelte shifts much of the work to compile time, producing highly optimized, minimal JavaScript code that runs in the browser. This approach results in faster load times and improved performance, as well as a more straightforward development experience by using a simple, declarative syntax. Additionally, Svelte's component-based architecture and reactive programming model make it an attractive choice for developers looking to create dynamic user interfaces.",
  },
  {
    title: "AWS S3",
    src: AWS_S3_LOGO,
    summary:
      "Amazon S3 (Simple Storage Service) is a scalable object storage service provided by Amazon Web Services (AWS). It allows users to store and retrieve any amount of data from anywhere on the web. S3 is designed for high durability, availability, and security, making it suitable for a wide range of use cases such as data backup, content distribution, and big data analytics. It provides features like versioning, lifecycle management, and access control to help manage data effectively. S3 is widely used for storing static assets, media files, and large datasets in cloud applications.",
  },
  {
    title: "AWS Lambda",
    src: AWS_LAMBDA_LOGO,
    summary:
      "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. You can use Lambda to run your code in response to events such as changes in data or system state, making it a key component of event-driven architectures. With AWS Lambda, you pay only for the compute time you consume, and it automatically scales your applications by running code in response to each trigger. This allows developers to build highly scalable and resilient applications without worrying about the underlying infrastructure.",
  },
  {
    title: "AWS CloudFront",
    src: AWS_CLOUDFRONT_LOGO,
    summary:
      "AWS CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. It integrates with other AWS services, such as S3 and EC2, to provide a seamless experience for developers. CloudFront offers features like edge caching, real-time metrics, and customizable content delivery options, making it an ideal choice for delivering static and dynamic web content, streaming media, and APIs at scale.",
  },
  {
    title: "SST (Serverless Stack)",
    src: SST_LOGO,
    summary:
      "SST (Serverless Stack) is an open-source framework that simplifies the development and deployment of serverless applications on AWS. It provides a set of tools and best practices for building serverless applications using AWS services like Lambda, API Gateway, and DynamoDB. SST allows developers to define their infrastructure as code, making it easier to manage and deploy serverless applications. With features like live Lambda development, easy API creation, and seamless integration with the AWS ecosystem, SST is a powerful choice for building modern serverless applications.",
  },
  {
    title: "Hotwire Turbo",
    src: HOTWIRE_TURBO_LOGO,
    summary:
      "Hotwire Turbo is a framework for building modern web applications without using much JavaScript. It speeds up page loads by only updating the parts of the page that change, rather than reloading the entire page. Turbo achieves this by using a combination of techniques, including HTML over the wire, which sends HTML instead of JSON from the server, and a set of JavaScript libraries that enhance the user experience. With Turbo, developers can create fast, responsive applications while writing less code and relying more on server-side rendering.",
  },
  {
    title: "Stimulus",
    src: STIMULUS_LOGO,
    summary:
      "Stimulus is a modest JavaScript framework that enhances HTML with behavior. It allows developers to add interactivity to web applications without the complexity of larger frameworks. Stimulus works by connecting HTML elements to JavaScript controllers, enabling developers to define how elements should respond to user interactions. It promotes a clean separation of concerns by keeping behavior in controllers while maintaining the structure in HTML. Stimulus is particularly useful for adding dynamic features to server-rendered applications, making it easy to enhance user interfaces without overwhelming complexity.",
  },
  {
    title: "Hono",
    src: HONO_LOGO,
    summary:
      "Hono is a lightweight and fast web framework for building APIs and web applications in Node.js. It provides a minimalistic approach to routing and middleware, allowing developers to create efficient and scalable applications with ease. Hono's focus on performance and simplicity makes it an ideal choice for building RESTful APIs and microservices, enabling developers to quickly prototype and deploy applications without unnecessary overhead.",
  },
  {
    title: "Java",
    src: JAVA_LOGO,
    summary:
      "Java is a class-based, object-oriented programming language widely used for building scalable backend services, enterprise applications, and Android apps. It runs on the Java Virtual Machine (JVM) and benefits from a mature ecosystem of libraries, frameworks, and tooling for robust, production-grade systems.",
  },
  {
    title: "Spring Boot",
    src: JAVA_SPRING_LOGO,
    summary:
      "Spring Boot is an opinionated framework built on Spring that simplifies creating production-ready Java applications. It offers auto-configuration, embedded servers, and convention-over-configuration to accelerate development of microservices and RESTful APIs.",
  },
];
