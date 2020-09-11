// import React, { useState } from "react";
// import axios from "axios";

// const UpdateRecipe = (props) => {
//   const [recipe, setRecipe] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [description, setDescription] = useState("");
//   const [type, setType] = useState("");

//   const updateRecipe = async (fields) => {
//     const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cook/${props.recipe.id}`;
//     await axios.put(
//       airtableURL,
//       { fields: fields },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const fields = {
//         recipe : recipe,
//         ingredients : ingredients,
//         description : description,
//         type : type,
//       };
//       updateRecipe(fields);
//       props.setFetchReviews(!props.fetchReviews);
//     };

//     return (
//       <div className="App" className="recipeboxes">
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <label htmlFor="recipe"></label>
//           <input
//             placeholder="recipe"
//             name="recipe"
//             type="recipe"
//             value={recipe}
//             onChange={(e) => setRecipe(e.target.value)}
//           />
//           <label htmlFor="ingredients"></label>
//           <input
//             placeholder="ingredients"
//             name="ingredients"
//             type="ingredients"
//             value={ingredients}
//             onChange={(e) => setIngredients(e.target.value)}
//           />
//           <label htmlFor="description"></label>
//           <input
//             placeholder="description"
//             name="description"
//             type="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <label htmlFor="type"></label>
//           <input
//             placeholder="type"
//             name="type"
//             type="type"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//           />
//           <input type="submit" value="update"/>
//         </form>
//       </div>
//     );
//   };
// export default UpdateRecipe;
