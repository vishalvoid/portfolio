import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="about__heading">
          <h1>About.</h1>
        </div>
        <div className="about__box">
          <div className="about__box--left-box">
            <h1 className="about__box--leftsubheading">Get to know me!</h1>
            <p className="about__box--leftparagraph">
              I'm a <b> Full-Stack Developer </b>and a great Engineer Generating
              a magical world with my codes.Web Applications that leads to the
              success of the overall product. Check out some of my work in the
              <b>Projects</b> section.
              <br />
              <br />I also like sharing content related to the stuff that I have
              learned over the years in Development so it can help other people
              of the Dev Community. Feel free to Connect or Follow me on
              my&nbsp;
              <a className="linked-about" href="http://">
                LinkedIn
              </a>{" "}
              where I post useful content related to Web Development and
              Programming. <br /> <br />
              I'm open to <b>Job</b> opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don't hesitate to <b>contact</b> me.
            </p>
          </div>

          <div className="about__box--right-box">
            <h1 className="about__box--rightsubheading">My Skills..</h1>
            <div className="about__box--skills">
              <span className="about-box">HTML</span>
              <span className="about-box">CSS</span>
              <span className="about-box">C Language</span>
              <span className="about-box">Python</span>
              <span className="about-box">MySQL</span>
              <span className="about-box">C++</span>
              <span className="about-box">Git</span>
              <span className="about-box">Github</span>
              <span className="about-box">Java</span>
              <span className="about-box">Databases</span>
            </div>
            <div className="about__box--contactme">Contact Me</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
