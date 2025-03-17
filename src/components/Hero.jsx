import { motion } from "framer-motion";
import { resume } from "../assets";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import Typewriter from 'typewriter-effect';
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-8 `}
      >
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white flex flex-col gap-4`}>
              Hi, I'm 
              <span className="text-[#915EFF]"><Typewriter
  options={{
    strings: ['Nongamba.', 'into Web Dev.'],
    autoStart: true,
    loop: true,
  }}
  
/></span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop Web Apps and user <br className="sm:block hidden" />
              interfaces
            </p>
          </div>
        </div>

        <div className="group relative flex items-center justify-center 
        w-[10rem] h-[10rem] rounded-xl bg-transparent 
        backdrop-filter backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 hover:scale-105 
        transition-all duration-500 shadow-sm hover:shadow-gray-300 cursor-pointer 
        ">
  <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-[50px] md:group-hover:translate-y-[-100px] z-0">
    <h1 className="text-white text-md md:text-xl">Resume</h1>
  </div>
  <Link to="https://drive.google.com/file/d/1TrOjR184XjNsmM4vPvMrdkdIgeFv9dmU/view?usp=sharing" target="_blank" className="z-10">
    <img
      src={resume}
      alt="Resume"
      className="w-12 h-12 md:w-16 md:h-16 filter invert"
    />
  </Link>
</div>
      </div>

      {/* Uncomment if you want to use the ComputersCanvas component */}
      {/* <ComputersCanvas /> */}

      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
