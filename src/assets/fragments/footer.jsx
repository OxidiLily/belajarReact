import Github from "./github"
import Instagram from "./instagram"
import Linkedin from "./linkedin"
import Spotify from "./spotify"
import YouTube from "./youtube"
import logo from "/logo.png"
function Footer(){
    const Sosmed=()=>{
        const element = document.getElementById("sosmed");
        const btn = document.getElementById("btnSosmed");
        if (element) {
            element.classList.remove("hidden");
            btn.classList.add("hidden")
        }
        
    }
    const CloseSosmed=()=>{
        const element = document.getElementById("sosmed");
        const btn = document.getElementById("btnSosmed");
        if (element) {
            element.classList.add("hidden");
            btn.classList.remove("hidden")
        }
    }
    return(
        <>
            <div className="text-white p-4 flex justify-between items-center mt-20">
                <div className="ml-1 flex ">
                    <div className="grid grid-flow-col auto-cols-max">
                        <img src={logo} alt="Logo" className="w-14 pt-9" />
                        <p className="pt-12 ml-1 font-bold">Tekad Agung Nugroho</p>
                    </div>
                </div>
                <div className="mr-1 text-white">
                    <button onClick={Sosmed} id="btnSosmed" className="group sm:hidden relative inline-block w-[44px] p-[5px] h-[45px] m-[25px] pt-5">
                        <span
                            className="mx-[auto] my-[0] relative top-[12px] w-[30px] h-[6px] bg-white block [transition-property:margin,_width] group-hover:w-[20px] duration-200 after:absolute after:content-[''] after:mt-[12px] after:w-[30px] after:h-[6px] after:bg-white after:block after:left-[0] after:[transition-property:margin,_left] after:duration-200 group-hover:after:mt-[6px] group-hover:after:-left-[5px] before:absolute before:content-[''] before:-mt-[12px] before:w-[30px] before:h-[6px] before:bg-white before:block before:left-[0] before:[transition-property:margin,_width,_left] before:duration-200 group-hover:before:-mt-[6px] group-hover:before:w-[10px] group-hover:before:left-[5px]"
                        ></span>
                    </button>
                    <div className="mt-10 hidden sm:grid grid-cols-1 sm:grid-flow-col auto-cols-max justify-end" id="sosmed">
                        <button onClick={CloseSosmed} id="btnSosmed" className="group sm:hidden relative inline-block w-[44px] p-[5px] h-[45px] m-[25px] pt-5">
                            <span
                                className="mx-[auto] my-[0] relative top-[12px] h-[6px] bg-white block [transition-property:margin,_width] w-[20px] duration-200 after:absolute after:content-[''] after:mt-[12px] after:w-[30px] after:h-[6px] after:bg-white after:block after:left-[0] after:[transition-property:margin,_left] after:duration-200 after:mt-[6px] after:-left-[5px] before:absolute before:content-[''] before:-mt-[12px] before:w-[30px] before:h-[6px] before:bg-white before:block before:left-[0] before:[transition-property:margin,_width,_left] before:duration-200 before:-mt-[6px] before:w-[10px] before:left-[5px]"
                            ></span>
                        </button>
                        <a href="https://open.spotify.com/playlist/0nmFlvq7hlQ9ZJuWeVLYEa?si=4a05f9fb73734494" target="_blank">
                            <Spotify/>
                        </a>
                        <a href="https://www.youtube.com/@OxidiLily" target="_blank">
                            <YouTube/>
                        </a>
                        <a href="https://www.instagram.com/tekadagungn/" target="_blank">
                            <Instagram/>
                        </a>
                        <a href="https://github.com/OxidiLily" target="_blank">
                            <Github/>
                        </a>
                        <a href="https://www.linkedin.com/in/tekadagungn/" target="_blank">
                            <Linkedin/>
                        </a>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default Footer