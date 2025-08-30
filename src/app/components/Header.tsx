import React from "react";

export default function Header(){
  return (
    <header className="header container">
      <div className="site-title">MonHarvest Magazine</div>
      <nav className="nav" aria-label="Main navigation">
        <a href="#">Home</a>
        <a href="#">Culture</a>
        <a href="#">Travel</a>
        <a href="#">Design</a>
        <a href="#">About</a>
      </nav>
    </header>
  )
}