import React from 'react';
import axios from 'axios';

const Recipe = (props) => {
  const { recipe, ingredient, description } = props.recipe.fields;
  const { fetchRecipe, setFetchRecipe} = props;

  const handleGet = async () => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cookbook/${recipe.id}`;
    await axios.get(airtableURL, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    setFetchRecipe(fetchRecipe);
  }

  return (
    <div>
      <h4> {recipe} </h4>
      <h5> {ingredient} </h5>
      <p> {description} </p>
      <button
        onClick={handleGet}> Shazam!
      </button>
    </div>

  )
}
export default Recipe;