import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
	return (
		<div className="">
			{/* text */}
			<div className="w-full mt-8 h-full">
				<div className="text-center flex flex-col justify-center xl:text-left  container mx-auto md:h-[70vh] lg:h-[50vh] xl:h-[60vh]">
					{/* title */}
					<motion.h1
						variants={fadeIn("down", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h1 z-30"
					>
						Transforming Ideas <br /> Into{" "}
						<span className="text-accent">Digital Reality</span>
					</motion.h1>
					{/* Subtitle */}
					<motion.p
						variants={fadeIn("down", 0.3)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 z-30  px-4 text-justify py-2"
					>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem vel
						nostrum, totam minus distinctio autem quisquam repellendus modi
						atque rem.
					</motion.p>
					{/* btn */}
					<div className="flex justify-center xl:hidden relative">
						<ProjectsBtn />
					</div>
					<motion.div
						variants={fadeIn("down", 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className=" hidden xl:flex z-10"
					>
						<ProjectsBtn />
					</motion.div>
				</div>
			</div>
			{/* image */}
			<div className=" w-[100%] h-full absolute right-0 bottom-0">
				{/* bg-image */}
				<div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
				{/* particles */}
				<ParticlesContainer />
				{/* avatar img */}
				{/* <motion.div 
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{duration: 1, ease: 'easeInOut'}}
        className=" w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] xl:right-[15%]">
          <Avatar/>
        </motion.div> */}
			</div>
		</div>
	);
};

export default Home;
