import React from "react";
import CourseCard from "./CourseCard";

const COURSES = [
  {
    id: 1,
    title: "Frontend Development",
    price: 6999,
    duration: "1 Month",
    bullets: [
      "HTML, CSS, JavaScript",
      "Tailwind & Responsive UI",
      "React + Projects",
      "Portfolio & Interview Prep",
    ],
  },
  {
      id: 2,
    title: "AI Tools & Generative AI",
    price: 19999,
    duration: "2 Months",
    bullets: [
      "ChatGPT, Gemini, Claude",
      "Prompt Engineering",
      "AI for Productivity & Coding",
      "Real-world AI Use Cases",
    ],
  },
  {
    id: 3,
    title: "DevOps & Cloud",
    price: 22999,
    duration: "3 Months",
    bullets: [
      "Docker & Kubernetes",
      "AWS Core Services",
      "CI/CD Pipelines",
      "Monitoring & Logging",
    ],
  },
  {
    id: 4,
    title: "Data Science & ML",
    price: 29999,
    duration: "4 Months",
    bullets: [
      "Python, Pandas, NumPy",
      "ML Algorithms",
      "Model Deployment",
      "Capstone Project",
    ],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-8 lmd:py-18 lg:py-24 bg-[#0B1220] text-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Courses & Pricing
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          Carefully crafted, job-oriented programs with live projects and mentor support.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          <strong className="text-white">Note:</strong> EMI & corporate training available.
        </div>
      </div>
    </section>
  );
}
