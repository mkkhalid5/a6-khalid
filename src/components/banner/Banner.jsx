import React from 'react';
import banner from '../../assets/banner.png'
import playIcon from '../../assets/Play.png'
import radioIcon from '../../assets/radioIcon.png'
const Banner = () => {
    return (
        <div>
            <div className='max-w-md md:max-w-4xl lg:max-w-7xl lg:flex-row mx-auto flex py-15 justify-around flex-col-reverse gap-3 items-center'>
                <div className='space-y-8 flex items-center justify-center'>
                    <div className='space-y-4'>
                        <div className='flex gap-2 bg-[#E1E7FF] rounded-full py-3 px-4 w-80'>
                            <img className='w-6' src={radioIcon} alt="" />
                            <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                        </div>
                        <h2 className='text-5xl md:text-7xl font-extrabold'>Supercharge Your <br /> Digital Workflow</h2>
                        <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />
                            Explore Products
                        </p>
                        <div className='space-x-4'>
                            <button className='btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none'>Explore Products</button>
                            <button className='btn btn-outline rounded-full border border-[#9514FA]'><img src={playIcon} alt="" /><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Watch Demo</span></button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='w-125 h-125' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;