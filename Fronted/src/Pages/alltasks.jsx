

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Alltasks() {
  const [allTasks, setAllTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const showAllTask = async () => {
    try {
      const response = await fetch("https://taskmanagement-x509.onrender.com/api/show_Task");
      const data = await response.json();
      if (data.status && data.data) {
        setAllTasks(data.data);
      }
    } catch (error) {
      console.error(`Error in showing tasks: ${error}`);
    }
  };

  const deleteHandler = async (taskId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/delete_Task/${taskId}`,
        { method: "DELETE" }
      );
      const data = await response.json();
      if (data.status) {
        setMessage("Task deleted successfully.");
        showAllTask();
      } else {
        setMessage("Task deletion failed.");
      }
    } catch (error) {
      console.error(`Delete error: ${error}`);
      setMessage("An error occurred while deleting the task.");
    }
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setEditTitle(task.title);
    setEditDescription(task.description);
  };

  const handleEditSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/update_Task/${editingTask._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: editTitle, description: editDescription }),
        }
      );
      const data = await response.json();
      if (data.status) {
        setMessage("Task updated.");
        setEditingTask(null);
        showAllTask();
      }
    } catch (error) {
      console.error("Edit error:", error);
    }
  };

  const toggleCompletion = async (task) => {
    try {
      const updated = { ...task, completed: !task.completed };
      const response = await fetch(
        `http://localhost:3000/api/update_Task/${task._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ completed: updated.completed }),
        }
      );
      const data = await response.json();
      if (data.status) {
        showAllTask();
      }
    } catch (error) {
      console.error("Completion toggle error:", error);
    }
  };

  useEffect(() => {
    showAllTask();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
        All Tasks
      </h1>

      {message && (
        <p className="text-center text-green-600 font-semibold mb-4">{message}</p>
      )}

      {allTasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allTasks.map((task) => (
            <motion.div
              key={task._id}
              className={`bg-white p-4 rounded-lg shadow hover:shadow-md transition border-l-4 ${
                task.completed ? "border-green-500" : "border-yellow-400"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`text-lg font-semibold ${
                    task.completed ? "text-green-700 line-through" : "text-indigo-700"
                  }`}
                >
                  {task.title}
                </h3>
                <div className="flex gap-2">
                  <svg
                    onClick={() => openEditModal(task)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="blue"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="2" />
                    <path d="M22 12c-2.667 4-6.333 6-10 6s-7.333-2-10-6c2.667-4 6.333-6 10-6s7.333 2 10 6" />
                  </svg>
                  <svg
                    onClick={() => deleteHandler(task._id)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="red"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7l0 -3h6l0 3" />
                  </svg>
                </div>
              </div>

              <p className="text-gray-700 mt-2">{task.description}</p>

              <div className="mt-4">
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleCompletion(task)}
                  />
                  <span className="text-sm text-gray-600">Mark as completed</span>
                </label>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      <AnimatePresence>
        {editingTask && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-50%", opacity: 0 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-indigo-700">
                Edit Task
              </h2>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md"
              />
              <textarea
                rows="4"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setEditingTask(null)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditSave}
                  className="px-4 py-2 bg-indigo-600 text-black rounded hover:bg-indigo-700"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Alltasks;
