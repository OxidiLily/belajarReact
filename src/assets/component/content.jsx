import Content from "../fragments/project"
import Footer from "../fragments/footer"
import Content2 from "../fragments/project2";

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
        <p className="flex justify-center text-center bg-gray-900 text-white text-5xl">Project</p>
        <div className="flex items-center pt-10 justify-center bg-gray-900">
            <Content/>
        </div>
        <div className="flex items-center pt-10 justify-center bg-gray-900">
            <button  onClick={Show} id="btnShow"
                className="overflow-hidden flex items-center justify-center w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
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
            </button>
            <div className="hidden" id="content">
                <Content2/>
                <div className="flex items-center pt-10 justify-center bg-gray-900">
                    <button  onClick={Close} id="btnClose"
                    className="overflow-hidden flex items-center justify-center w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
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
                        >Close?</span
                    >
                    </button>
                </div>
            </div>
        </div>
        <div>
           <Footer/>
        </div>
        </>
    )
}



export default Project