import { motion } from "framer-motion";

const Framer3 = () => {
  return (
    <div className="flex h-[100px] items-center justify-center">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 0 }}
        animate={{
          x: 600,
          y: 0,
          scale: 2,
        }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, scale: 3, x: 200 }}
        drag
      >
        <div className="w-[300px] flex items-center justify-center gap-4 bg-yellow-400">
          <div className="w-[40%]">Vide</div>
          <div className="w-[60%] text-[13px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            ut error laudantium nobis iusto corrupti qui? Quam accusamus
            voluptas in alias quod at unde repudiandae provident, optio,
            laudantium possimus est?
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Framer3;
