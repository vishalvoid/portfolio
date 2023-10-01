import React from "react";
import "./Project.css";
import calculatorImg from "../assets/project_calc.png";
import socialMeidaImg from "../assets/project_sm.png";
import JaiPrabhaFoundationImg from "../assets/project_jp.png";

function Project() {
  return (
    <div className="project" id="projects">
      <div className="project__heading">
        <h1>Projects.</h1>
      </div>
      <div className="project__container">
        <div className="project__container--card">
          <a href="https://vishalvoid.com/#project">
            <img
              src={socialMeidaImg}
              alt="Project : Dravin (A Smart Social Media Websapp)"
            />
          </a>
        </div>
        <div className="project__container--card">
          <img src={calculatorImg} alt="" />
        </div>
        <div className="project__container--card">
          <a href="https://vishalvoid.com/#projects">
            <img
              src={JaiPrabhaFoundationImg}
              alt="Jai Prabha Foundation , Sitab Diara, Bihar (A Central  Government Undertaking Project) "
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
