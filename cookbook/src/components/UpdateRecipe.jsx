import React, { useState } from 'react';
import axios from 'axios';

const UpdateRecipe = (props) => {
  const [recipe, setRecipe] = useState(props.recipe.fields.recipe);
  const [ingredients, setIngredients] = useState(props.recipe.fields.ingredients);
  const [description, setDescription] = useState(props.recipe.fields.description);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      recipe,
      ingredients,
      description
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cook/${props.recipe.id}`;
    // await axios.put(url, data, options (headers))
    await axios.put(airtableURL, { fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    props.setFetchReviews(!props.fetchReviews);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="recipe">Title:</label>
      <input
        name="recipe"
        type="recipe"
        value={recipe}
        onChange={(event) => setRecipe(event.target.value)}
      />
      <label htmlFor="ingredients">ingredients:</label>
      <ingredientsarea
        name="ingredients"
        type="ingredients"
        value={ingredients}
        onChange={(event) => setIngredients(event.target.value)}
      />
      <label htmlFor="description">description:</label>
      <input
        name="description"
        type="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default UpdateRecipe; 