import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profile_photo_img from "@assets/profile_photo.png";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Headline() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col  h-screen">
      <h1 className="font-bold text-2xl sm:text-3xl  text-center sans_serif">
        {t("landing_page.greeting")}
      </h1>
      <h1 className="font-bold px-5 text-5xl sm:text-7xl  text-gray-900 text-center ">
        {t("landing_page.occupation")}
      </h1>

      <div className="w-full relative flex justify-center items-center">
        <div className="w-full overflow-hidden absolute top-1/2 border-t border-b border-black">
          <div className="marquee-container  my-7">
            <ul className="marquee flex">
              <li className="mx-3 text-6xl">{t("landing_page.skills_1")}</li>
              <li className="mx-3 text-6xl">{t("landing_page.skills_2")}</li>
              <li className="mx-3 text-6xl">{t("landing_page.skills_3")}</li>
              <li className="mx-3 text-6xl">{t("landing_page.skills_4")}</li>
            </ul>
          </div>
        </div>
        <img
          className="w-64 h-64 mt-14 z-10 rounded-full"
          src={profile_photo_img}
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
    </div>
  );
}
