    "use client"
import React, { useState } from 'react'; 
import {FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";
import Image from 'next/image';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-blue-500 border-2 border-gray-100 rounded-t-2xl p-4">
            <nav className="flex justify-between items-center text-white">
                {/* Logo */}
                <Link href="/dashboard/home/home">
                    <Image 
                        src="/lumina3.png" 
                        alt="logo" 
                        width={50} 
                        height={50} 
                        className="rounded-full text-blue-600 cursor-pointer"
                    />
                </Link>

                {/* Hamburger Menu (Mobile) */}
                <button 
                    className="lg:hidden text-3xl" 
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation Menu */}
                <ul className={`lg:flex gap-4 items-center transition-all duration-300 
                    ${menuOpen ? 'absolute top-16 left-0 w-full bg-blue-500 p-4 flex gap-4 flex-col' : 'hidden lg:flex'}`}>
                    <li><Link href="/dashboard/home/home" className="border border-white rounded-xl p-2 m-4 hover:bg-white hover:text-blue-500 font-bold">Home</Link></li>
                    <li><Link href="/dashboard/createpost" className="border border-white rounded-xl p-2 m-4 hover:bg-white hover:text-blue-500 font-bold">Create Post</Link></li>
                    <li><Link href="/dashboard/post" className="border border-white rounded-xl p-2 m-4 hover:bg-white hover:text-blue-500 font-bold">Posts</Link></li>
                    <li><Link href="#about" className="border border-white rounded-xl p-2 m-4 hover:bg-white hover:text-blue-500 font-bold">About</Link></li>
                    <li><Link href="#contact" className="border border-white rounded-xl p-2 m-4 hover:bg-white hover:text-blue-500 font-bold">Contact</Link></li>
                </ul>

                {/* Icons */}
                <ul>
                    <li><Link href="/dashboard/profilepage"><CgProfile className="text-3xl hover:text-gray-300" /></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
