import React from "react";
import { motion } from "framer-motion";

export default function InstructorCard({ teacher }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 text-center shadow"
    >
      <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-gray-200">
        <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover" />
      </div>

      <h3 className="mt-4 text-xl font-semibold">{teacher.name}</h3>
      <div className="text-indigo-600 font-medium">{teacher.exp}</div>
      <p className="mt-3 text-gray-600 text-sm">{teacher.bio}</p>

      <div className="mt-4 flex gap-3 justify-center">
        <a className="text-sm px-3 py-2 border rounded hover:bg-gray-100">View Profile</a>
        <a className="text-sm px-3 py-2 bg-amber-400 rounded text-[#071021]">Book 1:1</a>
      </div>
    </motion.div>
  );
}
