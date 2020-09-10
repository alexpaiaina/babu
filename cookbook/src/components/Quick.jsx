import React from "react";

const Quick = (props) => {
  const filteredRecipes = props.recipes.filter((recipe) => {
    console.log(recipe.fields.type, props.speeds);
    return recipe.fields.type === "quick";
  });
  return (
    <div>
      <h1 className="recipeHead">Quick Recipes</h1>
      {filteredRecipes &&
        filteredRecipes.map((recipe) => (
          <div>
            <div>{recipe.fields.recipe}</div>
            <div>{recipe.fields.ingredients}</div>
            <div>{recipe.fields.description}</div>
            <div>
              {
                <img
                  src={recipe.fields.pic[0].url}
                  alt="quick1"
                  className="splitpics"
                />
              }
            </div>
          </div>
        ))}
    </div>
  );
};

export default Quick;
