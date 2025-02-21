import React from 'react';
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";
import Image from 'next/image';

function Header() {
    return (
        <header className='p-4 m-4 border border-2 border-gray-100 bg-blue-500 rounded-t-2xl pt-6 ' >
             <nav className='flex justify-between text-white items-center ' role='navigation'>
                <Image src="/lumina3.png" alt="logo" width={50} height={50} className='text-bold rounded-full ml-4 text-blue-600' />
                 <ul className='flex justify-around gap-[40px]'>
                    <li><a href="#home" className='border border-2 border-black-500 p-2 m-2 rounded-xl hover hover:bg-white hover:text-blue-500 hover:border-white font-bold'>Home</a></li>
                    <li><a href="#about" className='border border-2 border-black-500 p-2 m-2 rounded-xl hover hover:bg-white hover:text-blue-500 hover:border-gray-700 font-bold'>About</a></li>
                    <li><a href="#contact" className='border border-2 border-black-500 p-2 m-2 rounded-xl hover hover:bg-white hover:text-blue-500 hover:border-gray-700 font-bold'>Contact</a></li>
                </ul>
                <ul className='flex justify-evenly gap-4'>
                    <li><Link href=""><FaSearch className='text-4xl hover hover:font-bold ' /></Link></li>
                    <li><Link href=""><CgProfile className='text-4xl hover  hover:bg-white hover:text-black font-bold hover:rounded-full' /></Link></li>
                </ul>
            </nav>
           
        </header>
    );
}

export default Header;