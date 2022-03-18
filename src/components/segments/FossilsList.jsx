import axios from "axios";
import React, { useEffect, useState } from "react";
import MuseumCard from "@/components/global/MuseumCard";

function FossilsList(props) {
  const [fossils, setFossils] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const getFossils = () => {
      axios
        .get(`${process.env.REACT_APP_ACNH_API_URL}/fossils`, [])
        .then((response) => response.data)
        .then((data) => {
          const fossilsKeys = Object.keys(data);
          const formattedFossils = fossilsKeys.map((key) => {
            return {
              image: data[key].image_uri,
              name: capitalizeFirstLetter(data[key].name["name-EUfr"]),
              price: data[key].price,
              infos: data[key]["museum-phrase"],
            };
          });
          setFossils(formattedFossils);
        });
    };
    getFossils();
  }, []);

  return (
    <div className="fossils-list list">
      {fossils.map((fossil, index) => {
        return <MuseumCard key={index} {...fossil} />;
      })}
    </div>
  );
}

export default FossilsList;
