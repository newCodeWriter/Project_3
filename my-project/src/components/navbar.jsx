import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  var activeStyle = {
    backgroundColor: "rgb(10, 93, 161)"
  };

  var navStyle = {
    textDecoration: "none",
    color: "white",
    display: "inline-block",
    padding: "1.1em"
  };
  
  return (
    <div id="nav">
        <NavLink style={navStyle} activeStyle={activeStyle} to="/about">About</NavLink>
        <NavLink style={navStyle} activeStyle={activeStyle} to="/tasks">Tasks</NavLink>
        <NavLink style={navStyle} activeStyle={activeStyle} to="/contact">Contact</NavLink>
    </div>
  );
};

export default NavBar;