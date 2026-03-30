import React from 'react';

const Workfolows = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='max-w-md md:max-w-4xl lg:max-w-7xl mx-auto  py-30 space-y-10'>
                <div className='text-center space-y-3'>
                    <h1 className='text-white text-5xl font-extrabold'>Simple, Transparent Pricing</h1>
                    <p className='text-white'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-2'>
                    <div className='space-x-4'>
                        <button className='btn rounded-full text-purple-600'>Explore Products</button>
                        <button className='btn rounded-full btn-outline text-white'>View Pricing</button>
                    </div>
                    <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default Workfolows;