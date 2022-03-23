import React, { useState, useRef } from "react";
import { calculateTime } from "@/helpers/functions";

function Player({ uri }) {
  // states
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // refs
  const audioPlayer = useRef(); // reference to the audio element
  const progressBar = useRef(); // reference to the progress bar element
  const animationRef = useRef(); // reference to the animation element

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty("$seek-before-width", `${(progressBar.current.value / duration) * 100}%`);
    setCurrentTime(progressBar.current.value);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  return (
    <div className="audio-player">
      <audio ref={audioPlayer} src={uri} preload="metadata" onLoadedMetadata={onLoadedMetadata} />
      <button className="audio-player__play-pause" onClick={togglePlayPause}>
        {isPlaying ? <i className="fi fi-br-pause"></i> : <i className="fi fi-br-play"></i>}
      </button>
      <div className="audio-player__current-time">{calculateTime(currentTime)}</div>
      <div className="audio-player__progress-bar">
        <input className="audio-player__progress-bar__input" type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />
      </div>
      <div className="audio-player__duration">{duration && !isNaN(duration) && calculateTime(duration)}</div>
    </div>
  );
}

export default Player;
