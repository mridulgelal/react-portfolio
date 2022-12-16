import { motion } from 'framer-motion';

const Project = ({ name, image, link }) => (
  <div className="  flex mt-10 flex-col   rounded-xl drop-shadow-2xl  hover:cursor-pointer">
    <motion.div whileHover={{ scale: 1.2 }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-xl"
          src={image}
          width="250"
          height="250"
          alt="project image "
        />

        <span className=" absolute  flex -mt-16  w-[250px]  z-10  opacity-60 bg-cyan-100 rounded-lg text-black hover:bg-slate-500  hover:text-white  ">
          <h4 className=" flex justify-center py-5 h-full w-full lowercase ">
            {name}
          </h4>
        </span>
      </a>
    </motion.div>
  </div>
);

export default Project;
