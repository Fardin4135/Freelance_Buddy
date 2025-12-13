import React from "react";
import { motion } from "framer-motion";

export default function CourseCard({ course }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <div className="text-sm text-gray-500">{course.duration}</div>
      </div>

      <ul className="mt-4 text-sm text-gray-600 space-y-1">
        {course.bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-xl font-bold">{course.price}</div>
        <a href="#register" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm">Enroll</a>
      </div>
    </motion.div>
  );
}
