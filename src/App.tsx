import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { Countries } from "./pages/Countries";
import Favorite from "./pages/Favorite";
import { Country } from "./pages/Country";
import { Template } from "./pages/Template";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./auth/firebase";
import { ProtectedRoute } from "./auth/ProtectedRoute";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/countries" element={<Countries />}></Route>
          <Route path="/countries/:country" element={<Country />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
