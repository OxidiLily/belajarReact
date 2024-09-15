import Salam from '../fragments/salam'
import profile from '../../images/profile.png'
import Time from '../fragments/time'
function Welcome() {
    return (
        <>
        <div className='bg-gray-900 text-white pl-5 pt-2 font-mono float-start'>
            <Time/>
        </div>
        <div className="bg-gray-900 w-full h-auto pt-1 md:pt-56">
            <div className="flex-nowrap md:flex md:grid-flow-col auto-cols-max gap-4 justify-start text-white">
                <div className="flex-wrap pl-10  md:pl-20 lg:pl-36 xl:pl-56 pb-52 mt-10 mx-auto lg:mx-0">
                    <Salam></Salam>
                </div>
                <div className="mx-auto">
                    <img src={profile} alt="Foto Profile" className="object-contain rounded-b-full sm:min-w-48 lg:min-w-96 h-80 md:h-full w-full mx-auto -mt-40 min-[1920px]:ml-32"/>
                </div>
            </div>
        </div>
        <button type="button"></button>
        </>
    )
}

export default Welcome