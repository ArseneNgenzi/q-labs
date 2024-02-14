import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
	return (
		<header className=" lg:pt-8 xl:pt-0  w-full flex items-center lg:px-16 xl:px-0 z-50">
			<div className=" container mx-auto z-10">
        <div className="lg:pt-8 flex flex-row justify-between items-center">
          {/* Logo */}
          <Link href={'/'}> <p className="h2 text-white">Q-<span className=" text-accent">Labs</span> </p></Link>
          {/* Socials */}
          <Socials/>
        </div>
      </div>
		</header>
	);
};

export default Header;
