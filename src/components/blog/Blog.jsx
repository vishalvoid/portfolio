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
        <BlogCard
          date={`25/01/2023`}
          heading="Dravin ( A smart Social media app) - is getting popularity worldwide."
        />
        <BlogCard
          date={`05/12/2022`}
          heading="Downfall of CryptoCurrency - by Vishal"
        />
        <BlogCard
          date={`11/07/2022`}
          heading="How to Celebrate Diwali with Eco-Frendly Crackers"
        />
        <BlogCard
          date={`25/01/2023`}
          heading="chatGPT has finally took over the internet"
        />
      </div>
    </div>
  );
}

export default Blog;
