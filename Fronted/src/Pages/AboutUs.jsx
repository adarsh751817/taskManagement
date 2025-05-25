import React from "react";
import { motion } from "framer-motion";
import { FaTasks, FaRegLightbulb, FaUsers, FaRocket } from "react-icons/fa";


const features = [
  { icon: <FaTasks />, title: "Task Tracking", description: "Track your tasks and progress with real-time updates." },
  { icon: <FaRegLightbulb />, title: "Smart Suggestions", description: "AI-powered recommendations to improve productivity." },
  { icon: <FaUsers />, title: "Team Collaboration", description: "Assign, monitor, and manage team tasks with ease." },
  { icon: <FaRocket />, title: "Fast & Responsive", description: "Optimized for performance across all devices." },
];

const team = [
  {
    name: "Adarsh Tripathi",
    role: "Founder & Developer",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen px-6 md:px-12 py-10 space-y-20">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Welcome to TaskMaster – your smart task management system built to streamline workflows, boost collaboration, and help you get more done!
        </p>
      </motion.div>

      <motion.section
        className="text-center space-y-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold text-indigo-500">Our Mission</h2>
        <p>
          Our mission is to empower individuals and teams to plan, organize, and accomplish their goals using intuitive tools and seamless collaboration.
        </p>
        <h2 className="text-3xl font-semibold text-indigo-500 mt-10">Our Vision</h2>
        <p>
          We envision a world where managing tasks is effortless, and productivity is second nature. We're here to make that vision a reality for everyone.
        </p>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="text-indigo-600 text-3xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm mt-2">{item.description}</p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        className="text-center space-y-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold text-indigo-500">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-500"
              />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="text-center py-10 bg-indigo-600 text-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold">Ready to boost your productivity?</h2>
        <p className="mt-2 mb-4">Join thousands of users managing their daily tasks with ease.</p>
        <a
          href="/addTask"
          className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </motion.section>
    </div>
  );
};

export default AboutUs;
