import React from "react";
import "./Blog.css";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <div className="blog" id="blog">
      <div className="blog-heading">
        <h1>Blog.</h1>
      </div>
      <div className="blog__container">
        <a href="https://vishalvoid.com/blog/1">
          <BlogCard
            date={`May 27, 2023`}
            heading="Are you a Beginner? Start Here ( Episode-1/8 )"
          />
        </a>
        <a href="https://vishalvoid.com/blog/2">
          <BlogCard
            date={`June 02, 2023`}
            heading="Still Confused? Read This! ( Episode-2/8 )"
          />
        </a>
        <a href="https://vishalvoid.com/blog/3">
          <BlogCard
            date={`June 14, 2023`}
            heading="You really think you know? ( Episode-3/8 )"
          />
        </a>
        <a href="https://vishalvoid.com/blog/4">
          <BlogCard
            date={`June 26, 2023`}
            heading="Embracing Continuous Learning ( Episode-4/8 )"
          />
        </a>
      </div>
    </div>
  );
}

export default Blog;
