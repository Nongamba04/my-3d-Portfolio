import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  school,
  makenotes,
  jobit,
  tripguide,
  threejs,
  university,
  cssLogo,
  resume,
  fortifi,
  cssweb
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Coding Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Higher Secondary📖",
    company_name: "Emmanuel English Higher Secondary School",
    icon: school,
    iconBg: "#383E56",
    date: "March 2011 - Febuary 2020",
    points: [
      "SEBA",
      "Percentage : 78%",
    ],
  },
  {
    title: "College🧑‍🎓",
    company_name: "National Institute of Technology, Silchar",
    icon: university,
    iconBg: "#E6DEDD",
    date: "November 2022 - June 2026",
    points: [
      "Bachelor of Technology",
      "Computer Science & Engineering",
      "CGPA : 7.81",
    ],
  },
  {
    title: "Development Wing Member",
    company_name: "Computer Science Society",
    icon: cssLogo,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2024",
    points: [
      " Led development initiatives within the team, driving the implementation of key features for web projects.",
      " Mentored junior developers, fostering a culture of learning and innovation within the development wing.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Make Notes",
    description:
      "MakeNotes is a note-taking application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS for styling. It allows users to add, update, and delete notes with a simple and minimal design that is easy to use and responsive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: makenotes,
    source_code_link: "https://github.com/Nongamba04/MakeNotes",
  },
  {
    name: "FortiFi",
    description:
      "A Personal Web Crypto Wallet that enables users to search for Crypto coins, view market prices, and transfer crypto from wallet to wallet.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: fortifi,
    source_code_link: "https://github.com/Nongamba04/FortiFi/tree/master",
  },
  {
    name: "Official CSS Website",
    description:
      "The Official Website for Computer Science Society of NIT Silchar.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cssweb,
    source_code_link: "https://github.com/ComputerScienceSoceityNITS/CSSWebsite",
  },
];

export { services, technologies, experiences, projects };
