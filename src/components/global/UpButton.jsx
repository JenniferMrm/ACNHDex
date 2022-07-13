import React, { useEffect, useState } from "react";
import { IconArrowUp } from "../icons";

function UpButton({ showBelow }) {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0 });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div className="up-button">
      {show && (
        <div className="up-button__container" onClick={handleClick} role="button">
          <IconArrowUp />
        </div>
      )}
    </div>
  );
}

export default UpButton;
