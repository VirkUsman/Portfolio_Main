import Image from "next/image"


const TopLeftImg = () => {
    return (
        <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl-[400px] opacity-50">
            <Image src='/space_640.png' width={640} height={432} alt=""/>
        </div>
    );
}

export default TopLeftImg;