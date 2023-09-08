import Image from "next/image";

const Avatar = () => {
    return (
        <div className="hidden xl:flex xl:max-w-none" >
            <Image src={'/astronaut1.png'} width={640} height={640} alt="" className="translate-z-0 w-full h-full" />
        </div>
    );
}

export default Avatar;

