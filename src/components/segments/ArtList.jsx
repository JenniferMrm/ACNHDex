import axios from "axios";
import React, { useEffect, useState } from "react";
import MuseumCard from "@/components/global/MuseumCard";
import InputSearch from "@components/global/InputSearch";

function ArtList(props) {
  const [arts, setArts] = useState([]);
  const [searchName, setSearchName] = useState("");

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleName = (e) => {
    setSearchName(e.target.value);
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

  const getFilteredArt = () => {
    const filteredArt = arts.filter((art) => {
      return art.name.toLowerCase().includes(searchName.toLowerCase());
    });

    if (!filteredArt.length) return <span className="no-entry">No art found.</span>;

    return filteredArt.map((art, index) => {
      return <MuseumCard key={index} {...art} />;
    });
  };

  return (
    <div className="art-list list">
      <div className="art-list__filter filter">
        <p className="art-list__filter__title">Filter by :</p>
        <div className="art-list__filter__inputs search-bar">
          <InputSearch searchValue={searchName} handleChange={handleName} />
        </div>
      </div>
      {getFilteredArt()}
    </div>
  );
}

export default ArtList;
