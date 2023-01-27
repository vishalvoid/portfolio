import React from "react";
import "./Project.css";

function Project() {
  return (
    <section className="project">
      <div className="project__heading">
        <h1>Projects.</h1>
      </div>
      <div className="row project__pcontent">
        <div className="col-1-of-2">
          <img src="images/e-auth.jpg" alt="e-auth" />
        </div>
        <div className="col-1-of-2 project__text-box">
          <h2>E-Authentication</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptatibus minus vitae, corporis veniam, eligendi officiis natus
            quisquam qui alias et necessitatibus adipisci maxime non? Accusamus
            cum ducimus rerum fugit.
          </p>
        </div>
      </div>
      <div className="row project__pcontent">
        <div className="col-1-of-2">
          <img src="images/hms.png" alt="hms" />
        </div>
        <div className="col-1-of-2 project__text-box">
          <h2>Hospital Managment App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptatibus minus vitae, corporis veniam, eligendi officiis natus
            quisquam qui alias et necessitatibus adipisci maxime non? Accusamus
            cum ducimus rerum fugit.
          </p>
        </div>
      </div>
      <div className="row project__pcontent">
        <div className="col-1-of-2 ">
          <img src="images/weather.jpg" alt="weather" />
        </div>
        <div className="col-1-of-2 project__text-box">
          <h2>Weather Forcasting App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptatibus minus vitae, corporis veniam, eligendi officiis natus
            quisquam qui alias et necessitatibus adipisci maxime non? Accusamus
            cum ducimus rerum fugit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project;
