import React from "react";

const Cake = ({ cake }) => {
  return (
    <>
      <h2>{cake.cakeName}</h2>
      <p>Ingredients: {cake.ingredients.join(", ")}</p>
      <p>Price: {cake.price}</p>
      <p>Rating: {cake.rating}</p>
    </>
  );
};

export default Cake;
