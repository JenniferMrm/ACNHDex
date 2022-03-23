import React from "react";
import Footer from "@components/segments/Footer";

function Minimal(props) {
  const { children } = props;
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default Minimal;
