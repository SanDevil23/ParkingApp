import React from "react";
import Landing from "../pages/Landin";
import Login from "../pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Routercomp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
