import React from "react";

const Recipes = (props) => {
  // const { recipe, ingredient, description } = props.recipe.fields;
  // const { fetchRecipe, setFetchRecipe } = props;
  console.log(props.recipes);
  // const cookbook = async () => {
  //   const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cookbook/${recipes.id}`;
  //   await axios.get(airtableURL, {
  //     headers: {
  //       Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //     },
  //   });
  //   setFetchRecipe(fetchRecipe);
  // };

  return (
    <div>
      {props.recipes.map((recipe) => (
        <>
          <div className={"recipe"}>{recipe.fields.recipe}</div>
          <div className={"ingredients"}>{recipe.fields.ingredients}</div>
          <div className={"desciption"}>{recipe.fields.description}</div>
          <img className={"pic"} src={recipe.fields.pic[0].url} alt="cookbook"/>
        </>
      ))}
      {/* <h4> recipe </h4> */}
      {/* <h5> {'ingredient'} </h5>
      <p> {'description'} </p> */}
      {/* <button onClick={cookbook}></button> */}
      {/* <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */}
    </div>
  );
};
export default Recipes;
