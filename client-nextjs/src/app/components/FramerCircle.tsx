import { motion, useViewportScroll, useTransform } from "framer-motion";

const FramerCircle = () => {
  return (
    <div className="flex  items-center justify-center">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 0 }}
        animate={{
          x: 400,
          y: 0,
          scale: 1,
        }}
        // exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 3 }}
        whileHover={{ rotate: 260, y: 30, x: 40, scale: 2 }}
        //   drag
      >
        <div className="w-[200px] h-[200px] rounded-full border-2 border-yellow-400"></div>
      </motion.div>
    </div>
  );
};

export default FramerCircle;
