import React, { useState } from "react";
import axios from "axios";

const CreateRecipe = (props) => {
  const {prevFetchRecipe, setFetchRecipe} = props
  const [recipe, setRecipe] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("Wizard of Oz");
  const [type, setType] = useState("");

  const createRecipe = async (fields) => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cookbook`;
    console.log(fields)
    await axios.post(
      airtableURL,
      { fields: fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      })
  };
  
  //   props.setFetchRecipe(!props.fetchRecipe);
  //   setRecipe("");
  //   setIngredients("");
  //   setDescription("");
  //   setType("");
  // };

const handleSubmit = async (e) => {
  e.preventDefault()
  const fields = {
    recipe: recipe,
    ingredients: ingredients,
    description: description,
    type: type,
  };
  console.log('hey handle submit')
  createRecipe(fields);
  setFetchRecipe(prevFetchRecipe => !prevFetchRecipe)
}
  return (
    <div className="App" className="createrecipe">
    <form onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor="recipe"> Recipe: </label>
      <input
        id="recipe"
        type="recipe"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
      />
      <label htmlFor="ingredients">Ingredients:</label>
      <input
        id="ingredients"
        type="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <input
        id="description"
        type="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="type">Types:</label>
      <input
        id="type"
        type="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input type="submit" value='submit'/>
      </form>
      {console.log(recipe)}
      {console.log(ingredients)}
      {console.log(description)}
      {console.log(type)}
      </div>
  );
  };
export default CreateRecipe;
