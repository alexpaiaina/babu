import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import CreateRecipe from "./components/CreateRecipe";
import Recipe from "./components/Recipe";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Home from "./components/Home";
import UpdateRecipe from "./components/UpdateRecipe";
import "./App.css";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [fetchRecipe, setFetchRecipe] = useState(false);

  useEffect(() => {
    const getRecipe = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cookbook?Grid%20view`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response);
      setRecipe(response.data.records.recipe);
    };
    getRecipe();
  }, []);

  return (
    <>
      <Switch>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
        <Route>
          <Header />
        </Route>
        <div className="menu-book">
          <Route>
            {recipe.map((recipe) => (
              <Recipe recipe={recipe} key={recipe.id} />
            ))}
          </Route>
        </div>
        <Route path="/create">
          <CreateRecipe
            fetchRecipe={fetchRecipe}
            setFetchRecipe={setFetchRecipe}
          />
        </Route>
        <Route path="/update">
          <UpdateRecipe />
        </Route>
      </Switch>
    </>
  );
}

export default App;
