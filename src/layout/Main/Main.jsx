import React from "react";
import Navbar from "@components/segments/Navbar";
import Footer from "@components/segments/Footer";

function Main(props) {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Main;
