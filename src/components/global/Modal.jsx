import React from "react";
import { Link } from "react-router-dom";
import { IconArt, IconBug, IconClose, IconCreature, IconFish, IconFossil, IconHome } from "../icons";

function Modal({ onClose, open }) {
  const modalClassName = open ? "modal modal--open" : "modal modal--closed";

  return (
    <div className={modalClassName}>
      <div className="modal__content">
        <div className="modal__content__icon-cross" onClick={onClose}>
          <IconClose />
        </div>
        <div className="modal__content__icon">
          <IconHome />
          <Link to={"/"} className="modal__content__icon__link" onClick={onClose}>
            <p className="modal__content__icon__link__title">Home</p>
          </Link>
        </div>
        <div className="modal__content__icon">
          <IconCreature />
          <Link to={"/villagers"} className="modal__content__icon__link" onClick={onClose}>
            <p className="modal__content__icon__link__title">Villagers</p>
          </Link>
        </div>
        <div className="modal__content__icon">
          <IconFish />
          <Link to={"/fishes"} className="modal__content__icon__link" onClick={onClose}>
            <p className="modal__content__icon__link__title">Fishes</p>
          </Link>
        </div>
        <div className="modal__content__icon">
          <IconBug />
          <Link to={"/bugs"} className="modal__content__icon__link" onClick={onClose}>
            <p className="modal__content__icon__link__title">Bugs</p>
          </Link>
        </div>
        <div className="modal__content__icon">
          <IconFossil />
          <Link to={"/fossils"} className="modal__content__icon__link" onClick={onClose}>
            <p className="modal__content__icon__link__title">Fossils</p>
          </Link>
        </div>
        <div className="modal__content__icon">
          <IconArt />
          <Link to={"/art"} className="modal__content__icon__link" onClick={onClose}>
            <p className="modal__content__icon__link__title">Art</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
