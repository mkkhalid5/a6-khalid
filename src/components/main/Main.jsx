import Tabs from '../Button Tab/Tabs';
import { use } from 'react';
import MainCard from './MainCard';

const Main = ({ dataPromise, carts, setCarts }) => {
    const allData = use(dataPromise);
    
    
    return (
        <div className='max-w-md md:max-w-4xl lg:max-w-7xl mx-auto pb-30'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {allData.map(data => <div>
                    <MainCard data={data} carts={carts} setCarts={setCarts} />
                </div>)}
            </div>
        </div>
    );
};

export default Main;