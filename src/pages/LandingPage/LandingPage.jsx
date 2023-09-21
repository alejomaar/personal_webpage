import React from "react";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "@components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen h-screen ">
      <Navbar></Navbar>
      <Headline></Headline>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
