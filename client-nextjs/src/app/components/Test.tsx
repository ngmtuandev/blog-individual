import { motion, useViewportScroll, useTransform } from "framer-motion";

const Test = () => {
  return (
    <div className="flex h-[100px] items-center justify-center">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 0 }}
        animate={{
          x: 400,
          y: 0,
          scale: 2,
          rotate: 275,
        }}
        // exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, scale: 3, x: 200 }}
        //   drag
      >
        <div className="w-[100px] h-[100px] bg-red-600"></div>
      </motion.div>
    </div>
  );
};

export default Test;
