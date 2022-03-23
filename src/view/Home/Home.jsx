import React from "react";
import BirthdayCard from "@components/segments/BirthdayCard";
import AvailabilityCard from "@components/segments/AvailabilityCard";

function Home(props) {
  return (
    <div className="home">
      <BirthdayCard />
      <AvailabilityCard />
    </div>
  );
}

export default Home;
