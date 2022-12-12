import React, { useState } from 'react';
import Map from './Map.js';
import Search from './Search.js';
import RestCard from './RestCard.js';
import {Grid} from '@mui/material'

function Browse({restaurantData, addDish, deleteDish, editRestaurantLocation, getCoordinates}) {

    const [search, setSearch] = useState("")

    const filteredRestaurants = restaurantData.filter((filteredRest) => {
        return filteredRest.name.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <>
        <div className="map-container">
            <Map 
            restaurantData={restaurantData}
            getCoordinates={getCoordinates}
            />
        </div>
        <div className='retuarant-container'>
            <Search search={search} setSearch={setSearch} />
        <Grid 
            container
            spacing={0}
            direction='row'
            justify='flex-start'
            alignItems='flex-start'
        >
            
            {filteredRestaurants.map((restaurant) => {
                return <RestCard key={(restaurant.id)*4} restaurant={restaurant} dishes={restaurant.dishes} addDish={addDish} deleteDish={deleteDish} editRestaurantLocation={editRestaurantLocation}/>
            })}
            
        </Grid>
    </div>
    </>
    )
}

export default Browse