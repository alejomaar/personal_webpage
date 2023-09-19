import React from "react";
import profile_photo_img from "@assets/profile_photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import messages from "../../constant/messages";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import Headline from "./components/Headline";
import AboutMe from "./components/AboutMe";

export default function LandingPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen h-screen ">
      <Navbar></Navbar>
      <Headline></Headline>
      <AboutMe></AboutMe>

      <div
        className="max-w-7xl mx-auto flex justify-center items-center flex-col border-t border-black my-14"
        id="my_skills"
      >
        <h2 className="font-bold text-4xl  mt-7 mb-3">My skills</h2>
        <div className="max-w-4xl px-5 lg:px-0 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {messages["landing_page"]["skills"].map((info, id) => (
            <div key={id} className="flex flex-col">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
              <h3 className="font-bold text-2xl text-center">{info.title}</h3>
              <p className="text-center">{info.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto flex justify-center items-center flex-col border-t border-black my-14"
        id="my_projects"
      >
        <h2 className="font-bold text-4xl mt-7 mb-6">My projects</h2>
        <div className="w-full grid grid-template-rows  px-5 lg:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
