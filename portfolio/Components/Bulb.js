import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Bulb = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="absolute -left-12 -bottom-12 rotate-12 mix-blend-lighten animate-pulse duration-75 z-10 w-[300px] xl:w-[260px]"
    >
      <Image
        src={"/bulb3.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </motion.div>
  );
};

export default Bulb;
