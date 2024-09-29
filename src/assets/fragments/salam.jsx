import { motion } from 'framer-motion';
import { useScroll } from "framer-motion";
import Github from "./github"
import Linkedin from "./linkedin"

const Salam = () => {
	const { scrollYProgress } = useScroll();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: {
				duration: 0.5
			}
		}
	};
    const logo = {
		hidden: { opacity: 0},
		visible: { 
			opacity: 1,
			transition: {
				duration: 0.5
			}
		}
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.3 }}
		>
			<motion.p variants={itemVariants} className='text-green-700 text-2xl'>
				Halo Semua 👋, Saya
			</motion.p>
			<motion.p variants={itemVariants} className='font-mono text-4xl'>
				Tekad Agung Nugroho
			</motion.p>
			<motion.p variants={itemVariants} className="text-lg">
				Web Developer | IT enthusiast
			</motion.p>
			<motion.p variants={itemVariants} className='text-xl italic'>
				Python, PHP, Javascript
			</motion.p>
			<div 
				className="mt-10 grid grid-flow-col auto-cols-max"
			>
                <motion.a 
                variants={logo}
                href="https://github.com/OxidiLily" target="_blank">
                <Github/>
                </motion.a>

                <motion.a
                variants={logo}
                href="https://www.linkedin.com/in/tekadagungn/" target="_blank" 
                className="ml-2 sm:mx-auto"
                >
                    <Linkedin/>
                </motion.a>
			</div>
		</motion.div>
	);
};

export default Salam;