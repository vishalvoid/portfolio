import React from "react";

function BlogCard(props) {
  return (
    <div className="blog__container-box">
      <div className="blog__container-box--date">{props.date}</div>
      <div className="blog__container-box--heading">{props.heading}</div>
    </div>
  );
}

export default BlogCard;
