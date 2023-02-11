import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { Country } from "./features/country/Country";
import Favorite from "./features/country/Favorite";
import { PopUp } from "./features/country/PopUp";
import { Template } from "./features/country/Template";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/countries" element={<Country />}></Route>
        <Route path="/countries/:country" element={<PopUp />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
