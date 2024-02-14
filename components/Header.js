import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
	return (
		<header className=" pt-8 xl:pt-0  w-full flex items-center px-16 xl:px-0 z-50">
			<div className=" container mx-auto z-10">
        {/* <div>
          <Link href={'/'}> <Image src={'/logo.svg'} width={220} height={48}/></Link>
        </div> */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-center gap-y-6">
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
