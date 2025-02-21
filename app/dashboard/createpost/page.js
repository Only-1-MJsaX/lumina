  "use client"
import React from 'react';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    body: Yup.string().required('Body is required')
})
const Page = () => {
    const {handleSubmit, handleChange, values, errors, handleBlur, touched} = useFormik({
        validationSchema: schema,
        initialValues: {
            title: '',
            body: ''
        },
        onSubmit: () => {},
    })
    return (
        <main className='min h-screen flex justify-center py-4 md:py-6 lg:px-16 bg-gray-100 p-4 m-4'>

            <div className='w-full md:w-[380px] flex flex-col gap-4 border border-gray200 bg-gray-50 rounded-md p-2 md:pb-6'> 
                <h1 className='text-center text-2xl text-blue-600'> Create Your Blog post</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                     <label className='text-lg text-blue-600'>Title</label>
                        <TextField id='title' type='text' variant='outlined' placeholder='title...' className='w-full' values={values.title} onChange={handleChange} onBlur={handleBlur} />
                        {touched.title && errors.title ? <span className='text-xs text-red-500'> {errors.title}</span>:null}
                    </div>
                    <div className='flex flex-col'>
                     <label className='text-lg text-blue-600'>Body</label>
                        <TextField id='body' multiline rows={10} type='text' variant='outlined' placeholder='body...' className='w-full' values={values.body} onChange={handleChange} onBlur={handleBlur} />
                        {touched.body && errors.body ? <span className='text-xs text-red-500'> {errors.body}</span>:null}
                     
                    </div>
                    <button type='submit' className='bg-blue-600 text-white w-full text-lg rounded-md p-2 hover:bg-blue-700'>Submit Post</button>
                </form>
            </div>
        </main>

    );
};

export default Page;