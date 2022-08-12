import React from "react";
import { Routes, BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import About from "./About";

function Start() {
  return (
    <div>
      <h1>Start !</h1>
      <NavLink to="/about">about</NavLink>
    </div>
  );
}

export default Start;
