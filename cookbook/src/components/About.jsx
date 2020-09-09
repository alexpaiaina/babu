import React from "react";
// import axios from 'axios';

const About = () => {
  // useEffect(() => {
  //   fetchItem();
  //   console.log(match)
  // }, []);

  // const [item, setItem] = useState({});

  // const fetchItem = async () => {
  //   const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/cookbook/${about.id}`
  //   const response = await axios.get(airtableURL, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //       },
  //     });
  //     fetchItem(response.data.records);
  //   };
  return (
    <div className="cherry">
      <p className="story">About</p>
    </div>
  );
};

export default About;
