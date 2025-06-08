
// import React, { useEffect, useState } from 'react';
// import Header from './Hearder'; // Make sure the filename matches or rename to 'Header.jsx'
// import { ToastContainer } from 'react-toastify';
// import { Outlet, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';

// function Layout() {
//   const location = useLocation();
//   const [enabled, setEnabled] = useState(() => localStorage.getItem("darkMode") === "true");

//   const lightImage =
//     'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1950&q=80';
//   const darkImage =
//     'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80';

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", enabled);
//     localStorage.setItem("darkMode", enabled);
//   }, [enabled]);

//   return (
//     <div
//       className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-500 relative"
//       style={{
//         backgroundImage: `url(${enabled ? darkImage : lightImage})`,
//       }}
//     >
//       <Header />
//       <ToastContainer />

//       <main className="flex-grow container mx-auto px-4 py-6 backdrop-blur-sm bg-white/50 dark:bg-black/50 rounded-lg mt-4 shadow-lg">
//         <Outlet />
//       </main>

//       {/* Welcome Banner (only on "/") */}
//       {location.pathname === '/' && (
//         <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
//           <motion.div
//             className="text-center p-6 bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 rounded-lg shadow-lg max-w-lg mx-auto"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.h2
//               className="text-3xl font-bold mb-3"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               📌 Welcome to TaskMaster!
//             </motion.h2>
//             <motion.p
//               className="text-md md:text-lg"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//             >
//               Start organizing your tasks efficiently and boost your productivity. Use the “Add Task” tab to begin or explore features from the top navigation.
//             </motion.p>
//           </motion.div>
//         </div>
//       )}

//       {/* Dark/Light Toggle */}
//       <button
//         onClick={() => setEnabled(!enabled)}
//         className="fixed bottom-6 right-6 bg-gray-800 text-white px-3 py-2 rounded-full text-sm shadow-lg hover:bg-gray-700 transition"
//       >
//         {enabled ? '☀ Light Mode' : '🌙 Dark Mode'}
//       </button>
//     </div>
//   );
// }

// export default Layout;


import React, { useEffect, useState } from 'react';
import Header from './Hearder'; // Make sure the filename is correct
import { ToastContainer } from 'react-toastify';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Layout() {
  const location = useLocation();
  const [enabled, setEnabled] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    // Toggle class on body instead of html
    document.body.classList.toggle("dark", enabled);
    document.body.classList.toggle("light", !enabled);
    localStorage.setItem("darkMode", enabled);
  }, [enabled]);

  return (
    <div className="flex flex-col min-h-screen transition-all duration-500 relative">
      <Header />
      <ToastContainer />

      <main className="flex-grow container mx-auto px-4 py-6 backdrop-blur-sm bg-white/50 dark:bg-black/50 rounded-lg mt-4 shadow-lg">
        <Outlet />
      </main>

      {/* Welcome Message */}
      {location.pathname === '/' && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <motion.div
            className="text-center p-6 bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 rounded-lg shadow-lg max-w-lg mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              📌 Welcome to TaskMaster!
            </motion.h2>
            <motion.p
              className="text-md md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Start organizing your tasks efficiently and boost your productivity.
              Use the “Add Task” tab to begin or explore features from the top navigation.
            </motion.p>
          </motion.div>
        </div>
      )}

      {/* Dark/Light Toggle */}
      <button
        onClick={() => setEnabled(!enabled)}
        className="fixed bottom-6 right-6 bg-gray-800 text-white px-3 py-2 rounded-full text-sm shadow-lg hover:bg-gray-700 transition"
      >
        {enabled ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );

  
}

export default Layout;
