import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='max-w-md md:max-w-7xl mx-auto pt-30 grid lg:grid-cols-6 gap-4'>
                <div className="space-y-4 col-span-2">
                    <h2 className="text-white font-medium">DigiTools</h2>
                    <p className="text-white/50">Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div className="space-y-4">
                    <p className="text-white font-medium">Product</p>
                    <p className="text-white/50">Features</p>
                    <p className="text-white/50">Pricing</p>
                    <p className="text-white/50">Templates</p>
                    <p className="text-white/50">Integrations</p>
                </div>
                <div className="space-y-4">
                    <p className="text-white font-medium">Company</p>
                    <p className="text-white/50">About</p>
                    <p className="text-white/50">Blog</p>
                    <p className="text-white/50">Careers</p>
                    <p className="text-white/50">Press</p>
                </div>
                <div className="space-y-4">
                    <p className="text-white font-medium">Resources</p>
                    <p className="text-white/50">Help Center</p>
                    <p className="text-white/50">Community</p>
                    <p className="text-white/50">Contact</p>
                </div>
                <div className='space-y-4'>
                    <p className='text-white font-medium'>Social Links</p>
                    <div className=' display flex gap-2'>
                        <div className='w-10 h-10 flex items-center justify-center bg-white rounded-full'><AiFillInstagram /></div> 
                        <div className='w-10 h-10 flex items-center justify-center bg-white rounded-full'><FaSquareFacebook /></div> 
                        <div className='w-10 h-10 flex items-center justify-center bg-white rounded-full'><FaXTwitter /></div> 
                    </div>
                </div>
            </div>
            
            <div className='max-w-md md:max-w-7xl mx-auto text-center flex flex-col md:flex-row justify-between border-t border-zinc-500 mt-20 py-7.5 pb-6'>
                <div className='text-white/50'>© 2026 Digitools. All rights reserved.</div>
                <div className='flex gap-4 text-center justify-center'>
                    <p className='text-white/50 text-center'>Privacy Policy </p>
                    <p className='text-white/50 text-center'>Terms of Service</p>
                    <p className='text-white/50 text-center'>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;