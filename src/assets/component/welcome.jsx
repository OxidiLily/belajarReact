import Salam from '../fragments/salam'
import profile from '../../images/profile.png'
import { motion } from 'framer-motion';
// import Cv from '../fragments/downloadcv'
const Welcome = () => {
    return (
        <>
        <div className="bg-gray-900 relative items-center justify-center w-full h-auto pt-1 md:pt-56">
            <div className="flex-nowrap md:flex md:grid-flow-col auto-cols-max gap-4 justify-start text-white">
                <motion.div 
                    className="flex-wrap pl-10 md:pl-20 lg:pl-36 xl:pl-56 pb-52  mt-10 mx-auto lg:mx-0"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <Salam/>
                    {/* <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <Cv/>
                    </motion.div> */}
                    
                </motion.div>
                <motion.div 
                    className="mx-auto"
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img 
                        src={profile} 
                        alt="Foto Profile" 
                        className="object-contain rounded-b-full sm:min-w-48 lg:min-w-96 h-80 md:h-full w-full mx-auto -mt-40 min-[1920px]:ml-32"
                    />
                </motion.div>
            </div>
        </div>
        </>
    )
}

export default Welcome