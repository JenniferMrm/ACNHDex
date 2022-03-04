import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div className="not-found">
      <h2 className="not-found__code">404 Not Found</h2>
      <h3 className="not-found__oops">Oops,</h3>
      <h5 className="not-found__lost">you got lost !</h5>
      <img className="not-found__image" src="http://localhost:3000/assets/rescuecopter.webp" alt="Animal Crossing Rescue Helicopter" />
      <Link to="/" className="not-found__link" role="button">
        <p className="not-found__link__title">Back to Home</p>
      </Link>
    </div>
  );
}

export default NotFound;
