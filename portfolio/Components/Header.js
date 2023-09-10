import Image from "next/image";
import Link from "next/link";

import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <Image src={'/UV_LOGO1.svg'} width={220} height={48} alt="" priority={true} />
            {/* <svg height="80" width="300">
              <text
                x="0"
                y="60"
                fill="#0000f0"
                className="text-5xl italic font-bold tracking-wider opacity-30"
              >
                Maria Virk
              </text>
            </svg> */}
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
