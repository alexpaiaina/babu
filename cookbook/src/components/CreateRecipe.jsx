import React, { useState } from 'react';
import axios from 'axios';

const CreateRecipe = (props) => {
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      recipe,
      ingredients,
      description
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/frylife`;
    // await axios.post(url, data, options (headers))
    await axios.post(airtableURL, { fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json',
      }
    });
    props.setFetchRecipe(!props.fetchRecipe);
    setRecipe('');
    setIngredients('');
    setDescription('');
  }

  // (label+input)*3 with emmet
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="recipe">Recipe:</label>
      <input
        name="recipe"
        type="recipe"
        value={recipe}
        onChange={(event) => setRecipe(event.target.value)}
      />
      <label htmlFor="ingredients">Ingredients:</label>
      <input
        name="ingredients"
        type="ingredients"
        value={ingredients}
        onChange={(event) => setIngredients(event.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <input
        name="description"
        type="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit"></button>
    </form>
  )
}
export default CreateRecipe;