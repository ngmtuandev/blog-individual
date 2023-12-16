import { motion, useViewportScroll, useTransform } from "framer-motion";

const FramerInfo = () => {
  return (
    <div className="flex h-[100px]">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 100 }}
        animate={{
          //   x: 900,
          y: 0,
          scale: 1,
        }}
        // exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 2, x: 200 }}
        //   drag
      >
        <div className="w-[60%] h-[60%] bg-white">dsadsadsaddsad</div>
      </motion.div>
    </div>
  );
};

export default FramerInfo;
