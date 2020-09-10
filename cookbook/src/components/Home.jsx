import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="Home">
      <header>Babu's Kitchen Cookbook</header>
      <>
        <Link to="/recipes/quick"><h3>Quick</h3>
          <img
            className="quick-pic"
            src="https://dl.airtable.com/.attachments/f7f18f3d20253dc508733cde350639b3/2c8f9994/IMG_2118.JPG"
            alt="cookbook"
          />
        </Link>
        <Link to="/recipes/casual"><h3>Casual</h3>
          <img
            className="casual-pic"
            src="https://dl.airtable.com/.attachments/ce4bfd90ee712211f7637516c837373d/004b57ec/IMG_2124.JPG"
            alt="cookbook"
          />
        </Link>
        <Link to="/recipes/group"><h3>Group</h3>
          <img
            className="group-pic"
            src="https://dl.airtable.com/.attachments/48921d7aac20d6892987340c94e5447c/f4fc7b84/IMG_2115.JPG"
            alt="cookbook"
          />
        </Link>
      </>
    </div>
  );
};

export default Home;
