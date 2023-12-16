import { motion, useViewportScroll, useTransform } from "framer-motion";

const Framer2 = () => {
  return (
    <div className="flex h-[100px] items-center">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 0 }}
        animate={{
          x: 10,
          y: 0,
          scale: 2,
        }}
        // exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, scale: 3, x: 200 }}
        //   drag
      >
        <div className="w-[100px] h-[100px] bg-pink-500"></div>
      </motion.div>
    </div>
  );
};

export default Framer2;
