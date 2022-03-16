import axios from "axios";
import React, { useEffect, useState } from "react";
import MuseumCard from "@/components/global/MuseumCard";

function ArtList(props) {
  const [arts, setArts] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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
              name: capitalizeFirstLetter(data[key].name["name-EUfr"]),
              price: data[key]["buy-price"],
              infos: data[key]["museum-desc"],
            };
          });
          setArts(formattedArt);
        });
    };
    getArt();
  }, []);

  return (
    <div className="art-list">
      {arts.map((art, index) => {
        return <MuseumCard key={index} {...art} />;
      })}
    </div>
  );
}

export default ArtList;
