import React, { useState } from "react";
import Cake from "./Cake";
import CakeForm from "./CakeForm";

const CakeContainer = () => {
  const [Cakes, setCakes] = useState([
    {
      cakeName: "Victoria Sponge",
      ingredients: [
        "eggs",
        "butter",
        "sugar",
        "self-raising flour",
        "baking powder",
        "milk",
      ],
      price: 5,
      rating: 5,
    },
    {
      cakeName: "Tea Loaf",
      ingredients: [
        "eggs",
        "oil",
        "dried fruit",
        "sugar",
        "self-raising flour",
        "strong tea",
      ],
      price: 2,
      rating: 3,
    },
    {
      cakeName: "Carrot Cake",
      ingredients: [
        "carrots",
        "walnuts",
        "oil",
        "cream cheese",
        "flour",
        "sugar",
      ],
      price: 8,
      rating: 5,
    },
  ]);

  const addCake = (newCake) => {
    setCakes([...Cakes, newCake]);
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <CakeForm onAddCake={addCake} />
      {Cakes.map((cake, index) => (
        <Cake key={index} cake={cake} />
      ))}
    </div>
  );
};

export default CakeContainer;
