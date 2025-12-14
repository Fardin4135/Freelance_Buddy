import React from "react";
import { motion } from "framer-motion";

export default function InstructorCard({ teacher }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="h-full flex flex-col bg-white/5 backdrop-blur
                 border border-white/10 rounded-2xl p-6
                 text-center shadow-lg
                 hover:shadow-amber-400/20 transition"
    >
      {/* Image */}
      <div className="w-28 h-28 mx-auto rounded-full overflow-hidden
                      bg-white/10 border border-white/20">
        <img
          src={teacher.img}
          alt={teacher.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-white">
        {teacher.name}
      </h3>

      {/* Experience */}
      <div className="text-sm text-amber-400 font-medium">
        {teacher.exp} experience
      </div>

      {/* Bio */}
      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        {teacher.bio}
      </p>

      {/* CTA Buttons */}
      <div className="mt-auto pt-6 flex gap-3 justify-center">
        <a
          href="#"
          className="text-sm px-4 py-2 border border-white/20
                     rounded-md text-white
                     hover:bg-white/10 transition"
        >
          View Profile
        </a>

        <a
          href="#register"
          className="text-sm px-4 py-2 bg-amber-400
                     rounded-md font-semibold text-[#071021]
                     hover:scale-105 transition"
        >
          Book 1:1
        </a>
      </div>
    </motion.div>
  );
}
