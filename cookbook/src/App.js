import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import CreateRecipe from "./components/CreateRecipe";
import Recipes from "./components/Recipes";
import About from "./components/About";
import Contact from "./components/Contact";
import Casual from "./components/Casual";
import Group from "./components/Group";
import Home from "./components/Home";
import Quick from "./components/Quick";
import UpdateRecipe from "./components/UpdateRecipe";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [fetchRecipe, setFetchRecipe] = useState(false);
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
        <Switch>
          <div className="App">
            <nav>
              <Link to="/about">About
                <About />
              </Link>

              <Link to="/contact">Contact
                <Contact />
              </Link>
            </nav>

            <header>Babu's Kitchen Cookbook</header>
          </div>

          <div className="home-pic">
            <Route path="/recipes/group">
              <Group />
              <img
                className="group-pic"
                src="https://dl.airtable.com/.attachments/48921d7aac20d6892987340c94e5447c/f4fc7b84/IMG_2115.JPG"
                alt="cookbook"
              />
            </Route>
          </div>

          <div>
            <Route path="/recipes/quick">
              <Quick />
              <img
                className="quick-pic"
                src="https://dl.airtable.com/.attachments/f7f18f3d20253dc508733cde350639b3/2c8f9994/IMG_2118.JPG"
                alt="cookbook"
              />
            </Route>
          </div>

          <div>
            <Route path="/recipes/casual">
              <Casual />
              <img
                className="casual-pic"
                src="https://dl.airtable.com/.attachments/ce4bfd90ee712211f7637516c837373d/004b57ec/IMG_2124.JPG"
                alt="cookbook"
              />
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
              <Home speeds={speeds} recipes={recipes} />
            </Route>
            <div> */}

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
          </div>
        </Switch>
      </>
    </div>
  );
}

export default App;
