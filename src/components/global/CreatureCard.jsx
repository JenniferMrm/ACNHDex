import React from "react";

function CreatureCard({ image, name, location, rarity, price, infos, available }) {
  return (
    <div className={`creature-card ${available === true ? "creature-card--available" : ""}`}>
      <div className="creature-card__identity">
        <p className="creature-card__identity__name">{name}</p>
        <img className="creature-card__identity__image" src={image} alt={name} />
      </div>
      <div className="creature-card__content">
        <p className="creature-card__content__location">Location: {location}</p>
        <p className="creature-card__content__rarity">Rarity: {rarity}</p>
        <p className="creature-card__content__price">Price: {price}</p>
        <p className="creature-card__content__catch-phrase">Catch phrase : {infos}</p>
      </div>
    </div>
  );
}

export default CreatureCard;
