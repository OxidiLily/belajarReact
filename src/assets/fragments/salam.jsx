import Github from "./github"
import Linkedin from "./linkedin"
function Salam(){
    return (
        <>
        <p className='text-green-700 text-2xl'>Halo Semua 👋, Saya</p>
        <p className='font-mono text-4xl'>Tekad Agung Nugroho</p>
        <p className="text-lg">Web Developer | IT enthusiast</p>
        <p className='text-xl italic'>Python, PHP, Javascript</p>
        <div className="mt-10 grid grid-flow-col auto-cols-max ">
        <Github/>
        <Linkedin/>
        </div>
        </>
    )
}

export default Salam