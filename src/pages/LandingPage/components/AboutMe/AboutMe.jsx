import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="bg-black text-white " id="about_me">
      <div className="max-w-4xl px-5 lg:px-3 lg:px-0 mx-auto flex flex-col border-t border-black py-10 ">
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
          <h2 className="font-bold text-4xl mt-7">
            {t("landing_page.core_values.title")}
          </h2>
          <div className="flex border-t border-white py-3 my-3">
            <div className="w-1/2">
              <span className="font-bold">
                {t("landing_page.core_values.value_1_title")}
              </span>
            </div>
            <div className="w-1/2">
              <p>{t("landing_page.core_values.value_1_description")}</p>
            </div>
          </div>
          <div className="flex border-t border-white py-3">
            <div className="w-1/2">
              <span className="font-bold">
                {t("landing_page.core_values.value_2_title")}{" "}
              </span>
            </div>
            <div className="w-1/2">
              <p>{t("landing_page.core_values.value_2_description")}</p>
            </div>
          </div>
          <div className="flex border-t border-white py-3">
            <div className="w-1/2">
              <span className="font-bold">
                {t("landing_page.core_values.value_3_title")}
              </span>
            </div>
            <div className="w-1/2">
              <p>{t("landing_page.core_values.value_3_description")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
