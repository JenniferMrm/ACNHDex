import React, { useEffect, useState } from "react";
import axios from "axios";
import VillagerCard from "@components/global/VillagerCard";
import InputSearch from "@components/global/InputSearch";
import InputSelect from "@components/global/InputSelect";
import InputRadio from "@components/global/InputRadio";

function VillagersList(props) {
  const [villagers, setVillagers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("");
  const [searchPersonality, setSearchPersonality] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [specyOptions, setSpecyOptions] = useState([]);
  const [personalityOptions, setPersonalityOptions] = useState([]);

  const genderOptions = [
    { value: "", label: "All" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const handleName = (e) => {
    setSearchName(e.target.value);
  };

  const handleSpecies = (e) => {
    setSearchSpecies(e.target.value);
  };

  const handlePersonality = (e) => {
    setSearchPersonality(e.target.value);
  };

  const handleGender = (e) => {
    setSelectedGender(e.target.value);
  };

  useEffect(() => {
    const getVillagers = () => {
      axios
        .get(`${process.env.REACT_APP_ACNH_API_URL}/villagers`, [])
        .then((response) => response.data)
        .then((data) => {
          const villagersKeys = Object.keys(data);
          let sortedSpecies = new Set();
          let sortedPersonality = new Set();
          const formattedVillagers = villagersKeys.map((key) => {
            sortedSpecies.add(data[key].species);
            sortedPersonality.add(data[key].personality);
            return {
              image: data[key].image_uri,
              name: data[key].name["name-EUfr"],
              species: data[key].species,
              personality: data[key].personality,
              birthday: data[key]["birthday-string"],
              catchPhrase: data[key]["catch-phrase"],
              gender: data[key].gender,
            };
          });
          sortedSpecies = [...sortedSpecies];
          sortedPersonality = [...sortedPersonality];
          setVillagers(formattedVillagers);
          setSpecyOptions(sortedSpecies);
          setPersonalityOptions(sortedPersonality);
        });
    };
    getVillagers();
  }, []);

  const getFilteredVillagers = () => {
    const filteredVillagers = villagers
      .filter((villager) => {
        return villager.name.toLowerCase().includes(searchName.toLowerCase());
      })
      .filter((villager) => {
        return villager.species.includes(searchSpecies);
      })
      .filter((villager) => {
        return villager.personality.includes(searchPersonality);
      })
      .filter((villager) => {
        return villager.gender.includes(selectedGender);
      });

    if (!filteredVillagers.length) return <span className="no-entry">No villager found.</span>;

    return filteredVillagers.map((villager, index) => {
      return <VillagerCard key={index} {...villager} />;
    });
  };

  return (
    <div className="villagers-list list">
      <div className="villagers-list__filter ">
        <p className="villagers-list__filter__title">Filter by :</p>
        <div className="villagers-list__filter__inputs search-bar">
          <InputSearch searchValue={searchName} handleChange={handleName} />
          <InputSelect searchValue={searchSpecies} handleChange={handleSpecies} options={specyOptions} label="Specy :" />
          <InputSelect searchValue={searchPersonality} handleChange={handlePersonality} options={personalityOptions} label="Personality :" />
          <InputRadio selectedOption={selectedGender} handleChange={handleGender} options={genderOptions} label="Gender :" />
        </div>
      </div>
      {getFilteredVillagers()}
    </div>
  );
}

export default VillagersList;
