import React from "react";
import CourseCard from "./CourseCard";

const COURSES = [
  {
    id: 1,
    title: "Frontend Development",
    price: "₹6,999",
    duration: "1 Month",
    bullets: ["HTML, CSS, JavaScript", "Tailwind & Responsive UI", "React + Projects", "Portfolio & Interview Prep"]
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    price: "₹24,999",
    duration: "4 Months",
    bullets: ["Node.js, Express, MongoDB", "REST & Authentication", "Deployment & CI/CD", "Real SaaS Project"]
  },
  {
    id: 3,
    title: "DevOps & Cloud",
    price: "₹22,999",
    duration: "3 Months",
    bullets: ["Docker, Kubernetes", "AWS Core Services", "CI/CD Pipelines", "Monitoring & Logging"]
  },
  {
    id: 4,
    title: "Data Science & ML",
    price: "₹29,999",
    duration: "4 Months",
    bullets: ["Python, Pandas, NumPy", "ML Algorithms", "Model Deployment", "Capstone Project"]
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-6">Courses & Pricing</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Carefully crafted paths with hands-on projects — pick the one that suits your goals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          <strong>Note:</strong> We also offer installment plans and corporate training. Contact for details.
        </div>
      </div>
    </section>
  );
}
