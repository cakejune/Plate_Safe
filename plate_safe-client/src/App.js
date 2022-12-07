import "./App.css";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Browse from "./Browse.js";
import { Route, useLocation } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import React, { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const [restaurantData, setRestaurantData] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
    .then(res => res.json())
    .then(data => setRestaurantData(data))
  }, []);

  //this function should be passed down to the components where delete requests will be 
  //happening.
  function deleteRestaurant(restaurant){
    console.log("This will eventually fetch our data and delete a restaurant from our database.")
  }
console.log(restaurantData)
  return (
    <div className="App">
      <Nav />
      <SlideRoutes location={location} duration={400}>
        <Route path="/" element={<Home deleteRestaurant={deleteRestaurant} restaurantData={restaurantData} exact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Browse" element={<Browse restaurantData={restaurantData}/>} />
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