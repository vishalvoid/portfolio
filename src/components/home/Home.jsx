import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="container__upper">
          <h3 className="container__upper--name">I'm Maga Vigna C</h3>
          <h1 className="container__upper--heading">
            Self-Taught front End Developer.
          </h1>
        </div>
        <div className="container__lower">
          <h1 className="container__lower--heading">
            School-Taught Computer Engineer
          </h1>
          <p className="container__lower--scroll"> Scroll &darr;</p>
        </div>
      </div>
    </>
  );
}

export default Home;
