import axios from "axios";
import React, { useEffect, useState } from "react";

function FishesList(props) {
  const [fishes, setFishes] = useState([]);

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
              name: data[key].name["name-EUfr"],
              location: data[key].availability["location"],
              rarity: data[key].availability["rarity"],
              price: data[key].price,
              catchPhrase: data[key]["catchPhrase"],
            };
          });
          setFishes(formattedFishes);
        });
    };
    getFishes();
  }, []);

  return (
    <div className="fishes-list">
      <h2>Fishes</h2>
    </div>
  );
}

export default FishesList;
