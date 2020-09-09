// import React from "react";

// const Home = (props) => {
//   // const getRecipesBySpeed = (speed) => {
//   const category = props.recipes.filter((recipe) => recipe.fields.type === props.speed);
//   return (
//     <div className="Home">
//       <h1>Home Page</h1>
//       {/* {props.speeds.map((speed) => ( */}
//       {/* // <div onClick={() => getRecipesBySpeed(speed)}> {speed} </div>
//       // ))} */}
//       <h1>{category.fields.type}</h1>
//       {props.recipes.map((recipe) => (
//         <>
//           <img
//             className={"quick-pic"}
//             src={recipe.fields.pic[15].url}
//             alt="cookbook"
//           />
//           <img
//             className={"casual-pic"}
//             src={recipe.fields.pic[7].url}
//             alt="cookbook"
//           />
//           <img
//             className={"group-pic"}
//             src={recipe.fields.pic[10].url}
//             alt="cookbook"
//           />
//           </>
//       ))}
//     </div>
//   );
// };

// export default Home;
