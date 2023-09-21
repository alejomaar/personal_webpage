import React from "react";
import data from "./assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <div
      className="max-w-7xl mx-auto flex justify-center items-center flex-col border-t border-black my-14"
      id="my_skills"
    >
      <h2 className="font-bold text-4xl  mt-7 mb-3">
        {t("landing_page.skills.title")}
      </h2>
      <p>{t("landing_page.skills.description")} </p>
      <div className="max-w-5xl px-5 lg:px-0 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {data.map((info, id) => (
          <div key={id} className="flex flex-col">
            <FontAwesomeIcon icon={info.icon} size="3x" />
            <h3 className="font-bold text-2xl text-center">{t(info.title)}</h3>
            <p className="text-center text-sm md:text-base">
              {t(info.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
