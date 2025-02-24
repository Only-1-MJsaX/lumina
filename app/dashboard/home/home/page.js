import React from 'react';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div className='p-4 m-4 bg-[url(https://png.pngtree.com/thumb_back/fw800/background/20250205/pngtree-elevating-productivity-with-innovative-digital-solutions-image_16899240.jpg)] bg-cover bg-center h-screen' >
            <p className='text-2xl font-bold p-4 flex justify-center text-gray-900'> Welcome to Lumina Official Website!!!</p>
            <div className='flex justify-between gap-4'>
               
                <div className='h-[450px] w-[350px] bg-white p-2 m-2  hover'>
                    <Image src="/j2.jpg" alt='cute' height={400} width={400} className='hover hover:duration-200' />
                    <p className='hover hover:text-white hover:bg-gray-600 hover:p-2 '> We are a team of developers who are passionate about creating innovative solutions to help businesses grow. Our goal is to provide you with the best possible service, so you can focus on what you do best. Whether you need a website, an app, or a
                    </p>
                </div>

            </div>
        </div>
    );
};

export default HomePage;