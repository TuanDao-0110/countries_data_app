import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { Countries } from "./features/country/Countries";
import Favorite from "./features/country/Favorite";
import { Country } from "./features/country/Country";
import { Template } from "./features/country/Template";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/countries" element={<Countries />}></Route>
        <Route path="/countries/:country" element={<Country />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
