
import React from 'react';
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6"
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const year = new Date().getFullYear();

function Footer() {
    return (
        <footer className='grid grid-cols-3 gap-4 bg-gray-200 p-4 m-4 rounded-b-2xl mb-2'>

            <div className=' '>
                <p className='text-2xl text-gray-800 font-bold'> Lumina </p>
                <p className='mt-4'> &copy;{year} Lumina blog </p>
            </div>
            <div>
                <p className='text-md text-gray-700 font-bold'> Head Office:</p>
                <p className='text-md text-gray-700 mt-4'> Ladoke Akintola Street, Victoria Island, Lagos</p>
            </div>
            <div>
                <ul className='flex gap-4 font-bold mb-4'>
                    <li><Link href="#" className='text-sm text-gray-600 underline'>Terms of Use</Link></li>
                    <li><Link href="#" className='text-sm text-gray-600 underline'>Privacy Policy</Link></li>
                    <li><Link href="#" className='text-sm text-gray-600 underline'>Bug bounty</Link></li>
                </ul>

                <ul className='flex items-center gap-[50px]'>
                    <li><Link href="#"><FaXTwitter className='text-2xl' /> </Link></li>
                    <li><Link href="#"><IoLogoFacebook className='text-2xl' /> </Link></li>
                    <li><Link href="#"><FaYoutube className='text-2xl' /> </Link></li>
                    <li><Link href="#"><FaTiktok className='text-2xl' /> </Link></li>
                </ul>



            </div>
        </footer>
    );
}

export default Footer;