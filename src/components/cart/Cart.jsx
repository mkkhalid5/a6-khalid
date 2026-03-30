import React from 'react';
import cart from '../../assets/6011.jpg'

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, product) => sum + product.price, 0);
    const handlePayment = () => {
        setCarts([]);
    }

    const handleDelete = (cart) => {
        const filterData = carts.filter(c => c.id !== cart.id);
        setCarts(filterData);
    }

    return (
        <div className='max-w-md md:max-w-4xl lg:max-w-7xl mx-auto p-10 gap-6 shadow-lg border rounded-lg border-zinc-100 overflow-hidden  mb-10'>
            <h2 className="font-bold">Your Cart</h2>
            <div className='space-y-5 mt-4'>
                {
                    carts.map(cart => (
                        <div className='flex items-center justify-between border border-zinc-300 rounded-lg p-3' key={cart.id}>

                            <div className='flex gap-3'>
                                <img className='w-8 h-8' src={cart.icon} alt="" />
                                <div>
                                    <h2 className='font-bold'>{cart.name}</h2>
                                    <p className='text-[#627382]'>${cart.price}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(cart)} className='text-red-500'>Remove</button>
                            </div>

                        </div>
                    ))
                }
            </div>

            {carts.length !== 0 ? <div>
                <div className='flex justify-between text-white p-4 mt-5 rounded-lg'>
                    <p className='text-[#627382]'>Total: </p>
                    <p className='text-[#101727] font-bold'>$ {totalPrice}</p>
                </div>

                <button className='btn w-full mt-2 bg-red-500 text-white text2xl rounded-lg' onClick={handlePayment}>Proceed to Checkout</button>
            </div> :
                <div className='flex justify-center items-center flex-col'>
                    <img className='h-30 w-30' src={cart} alt="" />
                    <h2 className='text-[#627382]'>Your cart is Empty</h2>
                </div>}
        </div>
    );
};

export default Cart;