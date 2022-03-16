import React from "react";

function VillagerCard({ image, name, species, personality, birthday, catchPhrase }) {
  const alt = `${name}, an Animal Crossing villager.`;

  return (
    <div className="villager-card">
      <img className="villager-card__image" src={image} alt={alt} />
      <p className="villager-card__name">{name}</p>
      <div className="villager-card__content">
        <p className="villager-card__content__species">Specy: {species}</p>
        <p className="villager-card__content__personnality">Personnality: {personality}</p>
        <p className="villager-card__content__birthday">Birthday: {birthday}</p>
        <p className="villager-card__content__catchPhrase">Catch phrase: {catchPhrase}</p>
      </div>
    </div>
  );
}

export default VillagerCard;
