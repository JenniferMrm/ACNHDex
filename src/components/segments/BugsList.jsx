import axios from "axios";
import React, { useEffect, useState } from "react";
import CreatureCard from "@/components/global/CreatureCard";

function BugsList(props) {
  const [bugs, setBugs] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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
              name: capitalizeFirstLetter(data[key].name["name-EUfr"]),
              location: data[key].availability["location"],
              rarity: data[key].availability["rarity"],
              price: data[key].price,
              infos: data[key]["catch-phrase"],
            };
          });
          setBugs(formattedBugs);
        });
    };
    getBugs();
  }, []);

  return (
    <div className="bugs-list">
      {bugs.map((bug, index) => {
        return <CreatureCard key={index} {...bug} />;
      })}
    </div>
  );
}

export default BugsList;
