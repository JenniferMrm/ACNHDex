import axios from "axios";

import React, { useEffect, useState } from "react";

function ArtList(props) {
  const [art, setArt] = useState([]);

  useEffect(() => {
    const getArt = () => {
      axios
        .get(`${process.env.REACT_APP_ACNH_API_URL}/art`, [])
        .then((response) => response.data)
        .then((data) => {
          const artKeys = Object.keys(data);
          const formattedArt = artKeys.map((key) => {
            return {
              image: data[key].image_uri,
              name: data[key].name["name-EUfr"],
              price: data[key]["buy-price"],
              information: data[key]["museum-desc"],
            };
          });
          setArt(formattedArt);
        });
    };
    getArt();
  });

  return (
    <div className="art-list">
      <h2>Art</h2>>
    </div>
  );
}

export default ArtList;
