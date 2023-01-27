import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <footer className="footer">
      <div className="footer__details">
        <div className="footer__description">
          <h2 className="footer__heading--main">Contact Us</h2>
          <ul>
            <li className="footer__list">Contact</li>
            <li className="footer__list">
              5534 Somewhere In. The World 22193-10212
            </li>
          </ul>
          <a href="/">
            <button className="btn">Email Us</button>
          </a>
        </div>
        <div className="footer__description">
          <h4 className="footer__heading--sub">Media</h4>
          <ul>
            <li className="footer__list">Online</li>
            <li className="footer__list">Print</li>
            <li className="footer__list">Alternative Ads</li>
          </ul>
        </div>
        <div className="footer__technology">
          <h4 className="footer__heading--sub">Technology</h4>
          <ul>
            <li className="footer__list">Hardware Design</li>
            <li className="footer__list">Software Design</li>
            <li className="footer__list">Digital Signage</li>
          </ul>
        </div>
        <div className="footer__legal">
          <h4 className="footer__heading--sub">Legal</h4>
          <ul>
            <li className="footer__list">Privacy Policy</li>
            <li className="footer__list">Terms of Use</li>
            <li className="footer__list">Sitemap</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
