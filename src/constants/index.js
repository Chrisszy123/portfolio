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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nftengine,
  airdrop,
  missions
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
    title: "Blockchain/Web3 Engineer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    title: "Frontend Engineer",
    company_name: "MKDOO NFT",
    icon: "https://monkeydoo.web.app/static/media/logo.82de36e7.png",
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked closely with the UX team to implement a responsive design and ensure a consistent user experience across all platforms",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "AlturaNFT",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQGqUARKO7PmKw/company-logo_200_200/company-logo_200_200/0/1667669166317/altura_nft_logo?e=1747872000&v=beta&t=LffWVYd8amZwHD9vFVkoghtVhWXAP4o30biOPVR_AmE",
    iconBg: "#383E56",
    date: "Jan 2023 - April 2023",
    points: [
      "Contributed to the development of a new Smart NFT system using TypeScript, React, and Node.js, resulting in a 25% increase in sales.",
      "Developed and maintained several internal tools using TypeScript and MongoDB, improving team productivity and efficiency by 30%.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Fullstack Engineer",
    company_name: "o1Node",
    icon: "https://media.licdn.com/dms/image/v2/C4E0BAQFamMJ6QRf9Zg/company-logo_200_200/company-logo_200_200/0/1637914472974/01node_logo?e=1747872000&v=beta&t=j_s_da23z41KkL0KArHgCUIPdd8jtjGKCoYybOzSeGg",
    iconBg: "#E6DEDD",
    date: "April 2023 - Sept 2023",
    points: [
      "led the development of mission-app,where  Users or crypto projects can create communities with unique community centric quests, where members of their communities can join the quest and members are rewarded if successfully completed and passed the quests.",
      "Developing and maintaining fullstack web applications using Remix.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "Software Engineer(Web3)",
    company_name: "MASQ",
    icon: "https://framerusercontent.com/images/6AY4GvsFEJD5JiG1KXIJ5zgo4wg.png",
    iconBg: "#383E56",
    date: "Nov 2023 - Present",
    points: [
      "Led a team of engineers tasked with developing MASQ premium extension/Browser that resulted in over $20k in revenue within 14 days of launch",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Built semantically structured full stack chrome extensions/mobile apps using reactjs, react native and SASS, leading to over 30% gain in revenue within 3 months..",
      "Led code reviews and providing constructive feedback to other developers.",
    ],
  },
 

];

const testimonials = [
  {
    testimonial:
      "Goodluck is a born leader, his communication skills and ability to organize a team is a big plus on his incredible problem solving skills using code.",
    name: "Kauri Hero",
    designation: "CEO",
    company: "MASQ",
    image: "https://pbs.twimg.com/profile_images/1433375704633135109/I0J4MC8H_400x400.jpg",
  },
  {
    testimonial:
      "Goodluck is a fast learner, he was able to pick up a completely foriegn technolgy and built a fullstack application within a very short period of time. he is your ideal for a fast paced work environment",
    name: "Claudiu",
    designation: "CEO",
    company: "o1node",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHwXb1ErPiZEQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1683437708692?e=1745452800&v=beta&t=Vliao32VsFV3cFT5ynrGFCUkzsSaF9y7WritV3Q-vTE",
  },
  {
    testimonial:
      "After Goodluck optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Di Militia",
    designation: "CTO",
    company: "MKDOO NFT",
    image: "https://portfolio-a8bd0.web.app/static/media/ola.864dcd2b3a2ef39a2f39.jpeg",
  },
];

const projects = [
  {
    name: "NFT ENGINE",
    description:
      "Web-based platform that allows users to create, buy and sell NFTs on the blockchain. This NFT Marketplace allows you to seamless create and Trade NFTs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "web3js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nftengine,
    source_code_link: "https://github.com/Chrisszy123/NFTEngine",
  },
  {
    name: " AIRDROP FAUCET",
    description:
      "API utilizes Solidity batch transfers, you can automatically airdrop your users for completing tasks using this api, it supports EVM compatible tokens.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: airdrop,
    source_code_link: "https://github.com/Chrisszy123/airdrop-api",
  },
  {
    name: "MISSIONS",
    description:
      "crypto projects can create communities with unique quests, where members of their communities can join the quest and are rewarded on completions of quests.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "ethersjs",
        color: "green-text-gradient",
      },
    ],
    image: missions,
    source_code_link: "https://github.com/Chrisszy123/missions",
  },
];

export { services, technologies, experiences, testimonials, projects };
