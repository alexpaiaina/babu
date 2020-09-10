import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
// import CreateRecipe from "./components/CreateRecipe";
// import Recipes from "./components/Recipes";
import About from "./components/About";
import Contact from "./components/Contact";
// import AddTripButton from "./components/Buttons";
// import Casual from "./components/Casual";
// import Group from "./components/Group";
// import Quick from "./components/Quick";
import Home from "./components/Home";
// import UpdateRecipe from "./components/UpdateRecipe";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  // const [fetchRecipe, setFetchRecipe] = useState(false);
  // const speeds = ["quick", "casual", "group"];

  useEffect(() => {
    const getRecipe = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cookbook?Grid%20view`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response);
      setRecipes(response.data.records);
    };
    getRecipe();
  }, []);

  return (
    <div>
      <>
        {/* <Switch> */}
          <div className="App">
            <nav className="cherry">
              <Link to="/about">About</Link>

              <Link to="/">
                Home
              </Link>

              <Link to="/contact">
                Contact
              </Link>
            </nav>

            <header>Babu's Kitchen Cookbook</header>
          </div>

          <div>
            <Route path="/about">
              <About />
            </Route>
          </div>

          <div>
            <Route exact path="/">
              <Home />
            </Route>
          </div>

          <div>
            <Route path="/contact">
              <Contact/>
            </Route>
          </div>

           <div>
            <Route exact path="/">
              <Link to="/">
                <Home />
              </Link>
            </Route>
          </div> 

          {/* <div className="menu-book">
            <Route key="home" exact path="/">
              <Pics speeds={speeds} recipes={recipes} />
            </Route>
            <div> 

          <div>
            <Route key="recipes" path="/recipes">
              <Recipes recipes={recipes} />
            </Route>
          </div>

          <div>
            <Route path="/create">
              <CreateRecipe
                fetchRecipe={fetchRecipe}
                setFetchRecipe={setFetchRecipe}
              />
            </Route>
          </div>

          <div>
            <Route path="/updaterecipe">
              <UpdateRecipe />
            </Route>
          </div>   */}
        {/* </Switch> */}
      </>
    </div>
  );
}

export default App;
