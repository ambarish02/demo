import React, { useState } from 'react'
import RestroCards from './RestroCards'
import resList from '../utils/mockData'

function Body() {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    // here we import data from mockData and store in state variable as state variable hook

return (
    <div className='p-4 mt-4'>
      <div  className='w-full max-w-md mb-4'>
        
        <button 
        onClick={()=>{
            const filteredList = listOfRestaurant.filter(
                (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
        }}
        className="bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300">Top Rated Restaurant</button>
      </div>
      {/* we filtered out above 4 rating restaurant and save it in filteredList and update our variable by put filteredList inside setListOfRestaurant */}


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 flex flex-wrap gap-5 overflow-hidden'>
         {listOfRestaurant.map((restaurant) => (
            <RestroCards key={restaurant.card.card.id} resData={restaurant}/>
         ))}
     </div>
     <div>
      Ambarish
     </div>
    </div>
  )
}

export default Body
