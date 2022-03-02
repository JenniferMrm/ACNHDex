import React, { useState } from "react";
import Modal from "@components/global/Modal";

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
          <div className="navbar__container__logo__container">
            <img className="navbar__container__logo__container__img" src="./assets/logo/index.png" alt="animal-crossing-logo-nintendo" />
          </div>
          <h1 className="navbar__container__logo__title">ACNHDex</h1>
        </div>
      </div>
      <div className="navbar__menu-modal">
        <Modal onClose={closeModal} open={open} />
      </div>
    </div>
  );
}

export default Navbar;
