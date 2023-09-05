import React, { useState } from "react";

const CakeForm = ({ onAddCake }) => {
  const [newCake, setNewCake] = useState({
    cakeName: "",
    ingredients: "",
    price: "",
    rating: "",
  });

  const [error, setError] = useState("");

  const handleValidation = () => {
    let failedValidation = false;

    if (
      newCake.cakeName === "" ||
      newCake.ingredients === "" ||
      newCake.price <= 0 ||
      newCake.rating <= 0
    ) {
      failedValidation = true;
      setError("Please fill in all fields and provide valid values");
    }

    return failedValidation;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidation()) {
      const cakeToAdd = {
        cakeName: newCake.cakeName,
        ingredients: newCake.ingredients.split(",").map((ingredient) => ingredient.trim()),
        price: parseFloat(newCake.price),
        rating: parseInt(newCake.rating),
      };

      onAddCake(cakeToAdd);

      setNewCake({
        cakeName: "",
        ingredients: "",
        price: "",
        rating: "",
      });
      setError("");
    }
  };

  return (
    <>
      <h2>Add a New Cake</h2>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cakeName"
          placeholder="Cake Name"
          value={newCake.cakeName}
          onChange={(e) => setNewCake({ ...newCake, cakeName: e.target.value })}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients (comma-separated)"
          value={newCake.ingredients}
          onChange={(e) => setNewCake({ ...newCake, ingredients: e.target.value })}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newCake.price}
          onChange={(e) => setNewCake({ ...newCake, price: e.target.value })}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newCake.rating}
          onChange={(e) => setNewCake({ ...newCake, rating: e.target.value })}
        />
        <input type="submit" value="Add Cake" />
      </form>
    </>
  );
};

export default CakeForm;
