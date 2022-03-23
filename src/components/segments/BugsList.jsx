import axios from "axios";
import React, { useEffect, useState } from "react";
import CreatureCard from "@/components/global/CreatureCard";
import InputSearch from "@components/global/InputSearch";
import InputSelect from "@components/global/InputSelect";
import { capitalizeFirstLetter } from "@/helpers/functions";

function BugsList(props) {
  const [bugs, setBugs] = useState([]);
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
    const getBugs = () => {
      axios
        .get(`${process.env.REACT_APP_ACNH_API_URL}/bugs`, [])
        .then((response) => response.data)
        .then((data) => {
          const bugsKeys = Object.keys(data);
          let sortedLocation = new Set();
          let sortedRarity = new Set();
          const formattedBugs = bugsKeys.map((key) => {
            sortedLocation.add(data[key].availability["location"]);
            sortedRarity.add(data[key].availability["rarity"]);
            return {
              image: data[key].image_uri,
              name: capitalizeFirstLetter(data[key].name["name-EUen"]),
              location: data[key].availability["location"],
              rarity: data[key].availability["rarity"],
              price: data[key].price,
              infos: data[key]["catch-phrase"],
            };
          });
          sortedLocation = [...sortedLocation].sort();
          sortedRarity = [...sortedRarity].sort();
          setBugs(formattedBugs);
          setLocationOptions(sortedLocation);
          setRarityOptions(sortedRarity);
        });
    };
    getBugs();
  }, []);

  const getFilteredBugs = () => {
    const filteredBugs = bugs
      .filter((bug) => {
        return bug.name.toLowerCase().includes(searchName.toLowerCase());
      })
      .filter((bug) => {
        return bug.location.includes(searchLocation);
      })
      .filter((bug) => {
        return bug.rarity.includes(searchRarity);
      });

    if (!filteredBugs.length) return <span className="no-entry">No bug found.</span>;

    return filteredBugs.map((bug, index) => {
      return <CreatureCard key={index} {...bug} />;
    });
  };

  return (
    <div className="bugs-list list">
      <div className="bugs-list__filter filter">
        <p className="bugs-list__filter__title">Filter by :</p>
        <div className="bugs-list__filter__inputs search-bar">
          <InputSearch searchValue={searchName} handleChange={handleName} />
          <InputSelect searchValue={searchLocation} handleChange={handleLocation} options={locationOptions} label="Location :" />
          <InputSelect searchValue={searchRarity} handleChange={handleRarity} options={rarityOptions} label="Rarity :" />
        </div>
      </div>
      {getFilteredBugs()}
    </div>
  );
}

export default BugsList;
