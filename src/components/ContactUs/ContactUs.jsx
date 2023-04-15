import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <section id="contact">
        <h1 class="section-header">Contact me.</h1>

        <div class="contact-wrapper">
          {/* <!-- Left contact page -->  */}

          <form id="contact-form" class="form-horizontal" role="form">
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value=""
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value=""
                  required
                />
              </div>
            </div>

            <textarea
              class="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div class="alt-send-button">
                <i class="fa fa-paper-plane "></i>
                <span class="send-text">SEND</span>
              </div>
            </button>
          </form>

          {/* <!-- Left contact page -->  */}

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text place">Noida, India</span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      +91-8448 171017
                    </a>
                  </span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      tech.vishalkrsingh@gm..
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <ht></ht>
            <ul class="social-media-list">
              <li>
                <a
                  href="https://github.com/vishalvoid"
                  target="_blank"
                  class="contact-icon"
                >
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/vishalvoid"
                  target="_blank"
                  class="contact-icon"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/vishal_void"
                  target="_blank"
                  class="contact-icon"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vishal_void"
                  target="_blank"
                  class="contact-icon"
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
            <hr></hr>

            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
