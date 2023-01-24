import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Home />
      </header>
      <About />
    </>
  );
}

export default App;
