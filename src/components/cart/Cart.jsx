import React from 'react';

const Cart = ({carts}) => {
    console.log(carts)
    return (
        <div className='max-w-7xl mx-auto p-10 gap-6'>
            <h2 className="font-bold">Your Cart</h2>
            <div className='space-y-5 mt-4'>
                {
                    carts.map(cart => { <div className='flex items-center justify-between border border-zinc-300 rounded-lg p-3' key={cart.id}>
                        <div className='flex items-center gap-2'>
                            <div>
                                <img src={cart.image} alt="" />
                                <div>
                                    <h2 className='font-bold'>{cart.name}</h2>
                                    <p className='text-[#627382]'>${cart.price}</p>
                                </div>
                            </div>

                        </div>
                    </div>})
                }
            </div>
        </div>
    );
};

export default Cart;