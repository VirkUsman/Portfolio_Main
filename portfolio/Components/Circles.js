import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[600px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={"/circles1.png"}
        width={640}
        height={640}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Circles;
