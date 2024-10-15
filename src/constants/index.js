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
    meta,
    shopify,
    tesla,
    starbucks,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    summarizer,
    imagnify,
    ugv
  } from "../assets";
  import edgeforce from '../assets/company/edgeforce.png'
  
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
      title: "Responsive Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data scientist",
      icon: creator, },
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
      title: "Full stack Developer",
      company_name: "Edgeforce Solutions",
      icon: edgeforce,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js, Node, Express and other related technologies.",
        "Collaborating with cross-functional teams including data-scientists, VR game developers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Priyank proved me wrong.",
      name: "Rouf Syed",
      designation: "SDE-II",
      company: "Pine Labs",
      image: "https://randomuser.me/api/portraits/lego/4.jpg",
    },
    {
      testimonial:
        "I've never met a developer who truly cares about their clients' success like Priyank does.",
      name: "Steve Jobs",
      designation: "COO",
      company: "Apple Inc.",
      image: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    {
      testimonial:
        "After Priyank optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Elon Musk",
      designation: "CEO",
      company: "Tesla",
      image: "https://randomuser.me/api/portraits/lego/7.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI Webpage / Article Summarizer - Sumz",
      description:
        "Simplify your reading with AI Summarizer, an open source article summarizer that transforms lengthy articles into short clear and concise digestible paragraphs using GPT-3.5",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
      ],
      image: summarizer,
      source_code_link: "https://github.com/l0eb",
    },
    {
      name: "Next-Imaginify",
      description:
        "Create and Edit either your own or generated images made by our AI, try different filters, make editing easy by simply prompting, upscale Images with ease with the help of prompts and AI, no longer do you need to learn photoshop to let your imagination run wild",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
      ],
      image: imagnify,
      source_code_link: "https://github.com/l0eb",
    },
    {
      name: "Unmanned Ground Vehicle - V2",
      description:
        "An Autonomous Vehicle that can navigate accordingly to it's environment avoiding obstacles. Worked on Obstacle Detection and Avoidance Framework and sensor integration with A* pathfinding",
      tags: [
        {
          name: "APIs",
          color: "blue-text-gradient",
        },
        {
          name: "deep learning",
          color: "green-text-gradient",
        },
        {
          name: "ROS",
          color: "pink-text-gradient",
        },
      ],
      image: ugv,
      source_code_link: "https://github.com/l0eb",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
