
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

    const navLinks = ['Dashboard', 'addTask', 'Alltasks', 'AboutUs'];

    return (
        <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative z-50">
            {/* Logo */}
            <div className="text-2xl font-bold text-indigo-600">
                TaskMaster
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
                {navLinks.map(link => (
                    <Link key={link} to={`/${link.toLowerCase()}`} className="hover:text-indigo-500 transition-colors">
                        {link}
                    </Link>
                ))}
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
        </header>
    );
};

export default Header;
