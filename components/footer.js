
import React from 'react';
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6"
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const year = new Date().getFullYear();

function Footer() {
    return (
        <footer className='bg-gray-200 text-slate-800 p-4'>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
                <div className="footer-links flex flex-col md:flex-row gap-4">
                    <Link href="/about" className='underline'><p>About Us</p></Link>
                    <Link href="/services" className='underline'><p>Services</p></Link>
                    <Link href="/contact" className='underline'><p>Contact</p></Link>
                    <Link href="/privacy-policy" className='underline'><p>Privacy Policy</p></Link>
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><IoLogoFacebook /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                </div>
                <p className='text-center md:text-left'>&copy; {year} Lumina. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;