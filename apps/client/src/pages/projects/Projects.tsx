import { useContext } from "react";
import { titles } from "../../core/constants/texts";
import { GlobalContext } from "../../components/context/global";

import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../core/constants/projects";

export function Projects() {
  const { language } = useContext(GlobalContext);

  return (
    <div className="flex flex-col text-white px-8">
      <h1 className="font-bold md:text-2xl text-center mb-4">
        {titles.projects[language]}
      </h1>
      <div className="flex flex-col">
        {projects.length === 0 ? (
          <p className="text-center self-center">No project published yet 🫤</p>
        ) : (
          projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))
        )}
      </div>
    </div>
  );
}
