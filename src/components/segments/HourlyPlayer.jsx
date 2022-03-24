import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import Player from "@components/global/Player";

function HourlyPlayer(props) {
  const [hourlyMusic, setHourlyMusic] = useState([]);

  const customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  const thisHour = parseInt(dayjs().format("H"));

  useEffect(() => {
    const getHourlyMusic = () => {
      axios
        .get(`${process.env.REACT_APP_ACNH_API_URL}/backgroundmusic`, [])
        .then((response) => response.data)
        .then((data) => {
          const hourlyMusicKeys = Object.keys(data);
          const formattedHourlyMusic = hourlyMusicKeys.map((key) => {
            return {
              id: data[key].id,
              hour: data[key].hour,
              weather: data[key].weather,
              uri: data[key].music_uri,
            };
          });
          setHourlyMusic(
            formattedHourlyMusic
              .filter((music) => {
                return music.weather === "Sunny";
              })
              .find((music) => {
                return music.hour === thisHour;
              })
          );
        });
    };

    getHourlyMusic();
  }, [thisHour]);

  return (
    <div className="hourly-player">
      <figure className="hourly-player__figure">
        <figcaption className="hourly-player__figure__caption">Listen to the Animal Crossing hourly OST. Now playing : {thisHour}h</figcaption>
        <Player {...hourlyMusic} />
      </figure>
    </div>
  );
}

export default HourlyPlayer;
