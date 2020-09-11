import React, { useState } from "react";
import axios from "axios";

const CreateRecipe = (props) => {
  // const [createRecipe, setCreateRecipe] = useState("")
  const { prevFetchRecipe, setFetchRecipe } = props;
  const [recipe, setRecipe] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [pic, setPic] = useState("");

  const createRecipe = async (fields) => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cookbook`;
    console.log(fields);
    await axios.post(
      airtableURL,
      { fields: fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      recipe: recipe,
      ingredients: ingredients,
      description: description,
      type: type,
      pic: pic,
    };
    createRecipe(fields);
    // setFetchRecipe((prevFetchRecipe) => !prevFetchRecipe)
  }
  return (
    <div className="App" className="recipeboxes">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="recipe"></label>
        <input
          placeholder="recipe"
          id="recipe"
          type="recipe"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        />
        <label htmlFor="ingredients"></label>
        <input
          placeholder="ingredients"
          id="ingredients"
          type="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <label htmlFor="description"></label>
        <input
          placeholder="description"
          id="description"
          type="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="type"></label>
        <input
          placeholder="type"
          id="type"
          type="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="pic"></label>
        <input
          placeholder="pic"
          id="pic"
          type="pic"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
        />
        <input type="submit" value="create" />
      </form>
    </div>
  );
};
export default CreateRecipe;
