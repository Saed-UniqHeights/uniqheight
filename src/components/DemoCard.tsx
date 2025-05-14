import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DemoCard: React.FC<{
  id: string;
  name: string;
  path: string;
  img: string;
}> = ({ id, name, path, img }) => {
  return (
    <div className="md:w-96 lg:1/2 justify-center">
      <Link to={path}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-gray-100 rounded-2xl border border-gray-100 shadow-lg p-6 h-max"
        >
          <div className="rounded-xl overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              className="rounded-sm w-full h-auto object-cover"
              src={img}
              alt={name}
              style={{ aspectRatio: "4 / 3" }}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold">{name}</h3>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default DemoCard;
