import { useContext } from "react";
import { getExperieceList } from "../../core/constants/experiences";
import { GlobalContext } from "../../components/context/global";
import { titles } from "../../core/constants/texts";

export function Career() {
  const { language } = useContext(GlobalContext);
  const experienceList = getExperieceList(language);

  return (
    <div className="flex flex-col items-center py-8 text-white px-8">
      <h1 className="font-bold md:text-2xl mb-12">
        {titles.professionalExperience[language]}
      </h1>
      <div className="flex flex-row max-w-[900px] mx-auto">
        {/* Vertical line */}
        <div className="border-l-2 border-gray-600 relative left-[5px] top-[10px]"></div>
        <ul className="space-y-6">
          {experienceList.map((item, index) => (
            <li key={index} className="flex items-start space-x-4">
              {/* Dot */}
              <div className="w-2 h-2 bg-gray-600 rounded-full mt-[10px]"></div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-100">
                  {item.role}
                </h3>
                <p className="text-sm text-gray-300">
                  <strong>{item.company}</strong>, {item.location}
                </p>
                <p className="text-sm text-gray-500">
                  {item.startDate} - {item.endDate}
                </p>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
