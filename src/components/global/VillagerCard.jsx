import React from "react";

function VillagerCard({ image, name, species, personality, birthday, catchPhrase }) {
  const alt = `${name}, an Animal Crossing villager.`;

  return (
    <div className="card">
      <img className="card__image" src={image} alt={alt} />
      <p className="card__name">{name}</p>
      <div className="card__content">
        <p className="card__content__species">Specy: {species}</p>
        <p className="card__content__personnality">Personnality: {personality}</p>
        <p className="card__content__birthday">Birthday: {birthday}</p>
        <p className="card__content__catchPhrase">Catch phrase: {catchPhrase}</p>
      </div>
    </div>
  );
}

export default VillagerCard;
