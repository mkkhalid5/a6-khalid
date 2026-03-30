import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15'>
            <div className='max-w-md md:max-w-4xl lg:max-w-7xl mx-auto flex flex-col md:flex-row justify-around'>
                <div className='py-3 px-30 border-b-2 md:border-r-2 md:border-b-0 border-white'>
                    <span className='text-6xl font-extrabold text-white text-center'>50K+</span>
                    <p className='text-white text-center'>Active Users</p>
                </div>
                <div className='py-3 px-30 border-b-2 md:border-r-2 md:border-b-0 md:flex-2 border-white'>
                    <span className='text-6xl font-extrabold text-white text-center'>200+</span>
                    <p className='text-white text-center'>Premium Tools</p>
                </div>
                <div className='py-3 px-30'>
                    <span className='text-6xl font-extrabold text-white text-center'>4.9</span>
                    <p className='text-white text-center'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
