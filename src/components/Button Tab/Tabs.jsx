import React from 'react';

const Tabs = ({ setActiveTab, carts }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='max-w-7xl mx-auto py-30'>
                <div className='space-y-4'>
                    <h2 className='text-[#101727] text-5xl font-extrabold text-center'>Premium Digital Tools</h2>
                    <p className='text-[#627382] text-center'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                </div>
                <div className='flex justify-center'>
                    <div className="w-max mt-4 tabs tabs-box justify-center bg-transparent rounded-full shadow">
                        <input
                            type="radio"
                            name="my_tabs_1"
                            className="tab rounded-full w-30 checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white"

                            aria-label="Products"
                            onClick={() => setActiveTab("products")}
                            defaultChecked
                        />
                        <input
                            type="radio"
                            name="my_tabs_1"
                            className="tab rounded-full w-30 checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white"
                            aria-label={`Cart(${carts.length})`}
                            onClick={() => setActiveTab("cart")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;