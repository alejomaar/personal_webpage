import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 flex h-20 bg-white z-20">
      <ul className="w-full flex justify-center items-center">
        <li className="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black">
          <Link
            to="about_me"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li className="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black">
          <Link
            to="my_skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            My Skills
          </Link>
        </li>
        <li className="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black">
          <Link
            to="my_projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            My Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
