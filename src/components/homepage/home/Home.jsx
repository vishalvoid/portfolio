import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-header">
        <div className="container-home">
          <div className="container__upper">
            <h3 className="container__upper--name">I'm Vishal Kumar Singh</h3>
            <h1 className="container__upper--heading">
              Self-Taught Full Stack Web Developer.
            </h1>
          </div>
          <div className="container__lower">
            <h1 className="container__lower--heading">
              School-Taught Computer Engineer
            </h1>
            <h3 className="container__lower--subheading">
              Skills : Java, Javascript, React Js, Node Js, MongoDB with
              Mongoose, Express Js, Git/Github
            </h3>

            {<p className="container__lower--scroll"> Scroll &darr;</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
