import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 md:py-14 lg:py-16'>

            <div className='max-w-md md:max-w-4xl lg:max-w-7xl mx-auto 
                            flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-center'>

                <div className='w-full md:w-1/3 py-4 
                                border-b md:border-b-0 md:border-r border-white'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white'>50K+</h2>
                    <p className='text-white mt-2'>Active Users</p>
                </div>

                <div className='w-full md:w-1/3 py-4 
                                border-b md:border-b-0 md:border-r border-white'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white'>200+</h2>
                    <p className='text-white mt-2'>Premium Tools</p>
                </div>

                <div className='w-full md:w-1/3 py-4'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white'>4.9</h2>
                    <p className='text-white mt-2'>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;