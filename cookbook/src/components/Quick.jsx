import React from "react";
import CreateRecipe from "./CreateRecipe";
import { Link } from "react-router-dom"
// import UpdateRecipe from "./UpdateRecipe"
// import Delete from "./Delete"
const Quick = (props) => {
  const filteredRecipes = props.recipes.filter((recipe) => {
    console.log(recipe.fields.type, props.speeds);
    return recipe.fields.type === "quick";
  });
  console.log(filteredRecipes)
  return (
    <div>
      <h1 className="recipeHead">Quick Recipes</h1>
      <Link to="/recipes/quick"></Link>
      {filteredRecipes &&
        filteredRecipes.map((recipe) => (
          <div className="recipeText"> 
            <div className="titleName">{recipe.fields.recipe}</div>
            <div className="picIndy">Ingredients : {recipe.fields.ingredients}</div>
            <div className="picIndy">{recipe.fields.description}</div>
            <div>
              {
                <img
                  src= {recipe.fields.pic.split(" ")[1].substring(1,recipe.fields.pic.split(" ")[1].length-1)}
                  alt="quick1"
                  className="splitpics"
                />
              }
            </div>
            {console.log(recipe.fields.pic.split(" ")[1].substring(1,recipe.fields.pic.split(" ")[1].length - 1))}
          </div>
        ))}
      <CreateRecipe />
      {/* <UpdateRecipe /> */}
      {/* <Delete /> */}
    </div>
  );
};

export default Quick;
