import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__details">
        <div className="footer__description">
          <h2 className="footer__heading--main">Connect with me.</h2>
          <ul>
            <li className="footer__list">Vishal Kumar Singh</li>
            <li className="footer__list">Noida, India</li>
          </ul>
          <a href="/">
            <button className="btn">
              {" "}
              <Link to="/contact">Contact me</Link>
            </button>
          </a>
        </div>
        <div className="footer__description">
          <h4 className="footer__heading--sub">Social</h4>
          <ul>
            <li className="footer__list">
              <a href="https://www.github.com/vishalvoid" target="_blank">
                {" "}
                Github <i class="fa fa-github-square"></i>
              </a>
            </li>
            <li className="footer__list">
              {" "}
              <a href="https://www.linkedin.com/in/vishalvoid" target="_blank">
                {" "}
                Linkedin <i class="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li className="footer__list">
              <a href="http://www.twitter.com/vishal_void" target="_blank">
                {" "}
                Twitter <i class="fa fa-twitter-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__technology">
          <h4 className="footer__heading--sub">Known Technology</h4>
          <ul>
            <li className="footer__list">Full Stack Webapp Development</li>
            <li className="footer__list">Native Android Development</li>
            <li className="footer__list">Data Structures & Algorithm</li>
          </ul>
        </div>
        <div className="footer__legal">
          <h4 className="footer__heading--sub">Previous Projects</h4>
          <ul>
            <li className="footer__list">Jai Prabha Foundation</li>
            <li className="footer__list">Portfolio</li>
            <li className="footer__list">Social Media</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
