import React from 'react';

const NavBar = () => {
    return (
        <div className='shadow-xl'>
            <div className='max-w-7xl mx-auto py-6 flex justify-between'>
                <h2 className='text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#101727] font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>

                <div className="indicator gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                    {/* <span className="badge badge-sm indicator-item">8</span> */}
                    <h2>Login</h2>
                    <button className=' text-white rounded-full px-4 py-3 font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Get Started</button>
                </div>


            </div>
        </div>
    );
};

export default NavBar;