
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { auth, signIn } from '@/auth';




export default async function SignInPage() {
    const session = await auth();
    console.log(session);
    return (
        <main className='min-h-[320px] flex justify-center bg-gray-300 py-8 px-2 m-4'>
            <article>
                <div className='w-full md:w-[28em] md:h-[15em] rounded-md bg-white p-4'>
                    <h1 className='text-2xl text-center mb-[50px]'>Sign Up </h1>

                    
                    <div className='flex gap-2 mb-[20px]'>
                        <form
                            action={async () => {
                                "use server"
                                await signIn("google")
                            }}
                            className='mb-2'>
                            <button type='submit'
                                className='w-[26em] h-[3.2em] flex justify-center items-center gap-2 border-b-2 border-blue-500 bg-gray-200 rounded-md '>
                                <FcGoogle className='text-4xl text-green-500 m-2' />
                                <span className='text-black text-sm p-2'>continue with Google</span>
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

