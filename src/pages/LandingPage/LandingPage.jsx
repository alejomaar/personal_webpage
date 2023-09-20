import React, { useState } from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import messages from "../../constant/messages";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import Headline from "./components/Headline";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills/Skills";

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen h-screen ">
      <Navbar></Navbar>
      <Headline></Headline>
      <AboutMe></AboutMe>
      <Skills></Skills>

      <div
        className="max-w-7xl mx-auto flex justify-center items-center flex-col border-t border-black my-14"
        id="my_projects"
      >
        <h2 className="font-bold text-4xl mb-3 mt-7">Personal Projects</h2>
        <p className="">Here you can see some of the projects I've done</p>
        <div className="w-full grid grid-template-rows  px-5 lg:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {messages["landing_page"]["projects"].map((info, id) => (
            <a className="flex flex-col group cursor-pointer">
              <img src={info.img} />
              <h3 className="text-xl mt-2 px-2 font-bold  group-hover:underline ">
                Hierarchical text-conditional image generation with CLIP latents
              </h3>
              <span className="px-2">{info.description}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col border-t border-black my-14">
        <p className="text-4xl text-center">
          Join us in shaping the future of technology.
        </p>
      </div>
      <footer className="bg-black py-3">x</footer>
    </div>
  );
}
