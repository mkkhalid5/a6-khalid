import React from 'react';

const Pricing = () => {
    return (
        <div className='max-w-md md:max-w-4xl lg:max-w-7xl mx-auto  py-30 space-y-10'>
            <div className='text-center space-y-3'>
                <h1 className='text-[#101727] text-5xl font-extrabold'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7.5'>

                <div className='border border-zinc-200 bg-[#F9FAFC] p-6 space-y-6 rounded-lg'>
                    <div>
                        <h2 className='text-[#101727] font-bold'>Starter</h2>
                        <p className='text-[#627382]'>Perfect for getting started</p>
                    </div>
                    <p className='text-[#627382]'><span className='text-[40px] text-[#101727] font-bold'>$0</span>/Month</p>
                    <div>
                        <p className='text-[#627382]'><i class="fa-solid fa-check text-green-500 "></i> Access to 10 free tools</p>
                        <p className='text-[#627382]'><i class="fa-solid fa-check text-green-500 "></i> Basic templates</p>
                        <p className='text-[#627382]'><i class="fa-solid fa-check text-green-500 "></i> Community support</p>
                        <p className='text-[#627382]'><i class="fa-solid fa-check text-green-500 "></i> 1 project per month</p>
                    </div>
                    <button className='btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full'>Get Started Free</button>
                </div>

                <div className='relative bg-[#F9FAFC] bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-6 space-y-6 rounded-lg '>
                    <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                        <span className='bg-[#FEF3C6] text-[#BB4D00] text-sm font-semibold px-4 py-1 rounded-full shadow'>
                            Most Popular
                        </span>
                    </div>
                    <div>
                        <h2 className='text-white font-bold'>Starter</h2>
                        <p className='text-white'>Perfect for getting started</p>
                    </div>
                    <p className='text-white'><span className='text-[40px] text-white font-bold'>$0</span>/Month</p>
                    <div>
                        <p className='text-white'><i class="fa-solid fa-check text-white "></i> Access to 10 free tools</p>
                        <p className='text-white'><i class="fa-solid fa-check text-white "></i> Basic templates</p>
                        <p className='text-white'><i class="fa-solid fa-check text-white "></i> Community support</p>
                        <p className='text-white'><i class="fa-solid fa-check text-white "></i> 1 project per month</p>
                    </div>
                    <button className='btn rounded-full text-white  w-full'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Get Started Free</span></button>
                </div>

                <div className='border border-zinc-200 bg-[#F9FAFC] p-6 space-y-6 rounded-lg'>
                    <div>
                        <h2 className='text-[#101727] font-bold'>Starter</h2>
                        <p className='text-[#627382]'>Perfect for getting started</p>
                    </div>
                    <p className='text-[#627382]'><span className='text-[40px] text-[#101727] font-bold'>$0</span>/Month</p>
                    <div>
                        <p className='text-[#627382]'><i class="fa-solid fa-check text-green-500 "></i> Access to 10 free tools</p>
                        <p className='text-[#627382]'><i class="fa-solid fa-check text-green-500 "></i> Basic templates</p>
                        <p className='text-[#627382]'><i class="fa-solid fa-check text-green-500 "></i> Community support</p>
                        <p className='text-[#627382]'><i class="fa-solid fa-check text-green-500 "></i> 1 project per month</p>
                    </div>
                    <button className='btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full'>Get Started Free</button>
                </div>

            </div>
        </div>
    );
};

export default Pricing;