import React from "react";
import data from "./assets/data";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div
      className="max-w-7xl mx-auto flex justify-center items-center flex-col border-t border-black my-14"
      id="my_projects"
    >
      <h2 className="font-bold text-4xl mb-3 mt-7">
        {t("landing_page.project.title")}
      </h2>
      <p className="">{t("landing_page.project.description")}</p>
      <p className="">{t("landing_page.project.disclaimer")}</p>
      <div className="w-full grid grid-template-rows  px-5 lg:px-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {data.map((info, id) => (
          <a key={id} className="flex flex-col group cursor-pointer">
            <div className="w-full aspect-square max-w-full">
              <img
                src={info.img}
                className="object-cover w-full max-w-full max-h-full h-full"
                alt="Image"
              />
            </div>
            <h3 className="text-xl  font-bold group-hover:underline mt-2">
              {t(info?.title)}
            </h3>
            <span className="">{t(info?.description)}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
