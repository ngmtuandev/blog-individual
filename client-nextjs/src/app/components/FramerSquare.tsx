import { motion, useViewportScroll, useTransform } from "framer-motion";

const FramerSquare = () => {
  return (
    <div className="flex h-[100px] items-center justify-start">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 0 }}
        animate={{
          x: 300,
          y: 0,
          scale: 1,
          rotate: 300,
        }}
        // exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 3 }}
        whileHover={{ y: 30, x: 40, scale: 2 }}
        //   drag
      >
        <div className="w-[200px] h-[200px] border-2 border-cyan-500"></div>
      </motion.div>
    </div>
  );
};

export default FramerSquare;
