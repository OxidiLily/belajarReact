import Content from "../fragments/project"
import Date from "../fragments/date"
function Project(){
    return(
        <>
        <p className="flex justify-center text-center bg-gray-900 text-white text-5xl">Project</p>
        <div className="flex items-center pt-10 justify-center bg-gray-900">
            <Content/>
        </div>
        <div className="bg-gray-900 text-center mx-auto justify-center items-center p-5 text-white">
            <Date/>
        </div>
        
        </>
    )
}

export default Project