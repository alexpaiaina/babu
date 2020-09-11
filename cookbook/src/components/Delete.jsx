// import React from 'react';
// import axios from 'axios';
// import UpdateRecipe from './UpdateRecipe';

// const Delete = (props) => {
//   const [recipe, setRecipe] = props.recipe.fields;;
//   const [ingredients, setIngredients] = props.recipe.fields;;
//   const [description, setDescription] = props.recipe.fields;;
//   const [type, setType] =  props.recipe.fields;
//   const { fetchRecipe, setFetchRecipe } = props.recipe.fields;

//   const handleSubmit = async (fields) => {
//     const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cookbook/${recipe.id}`;
//     console.log(fields)
//     await axios.delete(
//       airtableURL,
//       { fields: fields },
//       {
//      headers: {
//         'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//         "                                                                                                                          Content-Type": "application/json",
//         },
        
//     });
//     setFetchReviews(!fetchReviews);
//   }

//   return (
//     <div className="App" className="recipeboxes">
//     <form onSubmit={(e) => handleSubmit(e)}>
//       <label htmlFor="recipe"></label>
//       <input
//         placeholder="recipe"
//         name="recipe"
//         type="recipe"
//         value={recipe}
//         onChange={(e) => setRecipe(e.target.value)}
//       />
//       <label htmlFor="ingredients"></label>
//       <input
//         placeholder="ingredients"
//         name="ingredients"
//         type="ingredients"
//         value={ingredients}
//         onChange={(e) => setIngredients(e.target.value)}
//       />
//       <label htmlFor="description"></label>
//       <input
//         placeholder="description"
//         name="description"
//         type="description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <label htmlFor="type"></label>
//       <input
//         placeholder="type"
//         name="type"
//         type="type"
//         value={type}
//         onChange={(e) => setType(e.target.value)}
//       />
//       <input type="submit" value="update"/>
//     </form>
  
//       <button onClick={handleSubmit}>Produce</button>
//     </div>

//   )
// }
// export default Delete;