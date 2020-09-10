import React from "react";

const Casual = (props) => {
  const filteredRecipes = props.recipes.filter((recipe) => {
    console.log(recipe.fields.type, props.speeds);
    return recipe.fields.type === "casual";
  });
  return (
    <div>
      <h1 className="recipeHead">Casual Recipes</h1>
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
