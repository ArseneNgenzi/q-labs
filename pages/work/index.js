import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
	return (
		<div className=" mt-8 flex items-center justify-center ">
			<Circles />
			<div className="container flex flex-col justify-center mx-auto lg:h-[60vh] xl:h-[70vh] ">
				<div className=" flex flex-col xl:items-center  xl:flex-row  gap-x-8">
					<div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
						<motion.h2
							variants={fadeIn("up", 0.3)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className=" h2 xl:mt-12 flex   justify-center lg:justify-start"
						>
							Our work <span className=" text-accent">.</span>
						</motion.h2>
						<motion.p
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className=" mb-4 max-w-[400px] mx-auto lg:mx-0"
						>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores iste ex tempora aut quia itaque.
						</motion.p>
					</div>
					<motion.div
						variants={fadeIn("down", 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className=" w-full xl:max-w-[65%]"
					>
						<WorkSlider />
					</motion.div>
				</div>
			</div>
			<Bulb />
		</div>
	);
};

export default Work;
