import React from "react";

function MuseumCard({ image, name, price, infos }) {
  return (
    <div className="museum-card">
      <div className="museum-card__identity">
        <p className="museum-card__identity__name">{name}</p>
        <img className="museum-card__identity__image" src={image} alt={name} />
      </div>

      <div className="museum-card__content">
        <p className="museum-card__content__price">Price: {price}</p>
        <p className="museum-card__content__informations">{infos}</p>
      </div>
    </div>
  );
}

export default MuseumCard;
