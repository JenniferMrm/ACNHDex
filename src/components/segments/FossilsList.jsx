import axios from "axios";
import React, { useEffect, useState } from "react";
import MuseumCard from "@/components/global/MuseumCard";
import InputSearch from "@components/global/InputSearch";
import { capitalizeFirstLetter } from "@/helpers/functions";

function FossilsList(props) {
  const [fossils, setFossils] = useState([]);
  const [searchName, setSearchName] = useState("");

  const handleName = (e) => {
    setSearchName(e.target.value);
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
              name: capitalizeFirstLetter(data[key].name["name-EUen"]),
              price: data[key].price,
              infos: data[key]["museum-phrase"],
            };
          });
          setFossils(formattedFossils);
        });
    };
    getFossils();
  }, []);

  const getFilteredFossils = () => {
    const filteredFossils = fossils.filter((fossil) => {
      return fossil.name.toLowerCase().includes(searchName.toLowerCase());
    });

    if (!filteredFossils.length) return <span className="no-entry">No fossil found.</span>;

    return filteredFossils.map((fossil, index) => {
      return <MuseumCard key={index} {...fossil} />;
    });
  };

  return (
    <div className="fossils-list list">
      <div className="fossils-list__filter filter">
        <p className="fossils-list__filter__title">Filter by :</p>
        <div className="fossils-list__filter__inputs search-bar">
          <InputSearch searchValue={searchName} handleChange={handleName} />
        </div>
      </div>
      {getFilteredFossils()}
    </div>
  );
}

export default FossilsList;
