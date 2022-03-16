import axios from "axios";
import React, { useEffect, useState } from "react";
import CreatureCard from "@/components/global/CreatureCard";

function FishesList(props) {
  const [fishes, setFishes] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const getFishes = () => {
      axios
        .get(`${process.env.REACT_APP_ACNH_API_URL}/fish`, [])
        .then((response) => response.data)
        .then((data) => {
          const fishesKeys = Object.keys(data);
          const formattedFishes = fishesKeys.map((key) => {
            return {
              image: data[key].image_uri,
              name: capitalizeFirstLetter(data[key].name["name-EUfr"]),
              location: data[key].availability["location"],
              rarity: data[key].availability["rarity"],
              price: data[key].price,
              infos: data[key]["catch-phrase"],
            };
          });
          setFishes(formattedFishes);
        });
    };
    getFishes();
  }, []);

  return (
    <div className="fishes-list">
      {fishes.map((fish, index) => {
        return <CreatureCard key={index} {...fish} />;
      })}
    </div>
  );
}

export default FishesList;
