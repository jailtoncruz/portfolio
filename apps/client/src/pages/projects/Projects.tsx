import { useContext } from "react";
import { titles } from "../../core/constants/texts";
import { GlobalContext } from "../../components/context/global";

export function Projects() {
  const { language } = useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center py-8 text-white px-8">
      <h1 className="font-bold text-2xl mb-12">{titles.projects[language]}</h1>
    </div>
  );
}
