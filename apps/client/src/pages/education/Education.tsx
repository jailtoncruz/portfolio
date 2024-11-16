import { useContext } from "react";
import { GlobalContext } from "../../components/context/global";
import { titles } from "../../core/constants/texts";

export function Education() {
  const { language } = useContext(GlobalContext);
  return (
    <div className="flex flex-col items-center py-8 text-white px-8">
      <h1 className="font-bold text-2xl mb-12">{titles.education[language]}</h1>
    </div>
  );
}
