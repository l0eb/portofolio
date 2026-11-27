import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] sm:py-5 py-6 sm:px-12 px-3 sm:min-h-[280px] min-h-[160px] gap-3 flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="sm:w-16 sm:h-16 w-12 h-12 object-contain" />
          <h3 className="text-white sm:text-[20px] text-[15px] font-bold text-center">
            {" "}
            {title}{" "}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn(",", 0.1, 1)}
        className="mt-4 text-white
        sm:text-[17px] text-[15px] max-w-3xl sm:leading-[30px] leading-[26px]"
      >
        I'm a skilled software developer with experience in JavaScript and
        python, and expertise in frameworks like React, Node.js, and collaborate
        closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems
      </motion.p>
      <div className="sm:mt-20 mt-10 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/*  */}
    </>
  );
};

export default SectionWrapper(About, "about");
