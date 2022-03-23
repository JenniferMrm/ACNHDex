import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { capitalizeFirstLetter } from "@/helpers/functions";
import CreatureCard from "@components/global/CreatureCard";

function AvailabilityCard(props) {
  const [fishes, setFishes] = useState([]);
  const [bugs, setBugs] = useState([]);

  const customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  const thisMonth = parseInt(dayjs().format("M"));
  const thisHour = parseInt(dayjs().format("H"));

  const getFormattedCreatures = (data) => {
    const creaturesKeys = Object.keys(data);
    return creaturesKeys.map((key) => {
      return {
        image: data[key].image_uri,
        name: capitalizeFirstLetter(data[key].name["name-EUfr"]),
        location: data[key].availability["location"],
        rarity: data[key].availability["rarity"],
        price: data[key].price,
        infos: data[key]["catch-phrase"],
        availabilityMonth: data[key].availability["month-array-northern"],
        availabilityHour: data[key].availability["time-array"],
      };
    });
  };

  useEffect(() => {
    const getFishes = () => {
      axios
        .get(`${process.env.REACT_APP_ACNH_API_URL}/fish`, [])
        .then((response) => response.data)
        .then((data) => {
          const formattedFishes = getFormattedCreatures(data);
          setFishes(formattedFishes);
        });
    };
    const getBugs = () => {
      axios
        .get(`${process.env.REACT_APP_ACNH_API_URL}/bugs`, [])
        .then((response) => response.data)
        .then((data) => {
          const formattedBugs = getFormattedCreatures(data);
          setBugs(formattedBugs);
        });
    };
    getFishes();
    getBugs();
  }, []);

  const getFilteredCreatures = (category, creatures) => {
    const filteredCreatures = creatures.filter((creature) => {
      if (creature.availabilityMonth.find((month) => month === thisMonth)) {
        return creature.availabilityHour.find((hour) => hour === thisHour);
      } else {
        return false;
      }
    });

    if (!filteredCreatures.length) return <span>No {category} available right now.</span>;

    return filteredCreatures.map((creature, index) => {
      return <CreatureCard key={index} {...creature} available={true} />;
    });
  };

  return (
    <div className="availability-card">
      <p className="availability-card__title">Fishes and bugs available now :</p>
      <div className="availability-card__fishes">{getFilteredCreatures("fishes", fishes)}</div>
      <div className="availability-card__bugs">{getFilteredCreatures("bugs", bugs)}</div>
    </div>
  );
}

export default AvailabilityCard;
