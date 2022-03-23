import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import VillagerCard from "@components/global/VillagerCard";

function BirthdayCard(props) {
  const [villagers, setVillagers] = useState([]);

  const customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);

  const today = dayjs().format("MMMM DD");

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
              name: data[key].name["name-EUen"],
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

  const getBirthdayBoy = () => {
    const filteredVillagers = villagers.filter((villager) => {
      return villager.birthday.includes(today);
    });

    if (!filteredVillagers.length) return <span>No birthday today !</span>;

    return filteredVillagers.map((villager, index) => {
      return <VillagerCard key={index} {...villager} />;
    });
  };

  return (
    <div className="birthday-card">
      <div className="birthday-card__informations">
        <p className="birthday-card__informations__title">Today's birthday !</p>
        <p className="birthday-card__informations__date">{today}</p>
      </div>
      <div className="birthday-card__villager">{getBirthdayBoy()}</div>
    </div>
  );
}

export default BirthdayCard;
