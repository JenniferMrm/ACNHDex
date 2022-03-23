import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";

function Player(props) {
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
              .filter((bgmItem) => {
                return bgmItem.weather === "Sunny";
              })
              .find((bgmItem) => {
                return bgmItem.hour === thisHour;
              })
          );
        });
    };
    getHourlyMusic();
  }, [thisHour]);

  return (
    <div className="player">
      <figure className="player__figure">
        <figcaption className="player__figure__caption">Listen to the Animal Crossing hourly OST. Now playing : {thisHour}h</figcaption>
        <audio controls autoPlay={false} src={hourlyMusic.uri} />
      </figure>
    </div>
  );
}

export default Player;
