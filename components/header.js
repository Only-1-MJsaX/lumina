import React from 'react';
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";
import Image from 'next/image';

function Header() {
    return (
        <header className='border border-2 border-gray-100 bg-blue-500 rounded-t-2xl pt-6  p-4 m-4  ' >
            <nav className='flex justify-between text-white ' role='navigation'>
                <a href='/dashboard/home/home'><Image src="/lumina3.png" alt="logo" width={50} height={50} className='text-bold rounded-full ml-4 text-blue-600' /></a>
                <ul className='flex gap-[10px]'>
                    <li><a href="/dashboard/home/home" className='border border-2 border-black-500 p-2 m-2 rounded-xl hover hover:bg-white hover:text-blue-500 hover:border-white '>Home</a></li>
                    <li><a href="/dashboard/createpost" className='border border-2 border-black-500 p-2 m-2 rounded-xl hover hover:bg-white hover:text-blue-500 hover:border-white'>Create Post</a></li>
                    <li><a href="/dashboard/post" className='border border-2 border-black-500 p-2 m-2 rounded-xl hover hover:bg-white hover:text-blue-500 hover:border-white'>Posts</a></li>
                    <li><a href="#about" className='border border-2 border-black-500 p-2 m-2 rounded-xl hover hover:bg-white hover:text-blue-500 hover:border-white '>About</a></li>
                    <li><a href="#contact" className='border border-2 border-black-500 p-2 m-2 rounded-xl hover hover:bg-white hover:text-blue-500 hover:border-white '>Contact</a></li>
                    <li><a href="/auth/signin" className='border border-2 border-black-500 p-2 m-2 rounded-xl hover hover:bg-white hover:text-blue-500 hover:border-white'>Sign in</a></li>
                </ul>
                <ul className='flex gap-4'>
                    <li><Link href="#"><FaSearch className='text-4xl hover hover:font-bold ' /></Link></li>
                    <li><Link href="/dashboard/profilepage"><CgProfile className='text-4xl hover  hover:bg-white hover:text-black font-bold hover:rounded-full' /></Link></li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;