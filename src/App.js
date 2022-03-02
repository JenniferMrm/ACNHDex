import React from "react";
import "@/css/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Modal from "@components/global/Modal";
import Navbar from "./components/global/Navbar";
// import Main from "@layout/Main/Main";
// import Home from "@view/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route
          path="/"
          element={
            <Main>
              <Home />
            </Main>
          }
        /> */}
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
