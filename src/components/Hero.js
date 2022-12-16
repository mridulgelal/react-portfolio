import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiFillBehanceCircle,
} from 'react-icons/ai';

import deved from '../assets/dev-ed-wave.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const line1 =
    ' Creating and propagating new ideas and exploring them more every';
  const line2 = ' passing day. ';

  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className=" text-center mt-2  " id="hero">
      <h2 className=" py-2 mt-1 pt-10 text-teal-600 font-medium  text-3xl">
        Mridul Gelal
      </h2>
      <h3 className=" text-xl py-1 ">Software Developer and Designer</h3>
      <motion.p
        className="py-5 leading-8  max-w-xl mx-auto"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {line1.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />
        {line2.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.p>

      <div className="text-3xl flex justify-center gap-7 py-3 text-gray-600">
        <a
          href="https://www.linkedin.com/in/mridul-gelal-7757451a9/"
          className=" hover:scale-150"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/mridulgelal"
          className=" hover:scale-150"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.behance.net/mridulgelal"
          className=" hover:scale-150"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillBehanceCircle />
        </a>

        <a
          href="https://www.youtube.com/@mree47/videos"
          className=" hover:scale-150"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube />
        </a>
        <a
          href="https://www.instagram.com/mridulgelal/"
          className=" hover:scale-150"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://twitter.com/Mree_dul"
          className=" hover:scale-150"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full h-80 w-80  overflow-auto "
      >
        <img src={deved} alt="mree" className="object-cover h-80 z-0 " />
      </motion.div>
      <div className="flex justify-center items-center text-center mt-5">
        <div className=" flex justify-evenly items-center bg-gradient-to-t bg-cyan-500 h-8 w-20  rounded-2xl  animate-bounce hover:cursor-pointer">
          <a href="mridul_resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
