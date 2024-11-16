import { FiExternalLink } from "react-icons/fi";
import { ProjectDetail } from "../core/interfaces/project-detail";

function LinkIcon({ url, text }: { url?: string; text: string }) {
  if (!url) return undefined;
  return (
    <a className="flex flex-row gap-1 items-center" href={url}>
      {text} <FiExternalLink />
    </a>
  );
}

export function ProjectCard({ project }: { project: ProjectDetail }) {
  return (
    <div className="rounded border border-gray-800 w-full flex flex-row p-2 gap-4">
      <div>
        <img
          src={project.thumbnailUrl}
          alt="Project preview"
          className="h-52 rounded border border-white"
        />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <h1 className="font-bold text-xl">{project.title}</h1>
        <p className="flex-1 text-sm text-justify">{project.description}</p>
        <div className="self-end flex flex-row gap-4 items-center text-blue-400">
          <LinkIcon url={project.repositoryUrl} text="Code" />
          <LinkIcon url={project.demoUrl} text="Preview" />
        </div>
      </div>
    </div>
  );
}
