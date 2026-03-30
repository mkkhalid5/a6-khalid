import React,{useState} from 'react';

const MainCard = ({ data, carts, setCarts }) => {
    const [isBuy, setIsBuy] = useState(false);

    const handleBuy = () =>{
        setIsBuy(true);
        const isFound = carts.find(item => item.id === data.id);
        if(isFound){
            return
        }
        setCarts([...carts,data])
    }

    return (
        <div>
            <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-300 p-6 space-y-7 hover:-translate-y-3 transition duration-300'>
                        <div className='flex justify-between'>
                            <img className='w-8 h-8' src={data.icon} alt="" />
                            {
                                data.tag === "popular" ? <p className='bg-[#E1E7FF] text-purple-700 px-3 py-1.5 rounded-full'>{data.tag}</p> :
                                data.tag === "new" ? <p className='bg-green-200 text-green-700 px-3 py-1.5 rounded-full'>{data.tag} </p> :
                                <p className='bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full'>{data.tag}</p>
                            }
                        </div>
                        <div className='space-y-4'>
                            <h2 className='text-[#001931] font-bold'>AI Writing Pro</h2>
                            <p className='text-[#627382]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                            <p className='text-[#627382]'><span className='text-[#101727] font-bold'>${data.price}</span>/Mo</p>
                            <div>
                               
                                {
                                    data.features.map(d => (
                                        <p><i class="fa-solid fa-check text-green-500 "></i>{d}</p>
                                    ))
                                }
                            </div>
                            {
                                    isBuy ? <button onClick={handleBuy} className='btn rounded-full px-30 text-white bg-green-500 w-full whitespace-nowrap'>Item Added to Cart</button>: <button onClick={handleBuy} className='btn rounded-full px-30 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full'>Buy Now</button>
                            }
                            
                        </div>
                    </div>
        </div>
    );
};

export default MainCard;