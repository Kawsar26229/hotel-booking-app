import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';

const Home = () => {
    const hotels = useLoaderData();
    const {products} = hotels;
    return (
        <div className='grid grid-cols-3 justify-items-center gap-8 mt-10'>
            {
                products.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
            }
        </div>
    );
};

export default Home;