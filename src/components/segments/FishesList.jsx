import axios from "axios";
import React, { useEffect, useState } from "react";
import CreatureCard from "@/components/global/CreatureCard";
import InputSearch from "@components/global/InputSearch";
import InputSelect from "@components/global/InputSelect";
import { capitalizeFirstLetter } from "@/helpers/functions";

function FishesList(props) {
  const [fishes, setFishes] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchRarity, setSearchRarity] = useState("");
  const [locationOptions, setLocationOptions] = useState([]);
  const [rarityOptions, setRarityOptions] = useState([]);

  const handleName = (e) => {
    setSearchName(e.target.value);
  };

  const handleLocation = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleRarity = (e) => {
    setSearchRarity(e.target.value);
  };

  useEffect(() => {
    const getFishes = () => {
      axios
        .get(`${process.env.REACT_APP_ACNH_API_URL}/fish`, [])
        .then((response) => response.data)
        .then((data) => {
          const fishesKeys = Object.keys(data);
          let sortedLocation = new Set();
          let sortedRarity = new Set();
          const formattedFishes = fishesKeys.map((key) => {
            sortedLocation.add(data[key].availability["location"]);
            sortedRarity.add(data[key].availability["rarity"]);
            return {
              image: data[key].image_uri,
              name: capitalizeFirstLetter(data[key].name["name-EUfr"]),
              location: data[key].availability["location"],
              rarity: data[key].availability["rarity"],
              price: data[key].price,
              infos: data[key]["catch-phrase"],
            };
          });
          sortedLocation = [...sortedLocation].sort();
          sortedRarity = [...sortedRarity].sort();
          setFishes(formattedFishes);
          setLocationOptions(sortedLocation);
          setRarityOptions(sortedRarity);
        });
    };
    getFishes();
  }, []);

  const getFilteredFishes = () => {
    const filteredFishes = fishes
      .filter((fish) => {
        return fish.name.toLowerCase().includes(searchName.toLowerCase());
      })
      .filter((fish) => {
        return fish.location.includes(searchLocation);
      })
      .filter((fish) => {
        return fish.rarity.includes(searchRarity);
      });

    if (!filteredFishes.length) return <span className="no-entry">No fish found.</span>;

    return filteredFishes.map((fish, index) => {
      return <CreatureCard key={index} {...fish} />;
    });
  };

  return (
    <div className="fishes-list list">
      <div className="fishes-list__filter filter">
        <p className="fishes-list__filter__title">Filter by :</p>
        <div className="fishes-list__filter__inputs search-bar">
          <InputSearch searchValue={searchName} handleChange={handleName} />
          <InputSelect searchValue={searchLocation} handleChange={handleLocation} options={locationOptions} label="Location :" />
          <InputSelect searchValue={searchRarity} handleChange={handleRarity} options={rarityOptions} label="Rarity :" />
        </div>
      </div>
      {getFilteredFishes()}
    </div>
  );
}

export default FishesList;
