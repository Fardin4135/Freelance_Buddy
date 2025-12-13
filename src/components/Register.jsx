import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      course: "Frontend Development",
      phone: "",
      message: ""
    }
  });

  const onSubmit = async (data) => {
    setStatus("Sending...");

    try {
      const res = await fetch("https://formspree.io/f/mkgdkrny", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setStatus("Successfully Registered!");
        reset();
      } else {
        setStatus("Error submitting form. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error. Try again.");
    }
  };

  return (
    <section id="register" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Register / Enquiry</h2>
        <p className="text-center text-gray-600 mb-6">
          Fill the form and our team will reach out within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow space-y-4"
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Full name"
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 3, message: "Name must be at least 3 characters" }
                })}
                className={`p-3 border rounded w-full ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address"
                  }
                })}
                className={`p-3 border rounded w-full ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          {/* Course & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              {...register("course")}
              className="p-3 border rounded w-full"
            >
              <option>Frontend Development</option>
              <option>MERN Full Stack</option>
              <option>Python AI & ML</option>
              <option>Web Designing</option>
            </select>

            <div>
              <input
                type="text"
                placeholder="Phone (optional)"
                {...register("phone", {
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Invalid Indian phone number"
                  }
                })}
                className={`p-3 border rounded w-full ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Message (optional)"
              rows="4"
              {...register("message", {
              
              })}
              className={`w-full p-3 border rounded ${errors.message ? "border-red-500" : ""}`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit & Status */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-indigo-600 text-white px-6 py-3 rounded font-semibold hover:bg-indigo-700 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {status && (
              <p
                className={`text-sm font-medium ${
                  status.toLowerCase().includes("success") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
