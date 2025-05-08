import { CERTIFICATES } from "./_certificates";

const getYearsSince = (dt) => {
  const birthyear = new Date(dt).getTime();
  const current = new Date().getTime();
  const years = (current - birthyear) / 1000 / 60 / 60 / 24 / 365.25;
  const yearsRounded = Math.floor(years);
  return yearsRounded;
};

const numberToWord = (number) => {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return words[number];
};

// const oldestCommit = "https://github.com/danielmoessner/finance.danielmoessner.de/commit/307a6c7e701e59044a568e8083d2e6f4be03fb1e";
const programmingStartYear = "2017-01-01";

export const CV = {
  name: "Daniel Mössner",
  printname: "danielmoessner",
  title: "Full-Stack Engineer",
  location: "Munich, Germany",
  phone: "+49 176 3838 5646",
  email: "kontakt@danielmoessner.de",
  birthday: "1998-02-02",
  age: getYearsSince("1998-02-02"),
  linkedin: "https://www.linkedin.com/in/danielmoessner/",
  github: "https://github.com/danielmoessner",
  // oneliner: "A swiss army knife kind of Full-Stack Engineer, well versed in Python and Vue, aiming for maintainable code.",
  oneliner:
    "Full Stack Engineer - Interested in Software Architecture, DevOps, CI/CD, Python, Typescript, Domain-Driven-Design and aiming for better software faster.",
  summary: `More than ${numberToWord(
    getYearsSince(programmingStartYear)
  )} years of professional experience working with Python in various areas, including data management systems for market research, machinery rental services, government procurement, law clinic case management, and multiple smaller projects. Additionally deep understanding of Typescript, having built numerous frontends from the ground up. Experienced in setting up CI/CD Pipelines with GitHub Actions and automated testing and deployment.`,
  skills: {
    Backend: "Python, Django, Flask, FastAPI, JSON",
    Frontend: "Vue3, Typescript, TailwindCSS, HTMX, JSON",
    DevOps: "Docker, GitHub Actions, Terraform, AWS, Azure",
    Architecture: "Domain-Driven-Design, Event-Sourcing, Clean Architecture",
  },
  steps: [
    {
      date: "January 2025 - Now (Full-Time)",
      company: "Peter Park Systems GmbH",
      job: "Full-Stack Engineer",
      work: [
        "Working with NestJS, Vue3, Python, PostgreSQL, HTML and TailwindCSS.",
        "Working on current sprint tickets within a broad range of services and frontends.",
      ],
    },
    {
      date: "April 2023 - October 2024 (Full-Time)",
      company: "FactField GmbH (BurdaVerlag Data Publishing GmbH)",
      job: "Full-Stack Engineer",
      work: [
        "Worked with Python, Vue3, GitHub Actions, Docker, Django, HTML, JavaScript, TypeScript, Kubernetes, AWS, HTMX, Flask and TailwindCSS.",
        "Replaced the entire Data Management System with a new platform using Domain-Driven-Design and Event-Sourcing architecture.",
        "Changed the culture to use Continuous Delivery and built Deployment Pipelines to improve developer throughput.",
        "Setup the whole infrastructure with Kubernetes and Terraform on AWS.",
        "Mentored and taught the junior developer.",
        "Setup Flask Microservices for AI related tasks and web scrapers.",
        "Built API endpoints for interaction with external services.",
        "Improved the interfaces between different departments to better research, validate and deliver data.",
      ],
    },
    {
      date: "September 2022 - December 2022 (Freelance), February 2021 - January 2022 (Freelance)",
      company: "Law&Orga",
      job: "Full-Stack Engineer & Lead Developer",
      work: [
        "Worked with Python, Vue3, GitHub Actions, Docker, Django, HTML, JavaScript, TypeScript, Linux, Kubernetes and TailwindCSS.",
        "Worked as lead developer with four other developers on different features. Among other things, a custom mail server, a matrix chat server and a new encryption structure.",
        "Set up layered architecture and domain-driven design principles.",
        "Built a custom API-layer that is replacing Django REST Framework.",
        "Built a custom use-case layer that hosts all the business functionality and improves testing and logging.",
        "Worked on asymmetric and symmetric encryption, as the application deals with a lot of sensitive data.",
        "Set up GitHub Action Pipelines for continuous deployment and automatic testing.",
        "Rebuilt the old angular frontend in Vue3.",
        "Open-Source Code can be found on Github: https://github.com/lawandorga.",
      ],
    },
    {
      date: "January 2022 - September 2022 (Freelance), July 2021 - December 2021 (Full-Time)",
      company: "GovRadar GmbH",
      job: "Full-Stack Engineer",
      work: [
        "Worked with Python, Vue3, GitHub Actions, Docker, FastAPI, HTML, JavaScript, TypeScript, Linux, Azure and TailwindCSS.",
        "Wrote various FastAPI backend services.",
        "Built the Vue3 frontend from the ground up.",
        "Set up open-telemetry and integrated it with Elastic.",
        "Set up GitHub Action Pipelines for testing and automated deployment.",
        "Got their SaaS platform off the ground and saw their first users using it.",
        "Wrote my Bachelor's Thesis about Testing in Microservice Architectures with Daniel Schiessl (CTO) as supervisor.",
      ],
    },
    {
      date: "September 2017 - Today (Sole-Proprietor)",
      company: "Tortuga Webdesign",
      job: "Programmer",
      work: [
        "Worked with HTML, CSS, TailwindCSS, Bootstrap, Django, Gatsby, NextJS, React, Webflow and Wordpress.",
        "Built various websites for customers from many different areas.",
        "Hired a part-time employee.",
        "Used different tools, including NextJS, Gatsby, TailwindCSS, Bootstrap, Django, WordPress, Svelte, Webflow, Bare HTML and CSS, and Shopware.",
        "The portfolio can be found here: https://tortuga-webdesign.de.",
        "Founded Tortuga Webdesign 2017.",
      ],
    },
    {
      date: "October 2016 - June 2021 (Part-Time)",
      company: "Schätz GmbH",
      job: "Programmer",
      work: [
        "Worked with Python, Bootstrap, GitHub Actions, Django, HTML, Linux and TailwindCSS.",
        "Responsible for the technical aspects of the online shop.",
        "Helped to start a whole new business venture, machinery rental services.",
        "Designed and developed the website for the new machinery rental business.",
        "Designed and developed the machinery rental software with which invoices and rental contracts can be written.",
        "The shop can be found here: https://schaetz-shop.de/.",
        "The machine rental website can be found here: https://maschinenverleih-schaetz.de/.",
      ],
    },
    {
      date: "February 2018 - December 2022",
      company: "LMU Munich",
      job: "B.A.Sc. Computer Science (1.7)",
      work: [
        "Wrote my Bachelor's Thesis about Testing in Microservice Architectures.",
        "Had all exams completed by February 2021.",
      ],
    },
  ],
  certificates: CERTIFICATES,
};
