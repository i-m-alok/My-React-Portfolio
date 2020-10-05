import React from "react";
import Navbar from "./Components/Navbar";
import Avtar from "./Components/Avtar";
import Introtyper from "./Components/Introtyper";
import SkillIcons from "./Components/SkillIcons";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Avtar />
        <div className="intro">
          <Introtyper />
        </div>
        <div className="skills">
          <SkillIcons />
        </div>
      </div>
    </div>
  );
}
