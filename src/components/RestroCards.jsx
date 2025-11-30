import React from 'react'
import CDN_URL from '../utils/constant';

function RestroCards(props) {

    const {resData} = props;

    const imageUrl =  `${CDN_URL}${resData.card.card.info.cloudinaryImageId}`;
  
    const {
      
        name = "Unknown",
        cuisines = [],
        areaName = "Not Available",
        avgRating = "N/A"
    } = resData?.card?.card?.info || {};
    // it is optional chaining
    return (
    <div className='w-64 bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
    <div className='w-full h-40'>
      <img 
        src={imageUrl}
        alt="Hari Dosa" 
        className='w-full h-full object-cover'
      />
    </div>
    <div className='p-4'>
      <h1 className='text-lg font-semibold text-gray-800'>{name}</h1>
      <p className='text-sm text-gray-600'>{cuisines.join(",")}</p> 
      <p className='text-md text-gray-900'>{areaName}</p>
      <div className='flex items-center mt-2'>
        <span className='text-yellow-500 text-lg font-bold'>★ {avgRating}</span>
      </div>
    </div>
  </div>
  )
}

export default RestroCards
