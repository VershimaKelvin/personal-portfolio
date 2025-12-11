import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  occupy,
  fourcore,
  crutech,
  aptech,
  hng,
  nbms,
  idec,
  vreg,
  cbtas,
  wacs,
  naptas,
  elite,
  c4h,
  tpsms,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineJava,
} from "react-icons/ai";

import {
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiDocker,
  SiArtixlinux,
  SiJunit5,
  SiSwagger,
  SiGithubactions,
  SiAppium,
  SiReact,
  SiTailwindcss,
  SiFlask,
  SiBootstrap,
  SiRubyonrails,
  SiJavascript,
  SiDjango,
  SiReplit,
  SiChartdotjs,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiJira,
  SiJenkins,
  SiApachejmeter,
  SiSelenium,
  SiPlaystation5,
  SiRuby,
  SiKotlin,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";

import { FaHardHat, FaJenkins, FaLinux, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiDart, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/16qZ2Ioc47FiS493ICzAG9bee1uyzN29h/view?usp=sharing";
export const repoLink = "https://github.com/VershimaKelvin";

export const callToAction =
  "https://www.linkedin.com/in/vershima-kelvin-09bb0a1a0/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: crutech,
    title: "Cross River University of Technology, Calabar, Nigeria",
    degree: "Bachelor of Science(B.Sc) in Computer Science",
    duration: "January 2016 - August 2020",
    content1:
      "Relevant Coursework:  Software Engineering, Database Management Systems, Data Structures & Algorithms, Artificial Intelligence",
    content2:
      "Final Year Project:  Designed and implemented a Registration and Clearance Guide mobile app for Computer Science department students, integrating Google Maps API to provide real-time campus navigation and location-based directioning",
  },
  {
    id: "education-2",
    icon: aptech,
    title: "Aptech Computer Education, Nigeria",
    degree: "Professional Training – Java Programming",
    duration: "April 2019 - September 2019",
    content1:
      "Completed an intensive Java programming course covering OOP concepts, data structures, exception handling, and JDBC, laying the foundation for later automation scripting in QA frameworks.",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article:
      "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-2",
    icon: polkadot,
    event: "Polkadot Hackathon: Europe Edition",
    position: "2nd Runner Up in the ink! Smart Contract Category",
    content1:
      "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
    content2: "",
    content3: "",
    github: "https://github.com/pranav2305/GreenTrust",
  },
  {
    id: "a-3",
    icon: lightspeed,
    event: "Warpspeed by Lightspeed",
    position: "1st Runner Up",
    content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
    content2: "Top 3 projects using Replit",
    content3: "1st Runner Up by Amazon Web Services (AWS)",
    article: "https://shorturl.at/fhjsT",
  },
  {
    id: "a-4",
    icon: dennisivy,
    event: "September Hackathon by Dennis Ivy",
    position: "Winner",
    content1:
      "Rated the best portfolio website among 450+ participants across the globe.",
    content2: "",
    content3: "",
    youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
    project: "https://parthmittal.netlify.app/",
  },
  {
    id: "a-5",
    icon: manipal,
    event: "Manipal Hackathon'22",
    position: "Consolation Prize",
    content1: "Top 10 among 500+ teams across India",
    content2:
      "Developed a cross-platform mobile application to address the problem of social cohesion.",
    content3: "",
    article: "https://shorturl.at/exEIQ",
  },
  {
    id: "a-6",
    icon: icon,
    event: "ICON Hyperbuild Hackathon",
    position: "Honorable Mention",
    content1:
      "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
    content2: "",
    content3: "",
    project: "https://devpost.com/software/green-trust-xj2w6g",
  },
  {
    id: "a-7",
    icon: ethforall,
    event: "ETHForAll 2023",
    position: "Top 3 Superfluid Projects",
    content1:
      "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
    content2: "",
    content3: "",
    project: "https://devfolio.co/projects/green-trust-ed14",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiDart,
        name: "Dart",
      },
      {
        id: "pl-2",
        icon: DiJava,
        name: "Java",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiSelenium,
        name: "Selenium",
      },
      {
        id: "f-2",
        icon: SiAppium,
        name: "Appium",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiFigma,
        name: "Figma",
      },
      {
        id: "t-2",
        icon: SiSwagger,
        name: "Swagger",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: FaLinux,
        name: "Linux CMD",
      },
      {
        id: "t-8",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-9",
        icon: SiJunit5,
        name: "JUnit",
      },
      {
        id: "t-10",
        icon: FaJenkins,
        name: "Jenkis",
      },
      {
        id: "t-11",
        icon: SiGithubactions,
        name: "GitHub actions",
      },
      {
        id: "t-12",
        icon: SiJira,
        name: "Jira",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Elite Software Automation",
    logo: elite,
    link: "https://elitesoftwareautomation.com/",
    positions: [
      {
        title: "Senior QA Engineer",
        duration: "January 2025 - Present",
        content: [
          {
            text: "Championed Quality Engineering maturity across teams, introducing shift-left testing practices, static analysis workflows, automated API validation, and continuous quality gates that prevented critical defects from entering UAT or production.",
            link: "",
          },
          {
            text: "Led automation of complex workflow engines powering permit approvals, regulatory applications, and inter-agency data exchanges ensuring end-to-end accuracy, auditability, and policy compliance through deterministic and data-driven test suites.",
            link: "",
          },
          {
            text: "Mentored QA and automation engineers, overseeing test strategy formulation, code reviews for automation scripts, and implementation of best practices for performance, reliability, and resilience testing.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "4Core Integrated Service, Abuja, Nigeria",
    logo: fourcore,
    link: "https://4coretech.com/",
    positions: [
      {
        title: "Senior QA Engineer",
        duration: "January 2025 - Present",
        content: [
          {
            text: "Partnered with government stakeholders to define acceptance criteria and ensure alignment between functional requirements, compliance standards, and technical implementation.",
            link: "",
          },
          {
            text: "Led QA efforts on major government automation projects, establishing QA policies, compliance checklists, and risk-based testing strategies to ensure delivery of secure and regulation-compliant systems.",
            link: "",
          },
          {
            text: "Directed end-to-end validation of digital platforms such as the National Blood Management System and the Import Duty Exemption System, focusing on data integrity, process automation accuracy, and citizen-facing usability.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Occupy Technologies, Abuja, Nigeria",
    logo: occupy,
    link: "https://www.occupyestate.com/",
    positions: [
      {
        title: "QA Automation Engineer",
        duration: "November 2023 - January 2025",
        content: [
          {
            text: "Designed and maintained automated test suites using Playwright for web applications and Appium for mobile platforms, increasing test coverage and reducing manual testing efforts",
            link: "",
          },
          {
            text: "Configured and maintained CI/CD pipelines using Jenkins and Docker to automate build, test, and deployment workflows for both web and mobile applications.",
            link: "",
          },
          {
            text: "Conducted extensive API testing using Postman, validating key product functionalities to ensure system reliability.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "HNG Tech",
    logo: hng,
    link: "https://genz.ad/",
    positions: [
      {
        title: "QA Engineer",
        duration: "August 2022 - January 2023",
        content: [
          {
            text: "Designed and developed comprehensive test plans and test cases in Zephyr, clearly defining objectives, scope, resources, and timelines to ensure robust test coverage for AI image generation software.",
            link: "",
          },
          {
            text: "Automated REST API tests using Postman and Newman, reducing manual testing time by 60% and increasing API test coverage by 20% through early defect detection.",
            link: "",
          },
          {
            text: "Integrated a CI/CD pipeline using GitHub Actions to automatically run regression test scripts on each pull request, ensuring consistent code quality and early detection of defects before deployment.",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "National Blood Management System - Federal Ministry of Health",
    github: "#",
    link: "https://portal.nbms.gov.ng/login",
    image: nbms,
    content:
      "Automated 200+ test cases for blood collection, storage, and transfusion workflows using Playwright (web) achieving a 70% defect detection rate pre-release.",
    stack: [
      {
        id: "icon-1",
        icon: AiOutlineJava,
        name: "Java",
      },
      {
        id: "icon-2",
        icon: SiSelenium,
        name: "Selenium",
      },
      {
        id: "icon-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "icon-4",
        icon: SiJenkins,
        name: "Jenkins",
      },
      {
        id: "icon-5",
        icon: SiDocker,
        name: "Docker",
      },
    ],
  },
  {
    id: "project-2",
    title: "Import Duty Exemption Certificate System - Ministry of Finance",
    github: "#",
    link: "https://www.idec.gov.ng/",
    image: idec,
    content:
      "Validated high-volume transaction workflows for customs duty exemptions, ensuring accuracy of tax computations and approval workflows. as well as creating automation scripts for regression and smoke tests, increasing release confidence and reducing post-release defects by 35%",
    stack: [
      {
        id: "icon-1",
        icon: AiOutlineJava,
        name: "Java",
      },
      {
        id: "icon-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "icon-3",
        icon: SiApachejmeter,
        name: "Jmeter",
      },
      {
        id: "icon-4",
        icon: SiJenkins,
        name: "Jenkins",
      },
      {
        id: "icon-5",
        icon: SiGit,
        name: "SiGit",
      },
    ],
  },
  {
    id: "project-3",
    title:
      "Vehicle Registry System(VREG) - National Vehicle Registry, Federal Ministry of Finance",
    github: "#",
    link: "https://vreg.gov.ng/",
    image: vreg,
    content:
      "Validated VIN registration workflows for both individual and agent accounts, covering single-VIN and bulk-VIN uploads, catching over 600 validation errors in HS Codes, VIN formats, and agent details before production launch. Conducted end-to-end payment flow tests using OTP verification and invoice generation, ensuring zero transaction failures under 5,000 simulated concurrent requests.",
    stack: [
      {
        id: "icon-1",
        icon: AiOutlineJava,
        name: "Java",
      },
      {
        id: "icon-2",
        icon: SiSelenium,
        name: "Selenium",
      },
      {
        id: "icon-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "icon-4",
        icon: SiSelenium,
        name: "Selenium",
      },
      {
        id: "icon-5",
        icon: FaJenkins,
        name: "Jenkins",
      },
      {
        id: "icon-6",
        icon: SiDocker,
        name: "Docker",
      },
    ],
  },
  {
    id: "project-4",
    title: "Occupy - Estate-centric Logistics Platform",
    github: "",
    link: "https://occupyestate.com",
    image: occupy,
    content:
      "Designed and executed functional and regression test suites for customer, rider, and supermarket dashboards, identifying defects across cart grouping, order assignment, and inventory synchronization workflows before public launch. Validated location- based product discovery and delivery routing, simulating estate - level traffic and delivery delays to ensure accurate ETAs and successful last - mile delivery.",
    stack: [
      {
        id: "icon-1",
        icon: AiOutlineJava,
        name: "Java",
      },
      {
        id: "icon-2",
        icon: SiSelenium,
        name: "Selenium",
      },
      {
        id: "icon-3",
        icon: SiAppium,
        name: "Appium",
      },
      {
        id: "icon-4",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "icon-5",
        icon: SiGit,
        name: "Git",
      },
    ],
  },
  {
    id: "project-5",
    title: "Central Billing and Tax Administration System (CBTAS)",
    github: "",
    link: "https://nigerigr.ngsirs.gov.ng/",
    image: cbtas,
    content:
      "Led the end-to-end QA process for the Central Billing and Tax Administration System, ensuring compliance with business logic, financial accuracy, and regulatory standards. Designed and executed manual and automated test cases for modules including taxpayer registration, billing, payment processing, and audit trails.",
    stack: [
      {
        id: "icon-1",
        icon: AiOutlineJava,
        name: "Java",
      },
      {
        id: "icon-2",
        icon: SiSelenium,
        name: "Selenium",
      },
      {
        id: "icon-3",
        icon: SiAppium,
        name: "Appium",
      },
      {
        id: "icon-4",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "icon-5",
        icon: SiGit,
        name: "Git",
      },
    ],
  },
  {
    id: "project-6",
    title: "Workers Aggregated Credit Scheme (WACS)",
    github: "",
    link: "https://wacs.ippis.gov.ng/",
    image: wacs,
    content:
      "Led the structured defect triage process across engineering, product, and architecture teams, improving issue prioritization and accelerating resolution for loan eligibility, repayment scheduling, and worker credit assessment workflows. Applied risk-based testing strategies using Java, Python, and Ruby to target high-impact modules such as credit scoring, loan approval logic, integrations with payroll data sources, and repayment deductions.",
    stack: [
      {
        id: "icon-1",
        icon: AiOutlineJava,
        name: "Java",
      },
      {
        id: "icon-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "icon-3",
        icon: SiRuby,
        name: "Ruby",
      },
      {
        id: "icon-4",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "icon-5",
        icon: SiGit,
        name: "Git",
      },
    ],
  },
  {
    id: "project-7",
    title: "National Payroll Tax Aggregation & Settlement System (NAPTAS)",
    github: "",
    link: "http://138.68.91.89:5900/",
    image: naptas,
    content:
      "Managed quality assurance for a high-throughput transaction settlement system, ensuring data integrity, compliance, and performance under load. Conducted extensive functional, data validation, anLed end-to-end QA activities for a high-volume payroll tax aggregation and settlement platform, ensuring accuracy of financial computations, data integrity across services, and compliance with regulatory workflows.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "icon-2",
        icon: SiSelenium,
        name: "Selenium",
      },
      {
        id: "icon-3",
        icon: AiOutlineJava,
        name: "Java",
      },
      {
        id: "icon-4",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "icon-5",
        icon: SiC,
        name: "C#",
      },
    ],
  },
  {
    id: "project-8",
    title: "Charity 4 Humanity (C4H)",
    github: "",
    link: "",
    image: c4h,
    content:
      "Engineered a modular, scalable automation framework using Kotlin, Selenium, and JavaScript, supporting cross-browser UI testing and reusable test components across the Charity 4 Humanity platform. Automated more than 80% of regression flows, including authentication, donation checkout, beneficiary management, and user profile journeys, significantly reducing manual testing efforts.",
    stack: [
      {
        id: "icon-1",
        icon: SiKotlin,
        name: "Kotlin",
      },
      {
        id: "icon-2",
        icon: SiSelenium,
        name: "Selenium",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript",
      },
      {
        id: "icon-4",
        icon: SiJira,
        name: "Jira",
      },
      {
        id: "icon-5",
        icon: SiPostman,
        name: "Postman",
      },
    ],
  },
  {
    id: "project-9",
    title: "Third Party Settlement System (TPSMS)",
    github: "",
    link: "",
    image: tpsms,
    content:
      "Built a scalable test automation framework using Ruby + Selenium for web flows and Appium for mobile components. Implemented reusable page objects, data-driven test layers, and CI/CD-triggered regression suites integrated via Jenkins, increasing test coverage across onboarding and settlement modules.",
    stack: [
      {
        id: "icon-1",
        icon: SiJira,
        name: "Jira",
      },
      {
        id: "icon-2",
        icon: SiSelenium,
        name: "Selenium",
      },
      {
        id: "icon-3",
        icon: SiAppium,
        name: "Appium",
      },
      {
        id: "icon-4",
        icon: SiJenkins,
        name: "Jenkins",
      },
      {
        id: "icon-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "icon-6",
        icon: SiRuby,
        name: "Ruby",
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "",
      },
    ],
    logo: gdsc,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/vershima-kelvin-09bb0a1a0/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/VershimaKelvin",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:kelvinityavyar@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://x.com/vershimakelvin?t=ymwbEYDCUccwvgSnnkXFHQ&s=09",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Vershima Kelvin",
  githubUsername: "Vershima Kelvin",
  tagLine: "Senior Quality Assurance Engineer",
  intro:
    "QA Engineer by day. Java Developer by night. Flutter Developer at heart. I code, therefore I am.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
