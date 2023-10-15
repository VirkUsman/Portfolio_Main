import Link from "next/link";

import {
  RiGithubLine,
  RiXingLine,
  RiLinkedinLine,
  RiYoutubeLine,
  RiFacebookLine,
  RiTwitterXLine,
  RiFilePdf2Line,
} from "react-icons/ri";

import { BsArrowRight, BsArrowUpCircleFill, BsArrowUp } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/RiaVirk"}
        className=" hover:text-space transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.xing.com/profile/Maria_Virk"}
        className=" hover:text-space transition-all duration-300"
      >
        <RiXingLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/maria-virk"}
        className=" hover:text-space transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://www.youtube.com/channel/UCmetTl7zsZxADEgfTipAEwQ"}
        className=" hover:text-space transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={
          "https://www.facebook.com/people/Maria-Virk/pfbid0KZVhkR9HLgD61BG9hCYG7RvxipNHpD6Bq1u4LeB8i6xEpPxA15evzcPEKWqaiecrl/"
        }
        className=" hover:text-space transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://twitter.com/RiaVirk"}
        className=" hover:text-space transition-all duration-300"
      >
        <RiTwitterXLine />
      </Link>

      <a
        href="/MariaVirk_CV.pdf"
        download="MariaVirk_CV"
        className=" rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-500 flex items-center justify-center overflow-hidden hover:border-space group"
      >
        <span className="text-space group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-700">
          Resume
        </span>
        <BsArrowUp className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[22px]" />
      </a>
    </div>
  );
};
RiFilePdf2Line;
export default Socials;
