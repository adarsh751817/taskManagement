
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(prev => !prev);

    const isLoggedIn = !!localStorage.getItem('token');

    const navLinks = [
        { name: 'Dashboard', path: '/dashboard', isPublic: true },
        { name: 'AddTask', path: '/addtask', isPublic: false },
        { name: 'AllTasks', path: '/alltasks', isPublic: false },
        { name: 'AboutUs', path: '/aboutus', isPublic: false },
        { name: 'Login', path: '/login', isPublic: true },
        { name: 'Signup', path: '/signup', isPublic: true },
    ];

    const handleProtectedClick = (e, link) => {
        if (!isLoggedIn && !link.isPublic) {
            e.preventDefault();
            alert('🔒 Please log in or sign up to access this feature.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('👋 You have been logged out!');
        navigate('/login');
    };

    return (
        <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative z-50">
            {/* Logo */}
            <div
                className="text-2xl font-bold text-indigo-600 cursor-pointer"
                onClick={() => navigate('/dashboard')}
            >
                TaskMaster
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
                {navLinks.map(link => (
                    <Link
                        key={link.name}
                        to={link.path}
                        onClick={(e) => handleProtectedClick(e, link)}
                        className={`transition-colors hover:text-indigo-500 ${!isLoggedIn && !link.isPublic ? 'text-gray-400 cursor-not-allowed' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
                {isLoggedIn && (
                    <button
                        onClick={handleLogout}
                        className="text-red-600 hover:text-red-800 transition font-semibold"
                    >
                        Logout
                    </button>
                )}
            </nav>

            {/* Avatar Placeholder */}
            <div className="hidden md:block w-9 h-9 bg-indigo-200 rounded-full flex items-center justify-center text-white font-semibold">
                A
            </div>

            {/* Hamburger for Mobile */}
            <div className="md:hidden z-50">
                <button onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-40">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={(e) => {
                                handleProtectedClick(e, link);
                                setIsOpen(false);
                            }}
                            className={`text-gray-700 hover:text-indigo-500 ${!isLoggedIn && !link.isPublic ? 'text-gray-400 cursor-not-allowed' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    {isLoggedIn && (
                        <button
                            onClick={() => {
                                handleLogout();
                                setIsOpen(false);
                            }}
                            className="text-red-600 hover:text-red-800 font-semibold"
                        >
                            Logout
                        </button>
                    )}
                </nav>
            )}
        </header>
    );
};

export default Header;
