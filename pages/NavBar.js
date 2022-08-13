import React from 'react';
import {  Link } from "react-router-dom";

const NavBar= () =>{
  return (
  <div>
    <li className="nav-item active">
      <Link className="nav-link" to={"/bio"}>Bio</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to={"/publications"}>Publications</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/personal-projects"}>Personal Projects</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/music"}>Music</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/misc"}>Miscellaneous</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/contact"}>Contact</Link>
    </li>
  </div>
  );
}
export default NavBar;

/*
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<a className="navbar-brand">Sadie Allen's Personal Website</a>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ml-auto">
  <li className="nav-item active">
      <Link className="nav-link" to={"/bio"}>Bio</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to={"/publications"}>Publications</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/personal-projects"}>Personal Projects</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/music"}>Music</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/misc"}>Miscellaneous</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/contact"}>Contact</Link>
    </li>
  </ul>
</div>
</nav>*/