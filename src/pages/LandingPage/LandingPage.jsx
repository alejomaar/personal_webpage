import React from "react";
import messages from "../../constant/messages";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills/Skills";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function LandingPage() {
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
        <p className="">(Soon more)</p>
        <div className="w-full grid grid-template-rows  px-5 lg:px-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {messages["landing_page"]["projects"].map((info, id) => (
            <a className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-square max-w-full">
                <img
                  src={info.img}
                  className="object-cover w-full max-w-full max-h-full h-full"
                  alt="Image"
                />
              </div>
              <h3 className="text-xl  font-bold group-hover:underline mt-2">
                Hierarchical text-conditional image generation with CLIP latents
              </h3>
              <span className="">{info.description}</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="bg-black py-2 text-white">
        <div className="max-w-4xl mx-auto flex justify-center items-center flex-col border-t border-black my-7">
          <p className="text-4xl text-center">Let's create the future!</p>
          <p className="text-xl text-center font-bold">Get in touch with me!</p>
          <div className="flex">
            <a
              href="https://github.com/alejomaar"
              target="_blank"
              className="bg-black p-3 cursor-pointer mx-2 rounded-md"
            >
              <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
            </a>
            <a
              href="https://github.com/alejomaar"
              target="_blank"
              className="bg-black p-3 cursor-pointer mx-2 rounded-md"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="white" />
            </a>
          </div>
          <span className="text-sm mt-4">
            Copyright © Alejandro Aponte 2023
          </span>
        </div>
      </footer>
    </div>
  );
}
