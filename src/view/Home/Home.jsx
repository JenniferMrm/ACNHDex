import React from "react";
import BirthdayCard from "@components/segments/BirthdayCard";
import AvailabilityCard from "@components/segments/AvailabilityCard";
import Player from "@components/segments/Player";

function Home(props) {
  return (
    <div className="home">
      <Player />
      <div className="home__content">
        <BirthdayCard />
        <AvailabilityCard />
      </div>
    </div>
  );
}

export default Home;
