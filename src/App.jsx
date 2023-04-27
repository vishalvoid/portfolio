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
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="portfolio"
          element={[
            <Homepage />,
            <About />,
            <Project />,
            <Blog />,

            <Contact></Contact>,
          ]}
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog/1" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
