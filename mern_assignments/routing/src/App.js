import "./App.css";
import React from "react";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Display1 from "./components/Display1";
import DisplayWordColor from "./components/DisplayWordColor";
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Display1 path="/:intOrWord" />
        <DisplayWordColor path=":word/:fontColor/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
