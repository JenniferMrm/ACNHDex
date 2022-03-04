import axios from "axios";
import React, { useEffect, useState } from "react";

function BugsList(props) {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const getBugs = () => {
      axios
        .get(`${process.env.REACT_APP_ACNH_API_URL}/bugs`, [])
        .then((response) => response.data)
        .then((data) => {
          const bugsKeys = Object.keys(data);
          const formattedBugs = bugsKeys.map((key) => {
            return {
              image: data[key].image_uri,
              name: data[key].name["name-EUfr"],
              location: data[key].availability["location"],
              rarity: data[key].availability["rarity"],
              price: data[key].price,
              catchPhrase: data[key]["catchPhrase"],
            };
          });
          setBugs(formattedBugs);
        });
    };
    getBugs();
  }, []);

  return (
    <div className="bugs-list">
      <h2>Bugs</h2>
    </div>
  );
}

export default BugsList;
