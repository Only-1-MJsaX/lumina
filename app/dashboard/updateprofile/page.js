  "use client"
import { Button, TextField } from '@mui/material';
import React from 'react';
import { FaUserPen } from "react-icons/fa6";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    FullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.number().required('Phone Number is required').min(11, 'Phone Number must be 11 digits'),
    address: Yup.string().required('Address is required').min(10, 'Address must be more than 10 characters').max(100, 'Address must not be more than 100 characters'),
    password: Yup.string().required('Password is required').min(3, 'Password must be more than 6 characters').max(20, 'Password must not be more than 20 characters')
})

const UpdateProfile = () => {
    const {handleSubmit, handleChange, handleBlur, errors, touched,values} = useFormik({
        initialValues: {
            FullName: '',
            email: '',
            phone: '',
            address: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: () => {
            console.log('Submitted successfully')
        }
    })
    return (
        <main className='min-h-screen flex justify-center bg-gray-300 py-16 px-2 md:px-16 lg:py-20 py-16'>
            <div className='w-full md:w-[400px] rounded-md bg-white p-4'>

                <blockquote className='text-2xl flex gap-2 items-center mb-8 text-center'>
                    <FaUserPen className='text-2xl ' />
                    <span className='block text-2xl'>Update your Profile</span>
                </blockquote>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4'>
                        <TextField 
                        type="text" 
                        id='FullName' 
                        label='(Surname) (Firstname) (Others)' 
                        variant='outlined' placeholder='e.g Mega Josef' 
                        className='w-full'
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        value={values.FullName}/> 
                        {touched.FullName && errors.FullName ? <span className='text-red-500'>{errors.FullName}</span>
                        : null}
                        <TextField 
                        type="text"
                        id='email' 
                        label="email" 
                        placeholder='megajosef@gmail.com' 
                        variant='outlined' 
                        className='w-full' 
                        onChange={handleChange}
                         onBlur={handleBlur} 
                         value={values.email} />
                        {touched.email && errors.email ? <span className='text-red-500'>{errors.email}</span>
                        : null}
                        <TextField 
                        type="tel" 
                        id='phone' 
                        placeholder='e.g +234 ...' 
                        variant='outlined' 
                        className='w-full' 
                        label="phone number"
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.phone}/>
                        {touched.phone && errors.phone ? <span className='text-red-500'>{errors.phone}</span>
                        : null}
                        <TextField 
                        type="text" 
                        id='address' 
                        multiline rows={4} 
                        variant='outlined' 
                        label="address"
                        placeholder='Enter Address' 
                        className='w-full ' 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.address}/>
                        {touched.address && errors.address ? <span className='text-red-500'>{errors.address}</span>
                        : null}
                        <TextField 
                        type="password" 
                        id='password' 
                        placeholder='Enter Password' 
                        variant='outlined' 
                        label="password"
                        className='w-full' 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.password}/>
                        {touched.password && errors.password? <span className='text-red-500'>{errors.password}</span>
                        : null}                   
                    </div>
                    <Button type="submit" className='flex justify-center text-2xl border-2 bg-blue-500 rounded-xl text-gray-100 p-4 m-4 md:w-[14em] ' variant='contained' >Submit</Button>
                </form>
            </div>
        </main>
    );
};

export default UpdateProfile;