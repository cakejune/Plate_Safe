import "./App.css";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Browse from "./Browse.js";
import { Route, useLocation } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import React, { useState, useEffect } from "react";

import Geocode from "react-geocode";

function App() {
  const location = useLocation();
  const [restaurantData, setRestaurantData] = useState([]);
  const [callUseEffect, setCallUseEffect] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then((res) => res.json())
      .then((data) => {
        setRestaurantData(data)
        console.log(data[0])
      });
  }, [callUseEffect]);

  function addDish(id, newDish) {
    fetch(`http://localhost:/9292/restaurants/${id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newDish),
    })
      .then((response) => response.json())
      .then((data) => setRestaurantData([...restaurantData, data]));
  }

  async function deleteDish(id) {
    console.log(id)
    const resp = await fetch(
      `http://localhost:9292/dishes/${id}`, { method: 'DELETE' }
    );
    const data = await resp.json();
    setCallUseEffect(!callUseEffect)
  }

  function handleStateUpdate(data) {
    const updatedRestData = restaurantData.map((restaurant) => {
      if (data.id === restaurant.id) {
        return data;
      } else {
        return restaurant;
      }
    });
    setRestaurantData(updatedRestData);
  }

  async function editRestaurantLocation(id, newLocationObj) {
    // console.log(id, newLocationObj)
    try {
      const response = await fetch(`http://localhost:9292/restaurants/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLocationObj),
      });
      const data = await response.json();
      handleStateUpdate(data);
      // console.log(newLocationObj);
    } catch (error) {
      console.error(error);
    }
  }

  // Function for mapping
  function getCoordinates() {
    let coorArr = [];
    Geocode.setApiKey("AIzaSyAeE3bXV6v7tP-d4EFZdWeqbdjS2xcS68U");
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();
    // restaurantData.map(rest => {
    //   Geocode.fromAddress(rest.location).then(
    //     (response) => {
    //       const { lat, lng } = response.results[0].geometry.location;
    //       console.log(lat, lng);
    //       return coorArr.push([lat, lng])
    //     },
    //     (error) => {
    //       return console.error(error);
    //     }
    //   )
    // })
    console.log(coorArr);
    return coorArr;
  }

  return (
    <div className="App">
      <Nav />
      <SlideRoutes location={location} duration={400}>
        <Route
          path="/"
          element={<Home restaurantData={restaurantData} exact />}
        />
        <Route path="/About" element={<About />} />
        <Route
          path="/Browse"
          element={
            <Browse
              key={1}
              restaurantData={restaurantData}
              addDish={addDish}
              deleteDish={deleteDish}
              editRestaurantLocation={editRestaurantLocation}
              getCoordinates={getCoordinates}
            />
          }
        />
      </SlideRoutes>
    </div>
  );
}

export default App;

// {
//   const fetchData = async () => {
//     const data = await fetch("http://localhost:9292/restaurants");
//     const response = await data.json();
//     setRestaurantData(response);

//   };
// }

//
