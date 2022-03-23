import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";

function Player(props) {
  const [hourlyMusic, setHourlyMusic] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  const thisHour = parseInt(dayjs().format("H"));

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

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
        <div className="player__figure__audio-player">
          <audio src={hourlyMusic.uri} preload="metadata" />
          <button className="player__figure__audio-player__play-pause" onClick={togglePlayPause}>
            {isPlaying ? <i className="fi fi-br-pause"></i> : <i className="fi fi-br-play"></i>}
          </button>
          <div className="player__figure__audio-player__current-time">0:00</div>
          <div className="player__figure__audio-player__progress-bar">
            <input className="player__figure__audio-player__progress-bar__input" type="range" />
          </div>
          <div className="player__figure__audio-player__duration">2:49</div>
        </div>
      </figure>
    </div>
  );
}

export default Player;
