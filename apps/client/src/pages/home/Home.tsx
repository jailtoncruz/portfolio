import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

import profilePic from "../../assets/me_square.jpg";
import { Separator, Switch } from "@radix-ui/themes";
import ReactCountryFlag from "react-country-flag";
import { Router } from "../../Router";
import {
  GlobalContext,
  GlobalContextProvider,
} from "../../components/context/global";
import { useContext } from "react";
import { titles } from "../../core/constants/texts";
import { LanguageSupported } from "../../core/enum/language-supported";
import { ShortDescriptionEn } from "./en";
import { ShortDescriptionPt } from "./pt";

function SideBar() {
  const { language, setLanguage } = useContext(GlobalContext);
  function onlanguagechange(isEn: boolean) {
    setLanguage(isEn ? LanguageSupported.US : LanguageSupported.PT);
  }

  return (
    <div className="flex flex-col flex-1 gap-2 items-center justify-between md:max-w-[300px] p-8 min-h-screen">
      <div className="flex flex-col items-center flex-1 justify-end">
        <img
          src={profilePic}
          className="rounded-full border-white border-4"
          width={128}
        />
        <h1 className="text-4xl mt-4">Jailton Cruz</h1>
        <strong>{titles.mainJobDescription[language]}</strong>
        <div className="flex flex-row gap-4 justify-center items-center mt-4">
          <a
            href="mailto:jailtoncruz01@gmail.com?subject=ViSeuPortifolio"
            target="_blank"
            rel="noreferrer"
          >
            <FiMail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jailtoncruz/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://github.com/jailtoncruz"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={24} />
          </a>
        </div>
      </div>

      <Separator size={"4"} className="bg-yellow-400 my-8" />
      {language === LanguageSupported.US ? (
        <ShortDescriptionEn />
      ) : (
        <ShortDescriptionPt />
      )}

      <div className="flex flex-row gap-4">
        <ReactCountryFlag
          countryCode="BR"
          style={{
            fontSize: "24px",
          }}
        />
        <Switch defaultChecked onCheckedChange={onlanguagechange} />
        <ReactCountryFlag
          countryCode="US"
          style={{
            fontSize: "24px",
          }}
        />
      </div>
      <p className="md:hidden text-xs ">Scroll down to see more!</p>
    </div>
  );
}

export function Home() {
  return (
    <GlobalContextProvider>
      <div className="min-h-screen min-w-full flex flex-col md:flex-row">
        <SideBar />
        <Router />
      </div>
    </GlobalContextProvider>
  );
}
