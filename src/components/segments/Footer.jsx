import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <p>Jennifer Miramon - 2022 - ACNHDex</p>
      <p>
        <Link to="/about" className="link">
          About
        </Link>
      </p>
    </div>
  );
}

export default Footer;
