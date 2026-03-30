import React from 'react';
import user from '../../assets/user.png'
import packages from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='max-w-md md:max-w-4xl lg:max-w-7xl mx-auto  py-30 space-y-10'>
                <div className='text-center space-y-3'>
                    <h1 className='text-[#101727] text-5xl font-extrabold'>Get Started In 3 Steps</h1>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7.5'>

                    <div className='bg-[#FFFFFF] p-6 rounded-lg shadow'>
                        <div className='flex justify-end'>
                            <div className='w-max bg-purple-500 rounded-full px-2 py-1 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white '>01</div>
                        </div>
                        <div className='space-y-4 flex flex-col  items-center'>
                            <div className='w-25 h-25 rounded-full bg-purple-200 flex items-center justify-center'>
                                <img src={user} alt="userIcon" />
                            </div>
                            <h2 className='font-bold'>Create Account</h2>
                            <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                        </div>
                    </div>
                    <div className='bg-[#FFFFFF] p-6 rounded-lg shadow'>
                        <div className='flex justify-end'>
                            <div className='w-max bg-purple-500 rounded-full px-2 py-1 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white '>02</div>
                        </div>
                        <div className='space-y-4 flex flex-col  items-center'>
                            <div className='w-25 h-25 rounded-full bg-purple-200 flex items-center justify-center'>
                                <img src={packages} alt="userIcon" />
                            </div>
                            <h2 className='font-bold'>Create Account</h2>
                            <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                        </div>
                    </div>
                    <div className='bg-[#FFFFFF] p-6 rounded-lg shadow'>
                        <div className='flex justify-end'>
                            <div className='w-max bg-purple-500 rounded-full px-2 py-1 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white '>03</div>
                        </div>
                        <div className='space-y-4 flex flex-col  items-center'>
                            <div className='w-25 h-25 rounded-full bg-purple-200 flex items-center justify-center'>
                                <img src={rocket} alt="userIcon" />
                            </div>
                            <h2 className='font-bold'>Create Account</h2>
                            <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Steps;