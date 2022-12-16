const About = () => {
  return (
    <div
      id="about"
      className="  flex flex-col justify-between items-center  rounded-lg  min-h-[90vh] bg-red-400 "
    >
      <h2 className="text-2xl mt-32">About Me</h2>
      <div id="skills" className=" w-[80%] flex flex-col gap-4 ">
        <h4 className="text-center mb-10 text-sm">
          Team player software engineer with a can-do attitude, phenomenal time
          management skills, and a strong user focus. Always ready to take
          challenges in the field of Computer engineering and implement the
          expertise and experience gained in this field to develop complex
          project with efficiency and quality. <br />
        </h4>
        <div className="gap-3 flex flex-col min-w-100% ">
          <div className="overflow-hidden mb-4 text-xs flex rounded h-[25px]  bg-cyan-200">
            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center  bg-cyan-500 w-[90%] animate-pulse ">
              HTML
            </div>
          </div>
          <div class="overflow-hidden  mb-4 text-xs flex rounded h-[25px] bg-cyan-200">
            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center  bg-blue-600 w-[85%] ">
              CSS
            </div>
          </div>
          <div className="overflow-hidden mb-4 text-xs flex rounded h-[25px] bg-cyan-200">
            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-yellow-300 w-[80%] animate-pulse">
              JS
            </div>
          </div>
          <div className="overflow-hidden  mb-4 text-xs flex rounded h-[25px] bg-cyan-200">
            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400 w-[60%] ">
              ReactJS
            </div>
          </div>
          <div className="overflow-hidden mb-4 text-xs flex rounded h-[25px] bg-cyan-200">
            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-400 w-[70%] animate-pulse">
              Tailwind
            </div>
          </div>
          <div className="overflow-hidden  mb-4 text-xs flex rounded h-[25px] bg-cyan-200">
            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 w-[90%] ">
              Figma
            </div>
          </div>
          <div className="overflow-hidden  mb-4 text-xs flex rounded h-[25px] bg-cyan-200">
            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 w-[90%] animate-pulse">
              VsCode
            </div>
          </div>
          <div className="overflow-hidden  mb-4 text-xs flex rounded h-[25px] bg-cyan-200">
            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600 w-[95%] ">
              GitHub
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
