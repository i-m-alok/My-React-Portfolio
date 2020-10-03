import React from "react";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <h1>Hello CodeSandbox</h1>
        <Homepage />
      </div>
    </div>
  );
}
