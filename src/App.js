import React from "react";
import Navbar from "./Components/Navbar";
import Avtar from "./Components/Avtar";
import Introtyper from "./Components/Introtyper";
import SkillIcons from "./Components/SkillIcons";
import Playlist from "./Components/Playlist";
import Contact from "./Components/Contact";
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
        <section className="about border-top border-secondary" id="about">
          <h2 className="p-3 my-4">About</h2>
          <p>
            <b>Rule:</b> Learn, share, learn more.
            <br />
          </p>
          <p>
            A person who believe in whatever I get is due to my society so, it's
            my responsibility to give them back in my way. I'm a team player and
            like to share my learning.
            <br />
            Please feel free to reach out and connect at any time. I am always
            looking to learn from and collaborate with new people. Thank you for
            visiting my portfolio!
          </p>
          <p>
            <b>Hobbies:</b> Quote Writing 🤔, Reading 📖, Cycling 🚴.
          </p>
          <p>
            <b>Enthusiastic towards:</b> Development
          </p>
        </section>
        {/* <div className="portfolio" id="portfolio">
          hgvadfhsdfghgiufdgiofdghgfdhfdoih
        </div> */}
        <div className="playlist border-top border-secondary m-3" id="playlist">
          <h2 className="p-3 m-3">Playlist</h2>
          <Playlist />
        </div>
        <div className="contact border-top border-secondary mt-3" id="contact">
          <h2 className="p-3 m-3">Contact</h2>
          <div className="m-3">
            <Contact />
          </div>
          <p className="m-3">© Built with care by Alok Mishra</p>
        </div>
      </div>
    </div>
  );
}
