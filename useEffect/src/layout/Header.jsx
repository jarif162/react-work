import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <>
      {/* <a href="/home ">Home</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="">Contact</a> */}

      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/blog"}>Blog</NavLink>
    </>
  );
}

export default Header;
