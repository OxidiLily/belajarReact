import Content from "../fragments/project"
import Content2 from "../fragments/project2";
import { motion } from 'framer-motion';
function Project(){
    const Show=()=>{
        const element = document.getElementById("content");
        const btn = document.getElementById("btnShow");
        const btnC = document.getElementById("btnClose");
        if (element) {
            element.classList.remove("hidden");
            btn.classList.add("hidden")
            btnC.classList.remove("hidden")
        }
        
    }
    const Close=()=>{
        const element = document.getElementById("content");
        const btn = document.getElementById("btnShow");
        const btnC = document.getElementById("btnClose");
        if (element) {
            element.classList.add("hidden");
            btn.classList.remove("hidden")
            btnC.classList.add("hidden")
        }
    }
    return(
        <>
        <motion.p 
        className="flex justify-center text-center bg-gray-900 text-white text-5xl font-semibold mt-20"
        initial={{ opacity: 0, y: -120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        PROJECT
        </motion.p>
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
            <div className="flex items-center pt-10 justify-center bg-gray-900">
                <Content/>
            </div>
            <div className="flex items-center pt-10 justify-center bg-gray-900">
                <motion.button  
                onClick={Show} 
                id="btnShow"
                className="overflow-hidden flex items-center justify-center w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
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
                        >Show?</span
                    >
                </motion.button>
                <div className="hidden" id="content">
                    <Content2/>
                    <div className="flex items-center pt-10 justify-center bg-gray-900">
                        <motion.button  
                        onClick={Close} 
                        id="btnClose"
                        className="overflow-hidden flex items-center justify-center w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
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
                            >Close?</span
                        >
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
        
        </>
    )
}



export default Project