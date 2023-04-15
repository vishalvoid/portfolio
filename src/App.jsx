import React from "react";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Homepage from "./components/homepage/Homepage";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import ContactUs from "./components/ContactUs/ContactUs";
import { Routes, Route } from "react-router-dom";
import BlogCard from "./components/blog/BlogCard";
import BlogPost from "./components/blog/BlogPost/BlogPost";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={[
          <Homepage />,
          <About />,
          <Blog />,
          <Project />,
          <Contact></Contact>,
        ]}
      />
      <Route path="/contact" exact element={<ContactUs />} />
      <Route path="/blog/1" exact element={<BlogPost />} />
    </Routes>
  );
}

export default App;
