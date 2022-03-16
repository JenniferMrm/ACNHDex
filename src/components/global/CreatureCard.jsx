import React from "react";

function CreatureCard({ image, name, location, rarity, price, infos }) {
  return (
    <div className="creature-card">
      <div className="creature-card__identity">
        <p className="creature-card__identity__name">{name}</p>
        <img className="creature-card__identity__image" src={image} alt={name} />
      </div>
      <div className="creature-card__content">
        <p className="creature-card__content__species">Location: {location}</p>
        <p className="creature-card__content__personnality">Rarity: {rarity}</p>
        <p className="creature-card__content__birthday">Price: {price}</p>
        <p className="creature-card__content__catchPhrase">Catch phrase : {infos}</p>
      </div>
    </div>
  );
}

export default CreatureCard;
