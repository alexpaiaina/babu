import React, { useEffect, useState }from "react";
import axios from "axios";
// import { BrowserRouter as Router } from "./react-router-dom";
import CreateRecipe from './components/CreateRecipe';
import Recipe from "./components/Recipe";
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
// import '.App.css';



function App() {
  const [recipe, setRecipe] = useState([]);
  const [fetchRecipe, setFetchRecipe] = useState(false);

  useEffect(() => {
    const getRecipe = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cookbook?Grid%20view`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response)
      setRecipe(response.data.records);
    };
    getRecipe();
  }, []);

  return (
    <div className="App">
      <nav>
      <About />
        <Contact />
        </nav>
      <h1>Babu's Kitchen</h1>
      <Header/>
      <div className="menu-book">
        { 
            recipe.map((recipe) => (
            <Recipe recipe={recipe} key={recipe.id} />
        ))
          }
      </div>
      <CreateRecipe
        fetchRecipe={fetchRecipe}
        setFetchRecipe={setFetchRecipe}
      />
    </div>
  );
}

export default App;
