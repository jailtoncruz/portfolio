import { titles } from "../../core/constants/texts";
import { useContext } from "react";
import { GlobalContext } from "../../components/context/global";
import { LanguageSupported } from "../../core/enum/language-supported";
import { AboutEn } from "./en";
import { AboutPt } from "./pt";

export function About() {
  const { language } = useContext(GlobalContext);
  return (
    <div className="flex flex-1 flex-col gap-4 max-w-[900px] mx-auto py-4 px-8">
      <h1 className="md:text-2xl text-center font-bold my-2">
        {titles.about[language]} {titles.me[language]}
      </h1>
      {language === LanguageSupported.US ? <AboutEn /> : <AboutPt />}
    </div>
  );
}
