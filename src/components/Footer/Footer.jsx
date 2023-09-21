import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
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
        <span className="text-sm mt-4">Copyright © Alejandro Aponte 2023</span>
      </div>
    </footer>
  );
}
