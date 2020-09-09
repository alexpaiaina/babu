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
      <p>
        Babu is a shortened nickname for Grandma in Russian, Babushka. She is a
        devote Catholic who married a Russian man, my grandfather or Djeta, when
        he was packing excess pounds like a bear before hibernation. She got him on a
        diet and he lost that weight. She cooks family meals almost everyday. Babu
        likes eating out like the rest of us, but eating her food is like eating
        out for me. She doesn't make things with much salt to the chagrin of some
        family members who are addicted to white powder, sugar and salt. That's
        why the food is so good cause it doesn't hide in any masked flavors. You
        genuinely get to taste the food. It also feels good knowing that you're
        eating a healthy meal. What you put in is nourishing the fibers that
        makes you. I hope this project goes well, so I can show her the
        utility of this app and hopefully she will have the nerve to share it.
        At the very least, with family.
      </p>
    </div>
  );
};

export default About;
