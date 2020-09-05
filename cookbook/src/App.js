import React, { useEffect, useState }from "react";
import axios from "axios";
// import '.App.css';



function App() {
  const [menu, setMenu] = useState([]);
  // const [fetchMenu, setFetchMenu] = useState(false);

  useEffect(() => {
    const getMenu = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cookbook?Grid%20view`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response)
      setMenu(response.data.records);
    };
    getMenu();
  }, []);

  return (
    <div className="App">
      <div className="menu-book">
        <nav key="/">
      {/* {
        menu.map((menu) => (
          <Menu menu={menu} key={menu.id}/>
        ))
      } */}
          </nav>
    </div>
    </div>
  );
}

export default App;
