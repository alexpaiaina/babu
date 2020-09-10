import React from "react";
import { Link } from "react-router-dom";

const Pics = (props) => {
  // const getRecipesBySpeed = (speed) => {
  // const category = props.recipes.filter(
  //   (recipe) => recipe.fields.pic.type === props.speed
  // );
  // console.log(props.recipes);
  // console.log(category)
  return (
    <div className="Home">
      {/* <h1> { category.fields.pic.speed } </h1> */}
      {/* <h1>Home Page</h1> */}
      {/* {props.recipes.filter((recipe, index) => {  */}
      return (
      <>
        <Link to="/recipes/quick">
          <img
            className="quick-pic"
            src="https://dl.airtable.com/.attachments/f7f18f3d20253dc508733cde350639b3/2c8f9994/IMG_2118.JPG"
            alt="cookbook"
          />
        </Link>
        <Link to="/recipes/casual">
          <img
            className="casual-pic"
            src="https://dl.airtable.com/.attachments/ce4bfd90ee712211f7637516c837373d/004b57ec/IMG_2124.JPG"
            alt="cookbook"
          />
        </Link>
        <Link to="/recipes/group">
          <img
            className="group-pic"
            src="https://dl.airtable.com/.attachments/48921d7aac20d6892987340c94e5447c/f4fc7b84/IMG_2115.JPG"
            alt="cookbook"
          />
        </Link>
      </>
      {/* ) }) } */}
    </div>
  );
};

export default Pics;
