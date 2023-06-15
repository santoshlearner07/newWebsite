import React from "react";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className="text-center">
      <motion.div
        initial={{ x: -300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {" "}
        <h1 className="text-info">Santosh Nandiyawar</h1>
      </motion.div>
      <motion.div
        initial={{ x: 300, scale: 1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-warning"> FrontEnd Developer and Mentor from</h3>
        <h1 style={{ color: "blanchedalmond" }}>INDIA</h1>
      </motion.div>
      <motion.div
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          default: { ease: "linear" },
        }}
        whileInView={{ opacity: 1 }}
      >
        <img
          src={"https://wallpapercave.com/wp/wp5324431.jpg"}
          width="780px"
          height="500px"
        />
      </motion.div>
    </div>
  );
}

export default Home;
