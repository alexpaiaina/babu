import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
// import CreateRecipe from "./components/CreateRecipe";
import Recipes from "./components/Recipes";
// import Header from "./components/Header";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Nav from "./components/Nav";
import Home from "./components/Home";
// import UpdateRecipe from "./components/UpdateRecipe";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  // const [fetchRecipe, setFetchRecipe] = useState(false);
  const speeds = ["quick", "casual", "group"];

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
          {/* <div className="App"> */}
          {/* <Nav />
            <Route key="about" exact path="/about" />
            <About />
            <Route key="contact" exact path="/contact" />
            <Contact /> */}
          {/* </div> */}
          {/* <Route>
            <Header />
          </Route> */}
          {/* <div className="menu-book"> */}
          <Route key="home" exact path="/">
            <Home speeds={speeds} recipes={recipes} />
          </Route>
          <Route key="recipes" exact path="/recipes">
            <Recipes recipes={recipes} />
          </Route>
          {/* </div> */}
          {/* <Route path="/create"> */}
          {/* <CreateRecipe
            fetchRecipe={fetchRecipe}
            setFetchRecipe={setFetchRecipe}
          />
        </Route> */}
          {/* <Route path="/update">
          <UpdateRecipe />
        </Route> */}
        </Switch>
      </>
    </div>
  );
}

export default App;
