import Image from "next/image";

//  next link
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";


// icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
	return (
		<div className="mx-auto xl:mx-0">
			<Link href={"work"}>
				{/* <Image
					src={"/rounded-text.png"}
					width={141}
					height={148}
					alt=""
					className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
				/> */}
        {/* <HiArrowRight className=" absolute text-4xl group-hover:translate-x-2 transition-all duration-300" /> */}
		<button className=" btn rounded-full border bg-accent border-accent max-w-[170px] px-8 transition-all duration-500 flex items-center justify-center overflow-hidden hover:border-white/50 group hover:bg-transparent">
							<span className=" group-hover:-translate-x-[120%] group-hover:opacity-0 transition-all duration-500">
								Our work
							</span>
							<BsArrowRight className=" -translate-x-[-120%] opacity-0 group-hover:text-accent group-hover:flex group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-700 absolute text-[22px]" />
						</button>
			</Link>
		</div>
	);
};

export default ProjectsBtn;
