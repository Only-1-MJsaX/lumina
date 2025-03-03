 "use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { db } from '@/config/firebase.config';
import { getDocs, collection, orderBy,where } from 'firebase/firestore';
import { useSession } from 'next-auth/react';


export default function Post  ({userId})  {
    const [posts, setPosts] = React.useState([]);
    const {data: session} = useSession();

    React.useEffect(() => {
        const handleFetchPosts = async () => {
            const q = collection(db, 'posts');
            const onSnap = await getDocs(q,
             where("user", "==", userId),
             orderBy('timecreated', 'desc')
            );
            const compilePost= [];
            onSnap.docs.forEach(doc => {
                compilePost.push({
                    id: doc.id,
                    data:doc.data()
                });
                setPosts(compilePost);
            });
            
        };
        session? handleFetchPosts() : null;
        
    }, [session]);
    
    return (
        <main className='min-h-dvh p-2 md:p-4 lg:p-6 bg-gray-100 m-4 p-4'>
            <h1 className='text-center m-3 lg:my7 text-3xl lg:text-4xl text-blue-600 font-bold '>
                LUMINA Blog Post
            </h1>
            <p>Our Blogs are written by trusted authorities and well known writters so that we can provide you the best blogs and articles tailored to meet your needs. Have a nice time with us!</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 p-2 md:p-4 lg:p-6'>
               
                <Link  href='#' className='space-y-2 group'>
                    <Image src='/j2.jpg' alt='blog' width={400} height={300} className='rounded-lg' />
                    <div className='flex justify-between text-sm text-gray-500'>
                        <span className='text-center text-blue-600 font-bold group-hover:text-blue-800'>Author</span>
                        <span className='text-center text-blue-600 font-bold group-hover:text-blue-800'>Time Created</span>
                    </div>
                    <h1 className='font-bold text-lg'> </h1>
                    <p className='text-sm'> Body</p>
                </Link>
                             
            </div>

        </main>
    );
};

