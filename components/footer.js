
import React from 'react';
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6"
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const year = new Date().getFullYear();

function Footer() {
    return (
        <footer className='grid grid-cols-3 bg-gray-200 p-4 m-4 mb-[-80px]'>
            <div>
            <p className='text-2xl text-gray-800 font-bold'> Lumina </p>
            <p className=''> &copy;{year} Lumina blog </p>
            </div>
            <div>
                <p className='text-md text-gray-700'> Head Office:</p>
                <p className='text-md text-gray-700'> Ladoke Akintola Street, Victoria Island, Lagos</p>
            <ul className='flex items-center gap-4'>
                    <li><Link href="#"><FaXTwitter className='text-md' /> </Link></li>
                    <li><Link href="#"><IoLogoFacebook className='text-md'/> </Link></li>
                    <li><Link href="#"><FaYoutube className='text-md' /> </Link></li>
                    <li><Link href="#"><FaTiktok  className='text-md'/> </Link></li>
            </ul>
            </div>
            <div>
                <ul className='flex justify-between font-bold'>
                    <li><Link href="#" className='text-sm text-gray-600'>Terms of Use</Link></li>
                    <li><Link href="#" className='text-sm text-gray-600'>Privacy Policy</Link></li>
                    <li><Link href="#" className='text-sm text-gray-600'>Bug bounty</Link></li>
                </ul>
                
            </div>
        </footer>
    );
}

export default Footer;