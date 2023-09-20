import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-black text-white  min-h-screen" id="about_me">
      <div className="max-w-4xl px-5 lg:px-3 lg:px-0 mx-auto flex flex-col border-t border-black py-20 ">
        <h2 className="font-bold text-6xl mt-7 text-center">About Me</h2>
        <p className="text-lg md:text-xl mt-3  m-auto">
          {t("landing_page.description_1")}
        </p>
        <p className="text-lg md:text-xl mt-3  m-auto">
          {t("landing_page.description_2")}
        </p>
        <p className="text-lg md:text-xl mt-3  m-auto">
          {t("landing_page.description_3")}
        </p>
        <div className="">
          <h2 className="font-bold text-4xl mt-7">Core Values</h2>
          <div className="flex border-t border-white py-3 my-3">
            <div className="w-1/2">
              <span className="font-bold">Curiosity</span>
            </div>
            <div className="w-1/2">
              <p>I'm driven by curiosity, always eager to explore and learn.</p>
            </div>
          </div>
          <div className="flex border-t border-white py-3">
            <div className="w-1/2">
              <span className="font-bold">Transparency </span>
            </div>
            <div className="w-1/2">
              <p>
                I promoted transparency in everything I do. I support open
                source alternatives
              </p>
            </div>
          </div>
          <div className="flex border-t border-white py-3">
            <div className="w-1/2">
              <span className="font-bold">User Focus</span>
            </div>
            <div className="w-1/2">
              <p>Inspired to build user-centered software</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
