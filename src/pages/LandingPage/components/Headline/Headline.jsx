import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import arrow from "@assets/arrow.svg";
import { useTranslation } from "react-i18next";

export default function Headline() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col  h-screen">
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl  text-center sans_serif px-4">
        {t("landing_page.greeting")}
      </h1>
      <h1 className="font-bold px-5 text-3xl md:text-5xl lg:text-7xl  text-gray-900 text-center px-4">
        {t("landing_page.occupation")}
      </h1>

      <div className="w-full relative flex justify-center items-center mt-14">
        <div className="w-full overflow-hidden absolute origin-center border-t border-b border-black py-7">
          <div className="marquee-container">
            <ul className="marquee flex">
              <li className="mx-3 text-4xl md:text-6xl">
                {t("landing_page.skills_1")}
              </li>
              <li className="mx-3 text-4xl md:text-6xl">
                {t("landing_page.skills_2")}
              </li>
              <li className="mx-3 text-4xl md:text-6xl">
                {t("landing_page.skills_3")}
              </li>
              <li className="mx-3 text-4xl md:text-6xl">
                {t("landing_page.skills_4")}
              </li>
            </ul>
          </div>
        </div>
        <img
          className="w-44 h-44 md:w-64 md:h-64  z-10 rounded-full"
          src="https://aws-resources-ia.s3.us-west-1.amazonaws.com/profile_photo.png"
        />
      </div>

      <div className="flex mt-4">
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
      <div class="scroll-down absolute flex flex-col items-center right-5 md:right-12 lg:right-24 bottom-5">
        <img class="w-4 animate-bounce" src={arrow} />
        <p>Scroll Down</p>
      </div>
    </div>
  );
}
