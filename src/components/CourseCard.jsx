import React from "react";
import { motion } from "framer-motion";

export default function CourseCard({ course, index }) {
  const discountPrice = Math.floor(course.price / 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative h-full flex flex-col bg-white/5 backdrop-blur 
                 border border-white/10 rounded-2xl p-6 
                 shadow-lg hover:shadow-amber-400/20 transition"
    >
      {/* Discount Badge */}
      <div className="absolute -top-3 right-4 bg-amber-400 text-[#071021] text-xs font-bold px-3 py-1 rounded-full">
        50% OFF
      </div>

      {/* TOP CONTENT */}
      <div>
        {/* Title */}
        <h3 className="text-lg font-semibold mb-1">
          {course.title}
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          Duration: {course.duration}
        </p>

        {/* Pricing */}
        <div className="mb-5">
          <span className="text-gray-400 line-through mr-2">
            ₹{course.price.toLocaleString()}
          </span>
          <span className="text-2xl font-bold text-amber-400">
            ₹{discountPrice.toLocaleString()}
          </span>
        </div>

        {/* Features */}
        <ul className="space-y-2 text-sm text-gray-300 mb-6">
          {course.bullets.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-amber-400">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA – FIXED SPACING + ALIGNED */}
      <a
        href="#register"
        className="mt-auto pt-2 block text-center bg-amber-400 
                   text-[#071021] py-2.5 rounded-lg 
                   font-semibold hover:scale-105 transition"
      >
        Enroll Now
      </a>
    </motion.div>
  );
}
