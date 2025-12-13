import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Tech Academy — Built by Fardin Alam</p>
        <p className="text-sm mt-2">Contact: info@techacademy.example | Phone: +91 00000 00000</p>
      </div>
    </footer>
  );
}
