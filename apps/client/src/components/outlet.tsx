import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { titles } from "../core/constants/texts";
import { GlobalContext } from "./context/global";

export function Outlet({ children }: React.PropsWithChildren) {
  const { language } = useContext(GlobalContext);
  return (
    <div className="bg-black flex-1 flex flex-col border-l border-white max-h-screen">
      <div className="flex flex-row justify-center items-center gap-8 h-16">
        <Link to={"/"}>
          <p className="cursor-pointer font-medium text-base">
            {titles.about[language]}
          </p>
        </Link>
        <Link to={"/education"}>
          <p className="cursor-pointer font-medium text-base">
            {titles.education[language]}
          </p>
        </Link>
        <Link to={"/career"}>
          <p className="cursor-pointer font-medium text-base">
            {titles.career[language]}
          </p>
        </Link>
        <Link to={"/projects"}>
          <p className="cursor-pointer font-medium text-base">
            {titles.projects[language]}
          </p>
        </Link>
        <Link to={"/curriculum-vitae"}>
          <p className="cursor-pointer font-medium text-base">
            Curriculum Vitae
          </p>
        </Link>
      </div>
      <div className="flex flex-col overflow-auto flex-1">{children}</div>
    </div>
  );
}
