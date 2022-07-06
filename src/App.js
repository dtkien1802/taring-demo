import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import "./index.css";

class App extends Component {
  render() {
    const mainstyle = {
      display: "flex",
    };
    return (
      <div style={mainstyle} className="App">
        <NavBar />
        <Outlet />
      </div>
    );
  }
}

export default App;
