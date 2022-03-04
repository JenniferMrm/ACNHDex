import React, { useEffect, useState } from "react";
import axios from "axios";
import VillagerCard from "@components/global/VillagerCard";

function VillagersList(props) {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    const getVillagers = () => {
      axios
        .get(`${process.env.REACT_APP_ACNH_API_URL}/villagers`, [])
        .then((response) => response.data)
        .then((data) => {
          const villagersKeys = Object.keys(data);
          const formattedVillagers = villagersKeys.map((key) => {
            return {
              image: data[key].image_uri,
              name: data[key].name["name-EUfr"],
              species: data[key].species,
              personality: data[key].personality,
              birthday: data[key]["birthday-string"],
              catchPhrase: data[key]["catch-phrase"],
            };
          });
          setVillagers(formattedVillagers);
        });
    };
    getVillagers();
  }, []);

  return (
    <div className="villagers-list">
      {villagers.map((villager, index) => {
        return <VillagerCard key={index} {...villager} />;
      })}
    </div>
  );
}

export default VillagersList;
