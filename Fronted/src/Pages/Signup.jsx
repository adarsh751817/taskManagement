

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://taskmanagement-x509.onrender.com/api/auth/signup', form);
      setSuccess('🎉 Signup successful!');
      setForm({ name: '', email: '', password: '' });

      window.location.href = "/dashboard";
      
    } catch (err) {
      setError(err?.response?.data?.msg || 'Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Adarsh Kumar"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none border-amber-600 text-black focus:ring-2 focus:ring-indigo-400"
            />
            {form.name && form.name.length < 3 && (
              <p className="text-xs text-red-500">Name is too short!</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none border-amber-600 text-black focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="password"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none border-amber-600 text-black focus:ring-2 focus:ring-indigo-400"
            />
            {form.password && form.password.length < 6 && (
              <p className="text-xs text-red-500">Password should be at least 6 characters</p>
            )}
          </div>

          {error && (
            <motion.p
              className="text-red-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          {success && (
            <motion.p
              className="text-green-600 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {success}
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl border-amber-600 text-black font-semibold hover:bg-indigo-700 transition"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-sm mt-4 text-center text-gray-500">
          Already have an account? <a href="/login" className="text-indigo-600 font-semibold">Login</a>
        </p>
      </motion.div>
    </div>
  );
}

export default Signup;

