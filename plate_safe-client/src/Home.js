import React from 'react';
import Top5Card from './Top5Card';
import RestCard from './RestCard';

function Home({restaurantData, deleteRestaurant}) {
//here we have states. Restaurants is all the restaurants. deleteRestaurant is a
//callback function that lives in App.js. That function will take a restaurant. 
    // function handleClick(e){
    //     setRestaurantState(e.target.value)
    //     deleteRestaurant(restaurants.find_by(restaurant.name = e.target.name))
    // }

    //dummy handleClick function below
    function handleClick(){
        console.log("this will eventually delete a restaurant", restaurantData, deleteRestaurant)
    }

return(
    <>
    <div>Hello</div>
    <button onClick={()=>handleClick()}>Delete Restaurant</button>
    {restaurantData.map((restaurant)=>{
        return (
            <RestCard restaurant={restaurant}/>
        )
    })}
    
</>
)
}

export default Home