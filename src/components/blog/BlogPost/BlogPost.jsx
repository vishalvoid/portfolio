import React from "react";
import "./BlogPost.css";

function BlogPost() {
  return (
    <>
      <div className="Blogpost">
        <div className="Blogpost__BgImage">
          <img className="imagess" src="./images/background.jpg" alt="" />
          <div className="Blogpost__BgImage--img-mask"></div>
          <div className="Blogpost__heading">
            <h1>
              Dravin ( A smart Social media app) - is getting popularity
              worldwide.
            </h1>
          </div>
        </div>
        <div className="Blogpost__content-section"></div>
      </div>
    </>
  );
}

export default BlogPost;
