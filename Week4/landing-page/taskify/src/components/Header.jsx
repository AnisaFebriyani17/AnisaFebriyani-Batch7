import React from "react";
import Navbar from "./Navbar"; 
import "../assets/css/Header.css";

export default function Header() {
  return (
    <header className="header-container">
      <h1 className="app-title">Taskify</h1>
      <Navbar />
    </header>
  );
}
