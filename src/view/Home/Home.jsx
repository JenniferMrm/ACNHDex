import React from "react";
import BirthdayCard from "@components/segments/BirthdayCard";
import AvailabilityCard from "@components/segments/AvailabilityCard";
import HourlyPlayer from "@components/segments/HourlyPlayer";

function Home(props) {
  return (
    <div className="home">
      <HourlyPlayer />
      <div className="home__content">
        <BirthdayCard />
        <AvailabilityCard />
      </div>
    </div>
  );
}

export default Home;
