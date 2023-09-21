import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuActive, setmenuActive] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <nav className="w-full fixed top-0 left-0 right-0 flex h-20 bg-white z-20">
      <div className="w-6/12 md:w-3/12 flex ml-12 items-center ">
        <a className="font-bold sans_serif text-2xl border-black border-2 px-1 select-none	hover:bg-black hover:text-white">
          <span>{"<"}</span>AlejoAI
          <span className="serif text-2xl border-black logo_effect">{"/"}</span>
          {">"}
        </a>
      </div>
      <ul className="w-0 md:w-6/12 invisible md:visible  flex justify-center items-center">
        <li className="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black cursor-pointer">
          <Link
            to="about_me"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black cursor-pointer">
          <Link
            to="my_skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black cursor-pointer">
          <Link
            to="my_projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Projects
          </Link>
        </li>
      </ul>
      <div className="w-6/12 md:w-3/12  flex justify-end items-center">
        <div className="invisible md:visible relative inline-block text-left">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center w-15 px-2 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            {selectedLanguage} <span className="ml-3 text-xs">▼</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-20 bg-white border border-gray-300 rounded-md shadow-md">
              <button
                onClick={() => {
                  setSelectedLanguage("English");
                  setDropdownOpen(!isDropdownOpen);
                }}
                className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              >
                English
              </button>
              <button
                onClick={() => {
                  setSelectedLanguage("Español");
                  setDropdownOpen(!isDropdownOpen);
                }}
                className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              >
                Español
              </button>
            </div>
          )}
        </div>

        <button
          className="visible md:invisible font-bold sans_serif text-2xl text-right mr-12"
          onClick={() => setmenuActive(true)}
        >
          ☰
        </button>
        {menuActive && (
          <div className="bg-black inset-0 fixed text-white flex py-7 flex-col">
            <p
              className="ml-auto font-bold cursor-pointer mr-8 text-right"
              onClick={() => setmenuActive(false)}
            >
              Close
            </p>
            <ul className="mx-5 mt-5">
              <li className="cursor-pointer py-1 border-t group">
                <span className="group-hover:border-b">About Me</span>
              </li>
              <li className="cursor-pointer py-1 border-t group">
                <span className="group-hover:border-b">My Skills</span>
              </li>
              <li className="cursor-pointer py-1 border-t group border-b">
                <span className="group-hover:border-b"> My Projects</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
