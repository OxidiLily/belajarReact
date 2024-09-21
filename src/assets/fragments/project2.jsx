import BotMinecraft from "../../images/botAfk.png"
import ar from "../../images/ar.png"
function Content2 (){
    return (
        <>
        <section className="grid grid-cols-1 sm:flex-wrap sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 py-5">
            <div className="lg:hidden -mt-8 lg:mt-0 mx-auto">
                <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                        <a href="https://drive.google.com/drive/u/1/folders/1wixWhWZ6iUU6E7PsirHNUNV8E0XAxcIB">
                        <img src={ar} alt="Ar" className="relative object-fit h-40" />
                        </a>                    
                    </div>
                    <div className="p-6">
                        <a href="https://drive.google.com/drive/u/1/folders/1wixWhWZ6iUU6E7PsirHNUNV8E0XAxcIB" target="_blank">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Augmented Reality
                            </h5>
                        </a>
                        <p className="block font-sans text-base font-normal italic leading-relaxed text-inherit antialiased">
                        Membuat AR berbasis Android
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <a href="https://drive.google.com/drive/u/1/folders/1wixWhWZ6iUU6E7PsirHNUNV8E0XAxcIB">
                            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Go
                            </button>
                        </a>                    
                    </div>
                </div>
            </div>
            <div className="lg:flex mt-8 sm:-mt-8 lg:mt-0 mx-auto">
                <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    <a href="https://github.com/OxidiLily/BotMinecraft-docker" target="_blank">
                        <img src={BotMinecraft} alt="ChatBot" className="relative object-fit h-42" />
                    </a>
                    </div>
                    <div className="p-6">
                        <a href="https://github.com/OxidiLily/BotMinecraft-docker" target="_blank">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Bot Minecraft dengan Docker
                            </h5>
                        </a>                    
                        <p className="block font-sans text-base font-normal italic leading-relaxed text-inherit antialiased">
                        BotMinecraft, docker dan javascripts.
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <a href="https://github.com/OxidiLily/BotMinecraft-docker" target="_blank">
                            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Go
                            </button>
                        </a>
                    </div>
                </div>
            </div>    
        </section>
        </>
    )
}


export default Content2