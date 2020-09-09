import React from "react";

const Home = (props) => {
  // const getRecipesBySpeed = (speed) => {
  const category = props.recipes.filter((recipe) => recipe.fields.type === props.speed);
  console.log(props.recipes)
  return (
    <div className="Home">
      <h1>Home Page</h1>
      {/* {props.speeds.map((speed) => (
        <div onClick={() => getRecipesBySpeed(speed)}> {speed} </div>
      )) */}
        {/* // <h1> { category.fields.type } </h1> */}
      {props.recipes.map((recipe, index) => (
        <>
          <img
            className={"home-pic"}
            src={index===15&&recipe.fields.pic[0].url}
            alt="cookbook"
          />
          <img
            className={"home-pic"}
            src={index===13&&recipe.fields.pic[0].url}
            alt="cookbook"
          />
          <img
            className={"home-pic"}
            src={index===5&&recipe.fields.pic[0].url}
            alt="cookbook"
          />
        </>
        ))}
    </div>
  );
};

export default Home;
