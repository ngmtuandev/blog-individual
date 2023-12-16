import { motion, useViewportScroll, useTransform } from "framer-motion";

const FramerTitle = () => {
  return (
    <div className="flex h-[100px] items-center justify-center">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 0 }}
        animate={{
          x: 400,
          y: 0,
          scale: 1,
        }}
        // exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, scale: 1, x: 200 }}
        //   drag
      >
        <div className="w-[70%] flex-wrap">
          <span className="text-gray-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
            facere! Cumque id placeat omnis perspiciatis nostrum dicta ea eius
            voluptatibus distinctio maiores quam, natus illo at iste, odit
            corrupti temporibus!
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default FramerTitle;
