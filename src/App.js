import React from "react";
import "@/css/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "@layout/Main/Main";
import Minimal from "@layout/Minimal/Minimal";
import Home from "@view/Home/Home";
import Villagers from "@view/Villagers/Villagers";
import Fishes from "@view/Fishes/Fishes";
import Bugs from "@view/Bugs/Bugs";
import Fossils from "@view/Fossils/Fossils";
import Art from "@view/Art/Art";
import About from "@view/About/About";
import NotFound from "@view/NotFound/NotFound";

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
        <Route
          path="/villagers"
          element={
            <Main>
              <Villagers />
            </Main>
          }
        />
        <Route
          path="/fishes"
          element={
            <Main>
              <Fishes />
            </Main>
          }
        />
        <Route
          path="/bugs"
          element={
            <Main>
              <Bugs />
            </Main>
          }
        />
        <Route
          path="/fossils"
          element={
            <Main>
              <Fossils />
            </Main>
          }
        />
        <Route
          path="/art"
          element={
            <Main>
              <Art />
            </Main>
          }
        />
        <Route
          path="/about"
          element={
            <Main>
              <About />
            </Main>
          }
        />
        <Route
          path="/*"
          element={
            <Minimal>
              <NotFound />
            </Minimal>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
