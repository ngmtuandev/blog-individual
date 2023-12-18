import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";
import js from "../asset/image/js.png";
import css from "../asset/image/css.png";
import html from "../asset/image/html.png";
import mongoose from "../asset/image/mongoose.png";
import next from "../asset/image/next.png";
import node from "../asset/image/node.png";
import tailwind from "../asset/image/tailwind.png";
import ts from "../asset/image/ts.png";
import reactquery from "../asset/image/reactquery.png";
import java from "../asset/image/java.png";
const Framer1 = () => {
  return (
    <div className="flex h-[100px]">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 100 }}
        animate={{
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 2, x: 200 }}
      >
        <div className="w-[50%] h-[100px] flex flex-col lg:ml-48">
          <div className="flex gap-8 flex-wrap">
            <Image src={css} width={50} height={50} alt="skill"></Image>
            <Image src={html} width={50} height={50} alt="skill"></Image>
            <Image src={js} width={50} height={50} alt="skill"></Image>
            <Image src={ts} width={50} height={50} alt="skill"></Image>
            <Image src={tailwind} width={50} height={50} alt="skill"></Image>
            <Image src={mongoose} width={50} height={50} alt="skill"></Image>
            <Image src={next} width={50} height={50} alt="skill"></Image>
            <Image src={node} width={50} height={50} alt="skill"></Image>
            <Image src={reactquery} width={50} height={50} alt="skill"></Image>
            <Image src={next} width={50} height={50} alt="skill"></Image>
            <Image src={java} width={50} height={50} alt="skill"></Image>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Framer1;
