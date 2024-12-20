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
          Contact
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-0">
          <div className="grid my-auto mx-auto w-full">
            <motion.a href="https://mail.google.com/mail/?view=cm&fs=1&to=contactme@oxidilily.my.id"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            target="_blank"
            rel="noopener noreferrer">
              <div
                class="mt-5 md:mx-6 mx-4 max-w-full pr-20 sm:px-0 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"
                ></div>
                <div class="p-6 relative z-10">
                  <p class="text-xl font-semibold text-gray-800">Email</p>
                  <p class="mt-2 text-gray-600">
                  contactme@oxidilily.my.id
                  </p>
                </div>
              </div>
            </motion.a>
            <motion.a href="https://discord.com/" target="_blank"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}>
              <div
              class="my-5 md:mx-6 mx-4 max-w-full pr-20 sm:px-0 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"
                ></div>
                <div class="p-6 relative z-10">
                  <p class="text-xl font-semibold text-gray-800">Discord</p>
                  <p class="mt-2 text-gray-600">
                  oxidilily
                  </p>
                </div>
              </div>
            </motion.a>
            <motion.a href="https://t.me/OxidiLily" target="_blank"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}>
              <div
              class="mx-4 md:mx-6 mb-5 max-w-full pr-20 sm:px-0 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"
                ></div>
                <div class="p-6 relative z-10">
                  <p class="text-xl font-semibold text-gray-800">Telegram</p>
                  <p class="mt-2 text-gray-600">
                  OxidiLily
                  </p>
                </div>
              </div>
            </motion.a>
          </div>
          
          <motion.div 
            className="float-right bg-gray-900 mb-10 mt-5 sm:h-1/2 md:mt-20 mx-6 "
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}>
          <Map />
        </motion.div>
        </div>
      </div>
      
    </>
  );
}

export default Project;