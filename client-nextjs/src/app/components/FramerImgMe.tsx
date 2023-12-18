import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../asset/image/me.png";
const FramerImgMe = () => {
  return (
    <div className="flex h-[100px] items-center justify-center">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 0 }}
        animate={{
          x: 700,
          y: 0,
          scale: 2,
        }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, scale: 2, x: 400 }}
        drag
      >
        <div className="">
          <Image src={profilePic} alt="me" width={200} height={200}></Image>
        </div>
      </motion.div>
    </div>
  );
};

export default FramerImgMe;
