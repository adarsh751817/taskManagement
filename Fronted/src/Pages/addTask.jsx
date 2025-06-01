
import React, { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";

// Zod schema
const taskSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters long." }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long." })
    .max(500, { message: "Description is too long." }),
});

function Addtask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ title: "", description: "" });
    setSuccessMsg("");

    try {
      const validatedData = taskSchema.parse({ title, description });

      const response = await fetch("https://taskmanagement-x509.onrender.com/api/create_Task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const responseData = await response.json();
      console.log("Task Created:", responseData);

      setTitle("");
      setDescription("");
      setSuccessMsg("✅ Task created successfully!");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formatted = error.format();
        setErrors({
          title: formatted.title?._errors?.[0] || "",
          description: formatted.description?._errors?.[0] || "",
        });
      } else {
        console.error("Error creating task:", error.message);
      }
    }
  };

  return (
    <motion.div
      className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-xl space-y-6"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-indigo-700 text-center mb-4">
        Create a New Task
      </h2>

      {successMsg && (
        <motion.p
          className="text-green-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {successMsg}
        </motion.p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900"
            placeholder="Enter task title"
          />
          {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Description textarea */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900 resize-none"
            placeholder="Enter task description"
          ></textarea>
          {errors.description && (
            <p className="text-red-600 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Animated Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Add Task
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Addtask;
