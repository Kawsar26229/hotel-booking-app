import React from 'react';

const Hotel = ({ hotel }) => {
  const { title, description, thumbnail } = hotel;
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img
          src={thumbnail}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
