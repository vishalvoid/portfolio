import React from "react";
import Home from "./home/Home";

import NavBar from "./navigation/NavBar";
import Notice from "../Notice";

export default function homepage() {
  return (
    <>
      <NavBar />
      <Notice />
      <Home />
    </>
  );
}
