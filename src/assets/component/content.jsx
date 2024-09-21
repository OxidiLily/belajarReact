import Content from "../fragments/project"
import Date from "../fragments/date"
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
            <button onClick={Show} id="btnShow" className=" bg bg-red-600 p-3 px-10 rounded-2xl text-white">
                Show
            </button>
            <div className="hidden" id="content">
                <Content2/>
                <div className="flex items-center pt-10 justify-center bg-gray-900">
                    <button onClick={Close} id="btnClose" className="hidden bg-red-600 p-3 px-10 rounded-2xl text-white">
                    Close
                    </button>
                </div>
            </div>
        </div>
        <div className="bg-gray-900 text-center mx-auto justify-center items-center p-5 text-white">
            <Date/>
        </div>
        
        </>
    )
}



export default Project