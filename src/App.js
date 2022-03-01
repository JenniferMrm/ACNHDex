import React from "react";
import "@/css/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "@components/global/Modal";
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
        <Route path="/" element={<Modal />} />
      </Routes>
    </Router>
  );
}

export default App;
