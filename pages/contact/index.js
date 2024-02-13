import Circles from "../../components/Circles";

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Contact = () => {
	return (
		<div className=" mt-8">
			<div className=" container mx-auto  text-center xl:text-left flex items-center justify-center ">
				<div className=" flex flex-col w-full max-w-[700px] ">
					<motion.h2 
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=" text-2xl text-center mb-6">
						Get in <span className=" text-accent">touch.</span>
					</motion.h2>

					<motion.form 
            className=" flex-1 flex flex-col gap-4 w-full mx-auto"
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            >
						<div className=" flex gap-x-4 w-full">
							<input type="text" name="" placeholder="name" className="input" />
							<input
								type="text"
								name=""
								placeholder="email"
								className="input"
							/>
						</div>
						<input
							type="text"
							name=""
							placeholder="subject"
							className="input"
						/>
						<textarea
							name=""
							placeholder="message"
							className=" textarea"
						></textarea>
						<button className=" btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
							<span className=" group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
								Send
							</span>
							<BsArrowRight className=" -translate-x-[-120%] opacity-0 group-hover:flex group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-700 absolute text-[22px]" />
						</button>
					</motion.form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
