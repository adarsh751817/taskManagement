import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("https://taskmanagement-x509.onrender.com/api/show_Task");
      const data = await response.json();
      if (data.status && data.data) {
        setTasks(data.data);
      }
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-6">
      {/* Animated Header */}
      <motion.h1
        className="text-4xl font-bold text-center text-indigo-700 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Task Management Dashboard
      </motion.h1>

      {/* Stats */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Total Tasks</h2>
          <p className="text-4xl font-bold text-indigo-600 mt-2">{tasks.length}</p>
        </div>
      </motion.div>

      {/* Tasks */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {tasks.length === 0 ? (
          <p className="text-center col-span-2 text-gray-500">No tasks available.</p>
        ) : (
          tasks.map((task) => (
            <motion.div
              key={task._id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-indigo-700">{task.title}</h3>
                <div className="flex gap-3">
                  {/* Delete icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    className="cursor-pointer text-red-500 hover:text-red-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-2 14H7L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M9 6V4h6v2" />
                  </svg>

                  {/* View icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    className="cursor-pointer text-blue-500 hover:text-blue-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="2" />
                    <path d="M21 12c-2-4-6-7-9-7s-7 3-9 7c2 4 6 7 9 7s7-3 9-7z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600">{task.description}</p>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}

export default Dashboard;


