import React, { useState } from 'react';
import {
    motion,
    useScroll,
    AnimatePresence,
} from "framer-motion";

import {
    Code2,
    Sun,
    Moon,
    Menu,
    X,
} from "lucide-react";

import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    const navigationItems: string[] = [
        "Home",
        "Skills", 
        "Work",
        "About",
        "Contact"
    ];

    return (
        <motion.nav
            style={{ opacity: 1 }}
            className={`fixed top-0 w-full z-50 px-6 py-4 ${
                isDarkMode ? "bg-gray-950/80" : "bg-gray-50/80"
            } backdrop-blur-md border-b ${
                isDarkMode ? "border-gray-800" : "border-gray-200"
            }`}
        >
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className='flex items-center space-x-2'
                >
                    <Code2 size={24} className='text-blue-500' />
                    <span className={`text-lg ml-1 font-semibold ${
                        isDarkMode 
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}>TT Portfolio</span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center space-x-8'>
                    {navigationItems.map((item) => (
                        <motion.button
                            key={item}
                            whileHover={{ y: -2 }}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className={`text-sm uppercase tracking-wider transition-colors ${
                                isDarkMode
                                    ? "text-gray-400 hover:text-white"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            {item}
                        </motion.button>
                    ))}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full transition-colors ${
                            isDarkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>
                </div>

                {/* Mobile Controls */}
                <div className='md:hidden flex items-center space-x-2'>
                    {/* Theme Toggle for Mobile */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full transition-colors ${
                            isDarkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>

                    {/* Menu Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 rounded-full transition-colors ${
                            isDarkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden mt-4 ${
                            isDarkMode ? "bg-gray-900" : "bg-white"
                        } rounded-lg border ${
                            isDarkMode ? "border-gray-800" : "border-gray-200"
                        } shadow-lg`}
                    >
                        <div className="p-4 space-y-2">
                            {navigationItems.map((item) => (
                                <motion.button
                                    key={item}
                                    whileHover={{ x: 8 }}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`block w-full text-left px-4 py-3 rounded-md text-sm uppercase tracking-wider transition-colors ${
                                        isDarkMode
                                            ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                    }`}
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;