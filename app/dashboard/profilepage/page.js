import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import {auth, signOut } from '@/auth';




export default async function ProfilePage  () {
    const session = await auth();
    return (
        <main className='min-h-screen flex justify-center bg-gray-300 py-4 px-2 md:px-16 lg:py-8 md:px-16 '>
            <div className='w-full md:w-[400px] rounded-md border border-gray-300 p-4 md:p-6 bg-gray-50'>
                <div className='flex justify-center'>
                    <Image src={session?.user?.image} 
                    width={80}
                    height={80}
                    alt='profile picture'
                    className='rounded-full w-[80px] h-[80px]'/>
                </div>
                <p className='text-center py-3 border-b border-sky-200'> {session?.user?.name}</p>
                <p className='text-center py-3 border-b border-sky-200' > {session?.user?.email}</p>
                <p className='text-center py-3 border-b border-sky-200' >{session?.user?.id}</p>

                <form 
                action={async () => {
                    "use server"
                    await signOut()
                }}>
                    <Button className='w-full mb-4' variant='contained' color='error' type='submit'> SignOut</Button>
                </form>
                

                <Link className='bg-blue-500 text-white rounded-md w-[28em]' href='/dashboard/updateprofile'>Update Profile</Link>
                
            </div>
            
        </main>
    );
};

