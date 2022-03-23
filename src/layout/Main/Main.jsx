import React from "react";
import Navbar from "@components/segments/Navbar";
import UpButton from "@components/global/UpButton";
import Footer from "@components/segments/Footer";

function Main(props) {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
      <UpButton showBelow={250} />
      <Footer />
    </div>
  );
}

export default Main;
