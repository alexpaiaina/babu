import React from "react";
import CreateRecipe from "./CreateRecipe";
import { Link } from "react-router-dom"

const Group = (props) => {
  const filteredRecipes = props.recipes.filter((recipe) => {
    console.log(recipe.fields.type, props.speeds);
    return recipe.fields.type === "group";
  });
  return (
    <div>
      <h1 className="recipeHead">Group Recipes</h1>
      <Link to="/recipes/group"></Link>
      <CreateRecipe />
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
                  alt="group1"
                  className="splitpics"
                />
              }
            </div>
          </div>
        ))}
    </div>
  );
};

export default Group;
