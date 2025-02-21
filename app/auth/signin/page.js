
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { auth, signIn } from '@/auth';
import { TextField } from '@mui/material';




const SignInPage = () => {
    return (
        <main className='min-h-[520px] flex justify-center bg-gray-300 py-8 px-2 m-4'>
            <article>
                <div className='w-full md:w-[28em] md:h-[30em] rounded-md bg-white p-4'>
                    <h1 className='text-2xl text-center mb-[50px]'>Sign Up </h1>

                    <form
                        action={async (formData) => {
                            "use server"
                            await signIn("credentials", formData)
                        }}
                    />

                   

                    <div className='flex flex-col gap-4'>

                        <TextField id="Mobile Number" type="text" placeholder='Enter Phone Number' />
                        <TextField id='password' placeholder='Enter Password' type="password" />
                    </div>
                    <button type="submit" className=' flex justify-center text-2xl border-2 bg-blue-500 rounded-xl text-gray-100 p-4 m-4 md:w-[16em] '>Sign Up</button>

                    <h1 className='text-center mb-4'>Already have an account? <span > <Link href='#' className='italic text-blue-500 text-sm'> Click here!!!</Link></span></h1>
                    


                    <div className='flex gap-2'>
                        <form
                            action={async () => {
                                "use server"
                                await signIn("google")
                            }}
                            className='mb-2'>
                            <button type='submit'
                                className='w-full h-[3.2em] flex justify-center items-center gap-2 border-b-2 border-blue-500 bg-gray-200 rounded-md '>
                                <FcGoogle className='text-4xl text-green-500 m-2' />
                                <span className='text-black text-sm p-2'>continue with Google</span>
                            </button>

                        </form>
                        <form
                            action={async () => {
                                "use server"
                                await signIn("facebook")
                            }}
                            className='mb-2'>
                            <button type='submit'
                                className='w-full h-[3.2em] flex justify-center items-center gap-2 border-b-2 border-blue-500 bg-gray-200 rounded-md '>
                                <FaFacebook className='text-4xl text-blue-500 m-2' />
                                <span className='text-black text-sm p-2'>continue with Facebook</span>
                            </button>

                        </form>
                    </div>
                    <p className='text-gray-600 text-xs'>
                        By clicking on the signin button you confirm that you have read and agreed with our {""}
                        <Link href="#" className='text-gray-800 underline italic'>Terms of use</Link>{""} and {""}
                        <Link href="#" className='text-gray-800 underline italic'>Privacy Policy</Link>{""}
                    </p>

                </div>
            </article>
        </main >
    );
}

export default SignInPage;