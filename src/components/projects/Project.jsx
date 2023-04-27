import React from "react";
import "./Project.css";
import calculatorImg from "../assets/project_calc.png";
import socialMeidaImg from "../assets/project_sm.png";
import JaiPrabhaFoundationImg from "../assets/project_jp.png";

function Project() {
  return (
    <section className="project" id="projects">
      <div className="project__heading">
        <h1>Projects.</h1>
      </div>
      <div className="project__container">
        <div className="project__container--card">
          <img src={socialMeidaImg} alt="" />
        </div>
        <div className="project__container--card">
          <img src={calculatorImg} alt="" />
        </div>
        <div className="project__container--card">
          <img src={JaiPrabhaFoundationImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Project;
