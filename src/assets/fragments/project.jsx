import ar from "../../images/ar.png"
import casaOS from "../../images/casaos.png"
import chatbot from "../../images/chatbot.png"
function Content (){
    return (
        <>
        <section className="grid grid-cols-1 sm:flex-wrap sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 py-5">
            <div>
                <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <a href="https://chatbotgemini-oxidilily.streamlit.app/" target="_blank">
                    <img src={chatbot} alt="ChatBot" className="relative object-fit h-40" />
                </a>
                </div>
                <div className="p-6">
                    <a href="https://chatbotgemini-oxidilily.streamlit.app/" target="_blank">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Chatbot AI
                        </h5>
                    </a>                    
                    <p className="block font-sans text-base font-normal italic leading-relaxed text-inherit antialiased">
                    Membuat chatbot dengan AI Gemini. 
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <a href="https://chatbotgemini-oxidilily.streamlit.app/" target="_blank">
                        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Go
                        </button>
                    </a>
                </div>
                </div>
            </div>
            <div className="mt-8 sm:mt-0 mx-auto">
                <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    <a href="https://github.com/OxidiLily/HostingWeb-CasaOS" target="_blank">
                        <img src={casaOS} alt="CasaOS" className="relative object-fit h-40" />
                    </a>                
                </div>
                <div className="p-6">
                    <a href="https://github.com/OxidiLily/HostingWeb-CasaOS" target="_blank">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Hosting CasaOS
                        </h5>
                    </a>                    
                    <p className="block font-sans text-base font-normal italic leading-relaxed text-inherit antialiased">
                    Membuat hosting di CasaOS. 
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <a href="https://github.com/OxidiLily/HostingWeb-CasaOS" target="_blank">
                        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Go
                        </button>
                    </a>                    
                </div>
                </div>
            </div>
            <div className="mt-8 lg:mt-0 mx-auto">
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
        </section>
        </>
    )
}


export default Content