import React from "react";
import CreateRecipe from "./CreateRecipe";
import { Link } from "react-router-dom"

const Casual = (props) => {
  const filteredRecipes = props.recipes.filter((recipe) => {
    console.log(recipe.fields.type, props.speeds);
    return recipe.fields.type === "casual";
  });
  return (
    <div>
      <h1 className="recipeHead">Casual Recipes</h1>
      <Link to="/recipes/casual">
      <CreateRecipe />
      </Link>
      {filteredRecipes &&
        filteredRecipes.map((recipe) => (
          <div className="recipeText">
            <div className="titleName">{recipe.fields.recipe}</div>
            <br/>
            <div>Ingredients : {recipe.fields.ingredients}</div>
            <br/>
            <div>{recipe.fields.description}</div>
            <div>
              {
                <img
                  src={recipe.fields.pic[0].url}
                  alt="casual1"
                  className="splitpics"
                />
              }
            </div>
          </div>
        ))}
    </div>
  );
};

export default Casual;
