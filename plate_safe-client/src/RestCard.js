import React from "react";

function RestCard({ restaurant }) {
  return (
    <div className="resturant_card">
      <div className="restaurant_title"><strong>{restaurant.name}</strong></div>

      {restaurant.dishes.map((dish) => {
        return <div key={dish.id}>{dish.name}</div>;
      })}
    </div>
  );
}

export default RestCard;
