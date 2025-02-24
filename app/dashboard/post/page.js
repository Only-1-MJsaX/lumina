"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Post = () => {
    const blogDetails = [
        {
            author: 'Mr. Josef',
            timestamp: 'monday, 17 Feb 2025',
            title: 'full stack development',
            body: 'We are a team of developers who are passionate about creating innovative solutions to help businesses grow. '
        },
        {
            author: 'Mr. Josef',
            timestamp: 'monday, 17 Feb 2025',
            title: 'full stack development',
            body: 'We are a team of developers who are passionate about creating innovative solutions to help businesses grow. '
        },
        {
            author: 'Mr. Josef',
            timestamp: 'monday, 17 Feb 2025',
            title: 'full stack development',
            body: 'We are a team of developers who are passionate about creating innovative solutions to help businesses grow. '
        },
        {
            author: 'Mr. Josef',
            timestamp: 'monday, 17 Feb 2025',
            title: 'full stack development',
            body: 'We are a team of developers who are passionate about creating innovative solutions to help businesses grow. '
        }
    ];
    return (
        <main className='min-h-dvh p-2 md:p-4 lg:p-6 bg-gray-100 m-4 p-4'>
            <h1 className='text-center m-3 lg:my7 text-3xl lg:text-4xl text-blue-600 font-bold '>
                LUMINA Blog Post
            </h1>
            <p>Our Blogs are written by trusted authorities and well known writters so that we can provide you the best blogs and articles tailored to meet your needs. Have a nice time with us!</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 p-2 md:p-4 lg:p-6'>
                {blogDetails.map((blog, index) => (
                    
        
                <Link key={index} href='#' className='space-y-2 group'>
                    <Image src='/j2.jpg' alt='blog' width={400} height={300} className='rounded-lg' />
                    <div className='flex justify-between text-sm text-gray-500'>
                        <span className='text-center text-blue-600 font-bold group-hover:text-blue-800'>{blog.author}</span>
                        <span className='text-center text-blue-600 font-bold group-hover:text-blue-800'>{blog.timestamp}</span>
                    </div>
                    <h1 className='font-bold text-lg'> {blog.title} </h1>
                    <p className='text-sm'> {blog.body} </p>
                </Link>
                ))}
            </div>

        </main>
    );
};

export default Post;