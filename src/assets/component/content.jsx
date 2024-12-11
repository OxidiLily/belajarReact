import Content from "../fragments/project";
import Content2 from "../fragments/project2";
import Map from "../fragments/map";
import { motion, useAnimation } from 'framer-motion';
import Skill from "../fragments/skill";
function Project() {
  const controls = useAnimation();
  const controls2 = useAnimation();

  const Show = () => {
    const element = document.getElementById("content");
    const btn = document.getElementById("btnShow");
    const btnC = document.getElementById("btnClose");

    if (element) {
      element.classList.remove("hidden");
      btn.classList.add("hidden");
      btnC.classList.remove("hidden");
    }

    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });

    controls2.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 }
    });
  };

  const Close = () => {
    const element = document.getElementById("content");
    const btn = document.getElementById("btnShow");
    const btnC = document.getElementById("btnClose");

    if (element) {
      controls.start({
        opacity: 0,
        y: -50,
        transition: { duration: 0.5 }
      });

      controls2.start({
        opacity: 0,
        y: -50,
        transition: { duration: 0.5, delay: 0.2 }
      });

      setTimeout(() => {
        element.classList.add("hidden");
        btn.classList.remove("hidden");
        btnC.classList.add("hidden");
      }, 1000); // Delay
    }
  };

  return (
    <>
    <div className="mt-10 md:-mt-32">
        <Skill/>
    </div>
      <motion.p
        className="flex justify-center text-center bg-gray-900 text-white text-5xl font-semibold mt-20"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        PROJECT
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <div className="flex items-center mt-9 justify-center bg-gray-900">
          <Content />
        </div>
        <div className="flex items-center mt-10 justify-center bg-gray-900">
          <motion.button
            onClick={Show}
            id="btnShow"
            className="overflow-hidden flex items-center justify-center w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Show
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
            ></span>
            <span
              className="group-hover:opacity-100 flex items-center ml-3 justify-center group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
            >
              Show?
            </span>
          </motion.button>
          <motion.div
            animate={controls}
            initial={{ opacity: 0, y: -50 }}
            className="hidden"
            id="content">
            <Content2 />
            <div className="flex items-center pt-10 justify-center bg-gray-900">
              <motion.button
                animate={controls2}
                onClick={Close}
                id="btnClose"
                className="overflow-hidden flex items-center justify-center w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                initial={{ opacity: 0, y: 50 }}
              >
                Close
                <span
                  className="absolute w-36 h-32 -top-8 -left-2 bg-red-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
                ></span>
                <span
                  className="absolute w-36 h-32 -top-8 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
                ></span>
                <span
                  className="absolute w-36 h-32 -top-8 -left-2 bg-red-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
                ></span>
                <span
                  className="group-hover:opacity-100 flex items-center ml-3 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                >
                  Close?
                </span>
              </motion.button>
            </div>
          </motion.div>
          
        </div>
        
      </motion.div>
      
      <div className="mt-36">
        <motion.p
          className="flex justify-center text-center bg-gray-900 text-white text-5xl font-semibold mb-10"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          DOMISILI
        </motion.p>
          <motion.div 
            className="flex justify-center text-center bg-gray-900 text-white text-5xl font-semibold mb-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}>
          <Map />
        </motion.div>
      </div>
      
    </>
  );
}

export default Project;