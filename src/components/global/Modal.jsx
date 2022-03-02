import React from "react";
import { Link } from "react-router-dom";

function Modal({ onClose, open }) {
  const modalClassName = open ? "modal modal--open" : "modal modal--closed";

  return (
    <div className={modalClassName}>
      <div className="modal__content">
        <div className="modal__content__icon-arrow" onClick={onClose}>
          <i class="fi fi-br-cross"></i>
        </div>
        <div className="modal__content__icon">
          <i className="fi fi-br-fox"></i>
          <Link to={"/villagers"} className="modal__content__icon__link">
            <p className="modal__content__icon__link__title">Villagers</p>
          </Link>
        </div>
        <div className="modal__content__icon">
          <i className="fi fi-br-fish"></i>
          <Link to={"/fishes"} className="modal__content__icon__link">
            <p className="modal__content__icon__link__title">Fishes</p>
          </Link>
        </div>
        <div className="modal__content__icon">
          <i className="fi fi-br-butterfly"></i>
          <Link to={"/bugs"} className="modal__content__icon__link">
            <p className="modal__content__icon__link__title">Bugs</p>
          </Link>
        </div>
        <div className="modal__content__icon">
          <i className="fi fi-br-paw"></i>
          <Link to={"/fossils"} className="modal__content__icon__link">
            <p className="modal__content__icon__link__title">Fossils</p>
          </Link>
        </div>
        <div className="modal__content__icon">
          <i className="fi fi-br-paint-brush"></i>
          <Link to={"/art"} className="modal__content__icon__link">
            <p className="modal__content__icon__link__title">Art</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
