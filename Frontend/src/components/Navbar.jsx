import React, { useState } from 'react';
import logo from "../assets/Hot.png"; // Import logo image
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close menu

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex items-center justify-between px-6 py-4 bg-slate-900 text-white relative'>
            {/* Logo Section */}
            <div>
                <NavLink to='/'>
                    <img src={logo} alt="Logo" className='w-16 h-auto' /> {/* Adjust logo size here */}
                </NavLink>
            </div>

            {/* Menu Button for Mobile */}
            <div className='md:hidden' onClick={toggleMenu}>
                {isMenuOpen ? (
                    <FaTimes className='text-2xl cursor-pointer z-50' /> // Cross icon with high z-index
                ) : (
                    <FaBars className='text-2xl cursor-pointer z-50' />
                )}
            </div>

            {/* Navigation Links */}
            <div
                className={`fixed top-0 left-0 h-full bg-slate-900 z-40 transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:flex md:items-center md:gap-6`}
                style={{ width: '75%', maxWidth: '300px' }}
            >
                <ul className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mt-16 md:mt-0 px-4'>
                    <NavLink to='/entertainment-new' onClick={() => setIsMenuOpen(false)}>
                        <li className='hover:text-gray-400 cursor-pointer text-lg'>Entertainment</li>
                    </NavLink>
                    <NavLink to='/political-news' onClick={() => setIsMenuOpen(false)}>
                        <li className='hover:text-gray-400 cursor-pointer text-lg'>Political</li>
                    </NavLink>
                    <NavLink to='/sport-news' onClick={() => setIsMenuOpen(false)}>
                        <li className='hover:text-gray-400 cursor-pointer text-lg'>Sports</li>
                    </NavLink>
                    <NavLink to='/health-news' onClick={() => setIsMenuOpen(false)}>
                        <li className='hover:text-gray-400 cursor-pointer text-lg'>Health</li>
                    </NavLink>
                    <NavLink to='/technology-news' onClick={() => setIsMenuOpen(false)}>
                        <li className='hover:text-gray-400 cursor-pointer text-lg'>Technology</li>
                    </NavLink>
                    <NavLink to='/travel-news' onClick={() => setIsMenuOpen(false)}>
                        <li className='hover:text-gray-400 cursor-pointer text-lg'>Travel</li>
                    </NavLink>
                </ul>
            </div>

            {/* Authentication Buttons */}
            <div className='hidden md:flex gap-4'>
                <button className='px-4 py-2 bg-white text-black rounded hover:bg-blue-600 hover:text-white'>Sign In</button>
                <button className='px-4 py-2 bg-white text-black rounded hover:bg-green-600 hover:text-white'>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
