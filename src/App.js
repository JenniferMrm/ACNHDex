import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "@layout/Main/Main";
import Home from "@view/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Home />
            </Main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
