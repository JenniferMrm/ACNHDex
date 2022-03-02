import React, { useState } from "react";
import Modal from "@components/global/Modal";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__menu" onClick={openModal}>
          <i className="fi fi-br-menu-burger"></i>
        </div>
        <div className="navbar__container__logo">
          <Link to={"/"}>
            <div className="navbar__container__logo__container">
              <img className="navbar__container__logo__container__img" src="./assets/logo/index.png" alt="animal-crossing-logo-nintendo" />
            </div>
          </Link>
          <h1 className="navbar__container__logo__title">ACNHDex</h1>
        </div>
        <div className="navbar__container__links">
          <div className="navbar__container__links__item">
            <i className="fi fi-br-fox"></i>
            <Link to={"/villagers"} className="navbar__container__links__item__link">
              <p className="navbar__container__links__item__link__title">Villagers</p>
            </Link>
          </div>
          <div className="navbar__container__links__item">
            <i className="fi fi-br-fish"></i>
            <Link to={"/fishes"} className="navbar__container__links__item__link">
              <p className="navbar__container__links__item__link__title">Fishes</p>
            </Link>
          </div>
          <div className="navbar__container__links__item">
            <i className="fi fi-br-butterfly"></i>
            <Link to={"/bugs"} className="navbar__container__links__item__link">
              <p className="navbar__container__links__item__link__title">Bugs</p>
            </Link>
          </div>
          <div className="navbar__container__links__item">
            <i className="fi fi-br-paw"></i>
            <Link to={"/fossils"} className="navbar__container__links__item__link">
              <p className="navbar__container__links__item__link__title">Fossils</p>
            </Link>
          </div>
          <div className="navbar__container__links__item">
            <i className="fi fi-br-paint-brush"></i>
            <Link to={"/art"} className="navbar__container__links__item__link">
              <p className="navbar__container__links__item__link__title">Art</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar__menu-modal">
        <Modal onClose={closeModal} open={open} />
      </div>
    </div>
  );
}

export default Navbar;
