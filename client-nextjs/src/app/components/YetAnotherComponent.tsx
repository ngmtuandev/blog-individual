import * as React from "react";
import { motion } from "framer-motion";
import "../globals.css";

export const YetAnotherComponent = () => {
  return (
    <div className="wrapper">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
      >
        <span>ANOTHER COMPONENT</span>
      </motion.div>
    </div>
  );
};
