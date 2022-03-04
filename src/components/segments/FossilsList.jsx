import axios from "axios";
import React, { useEffect, useState } from "react";

function FossilsList(props) {
  const [fossils, setFossils] = useState([]);

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
              name: data[key].name["name-EUfr"],
              price: data[key].price,
              information: data[key]["museum-phrase"],
            };
          });
          setFossils(formattedFossils);
        });
    };
    getFossils();
  }, []);

  return (
    <div className="fossils-list">
      <h2>Fossils</h2>
    </div>
  );
}

export default FossilsList;
