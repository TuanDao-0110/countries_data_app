import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { Countries } from "./pages/Countries";
import Favorite from "./pages/Favorite";
import { Country } from "./pages/Country";
import { Template } from "./pages/Template";

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
