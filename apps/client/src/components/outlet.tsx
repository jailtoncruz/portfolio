import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { titles } from "../core/constants/texts";
import { GlobalContext } from "./context/global";

export function Outlet({ children }: React.PropsWithChildren) {
  const { language } = useContext(GlobalContext);
  const navStyles =
    "cursor-pointer font-medium text-sm md: text-base select-none";
  return (
    <div className="bg-black flex-1 flex flex-col md:border-l border-white max-h-screen min-h-screen pt-4">
      <div className="flex flex-row justify-center items-center gap-3 md:gap-8 h-16 flex-wrap">
        <Link to={"/"}>
          <p className={navStyles}>{titles.about[language]}</p>
        </Link>
        {/* <Link to={"/education"}>
          <p className={navStyles}>{titles.education[language]}</p>
        </Link> */}
        <Link to={"/career"}>
          <p className={navStyles}>{titles.career[language]}</p>
        </Link>
        <Link to={"/projects"}>
          <p className={navStyles}>{titles.projects[language]}</p>
        </Link>
        <Link to={"/curriculum-vitae"}>
          <p className={navStyles}>Curriculum Vitae</p>
        </Link>
      </div>
      <div className="flex flex-col overflow-auto flex-1">{children}</div>
    </div>
  );
}
