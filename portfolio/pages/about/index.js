import React, { useState } from "react";
import ParticlesContainer from "../../Components/ParticlesContainer";


import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaFigma,
  FaVuejs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";


const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { id: 1, title: <FaHtml5 /> },
          { id: 2, title: <FaCss3 /> },
          { id: 3, title: <FaBootstrap /> },
          { id: 4, title: <FaJs /> },
          { id: 5, title: <FaReact /> },
          { id: 6, title: <SiNextdotjs /> },
          { id: 7, title: <SiFramer /> },
          { id: 8, title: <SiTailwindcss /> },
          { id: 9, title: <SiTypescript /> },
          { id: 10, title: <FaVuejs /> },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { id: 1, title: <FaFigma /> },
          { id: 2, title: <SiAdobexd /> },
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Gold Medal- M.Sc. - IIUI University",
        stage: "2009 - 2011",
      },
      // {
      //   title: "Adobe Design Achievement Awards - Finalist",
      //   stage: "2009 - 2010",
      // },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Web Developer - Liaison Inc, USA.",
        stage: "2020 - ",
      },
      {
        title: "Sales and Marketing Manager - Salman Shahzaib Ent.",
        stage: "2011 - 2020",
      },
      {
        title: "Admin Manager - Dynamic Crop Sciences",
        stage: "2003 - 2009",
      },
      {
        title: "Agro Farm Manager - Dynamic Crop Sciences",
        stage: "2007 - 2009",
      },
      {
        title: "General Manager - Elite Agro Services",
        stage: "2000 - 2003",
      },
      {
        title: "Warehouse Manager - Elite Agro Services",
        stage: "1998 - 2000",
      },
      {
        title: "Intern - Elite Agro Services",
        stage: "1997 - 1998",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "CS50 - X -- Harvard University, Cambridge, MA, USA.",
        stage: "2023",
      },
      {
        title: "CS50 - Python -- Harvard University, Cambridge, MA, USA.",
        stage: "2023",
      },
      {
        title: "CS50 - Web -- Harvard University, Cambridge, MA, USA.",
        stage: "2023",
      },
      {
        title: "Responsive Web Design - freeCodeCamp",
        stage: "2023",
      },
      {
        title: "JavaScript Algorithms & Data Structures - freeCodeCamp",
        stage: "2023",
      },
      {
        title: "Frontend Development Libraries - freeCodeCamp",
        stage: "2023",
      },
      {
        title: "M.Sc. Media & Communication Studies - IIUI",
        stage: "2011",
      },
      {
        title: "Bachlor of Journalism - Bahauddin Zakariya University",
        stage: "2003",
      },
      {
        title: "REALSCHULABSCHLUSS - BISE-Multan",
        stage: "1998",
      },
    ],
  },
];

import Avatar from "../../Components/Avatar";
import Circles from "../../Components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] "
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Main Text Plus Intro */}
        <div className="flex-1 flex flex-col justify-center">
          <ParticlesContainer />

          <motion.h2
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Creativity Is <span className="text-space">Intelligence</span>{" "}
            Having Fun.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            4 years ago, I began my journey as a developer. Since then, I
            &#39;ve created in my team 14 web products. Optimized numerous
            applications for max-speed and scalability. Mentored my junior team
            members. Ensured the technical feasibility of 150+ UI/UX designs.
          </motion.p>
          {/* experience counter */}
          <motion.div
            variants={fadeIn("right", 1.0)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-space mb-2">
                  <CountUp start={0} end={4} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* 2nd Counter */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-space mb-2">
                  <CountUp start={0} end={14} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Web Products
                </div>
              </div>
              {/* Unused Counter No.1 */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 hidden">
                <div className="text-2xl xl:text-4xl font-extrabold text-space mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Not Used 1
                </div>
              </div>
              {/* Unused Counter No.2 */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 hidden">
                <div className="text-2xl xl:text-4xl font-extrabold text-space mb-2">
                  <CountUp start={0} end={500} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Not Used 2
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Information */}
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-xyz after:transition-all after:duration-300 "
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" overflow-auto py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">--</div>
                  <div className="text-space" >{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white" key={itemIndex}>
                          {icon.title}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
