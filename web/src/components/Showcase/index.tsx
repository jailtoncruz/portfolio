import { Project } from "@/core/domain/Project";
import { api } from '@/lib/api';
import { useEffect, useState } from "react";
import { Carousel } from "../Carousel";

// const itens: ShowcaseItem[] = [{
//   title: 'Projeto DevRadar',
//   description: 'Projeto desenvolvido com a rockeatseat',
//   thumbnail: URL_BASE_CDN.concat("dev-radar.png"),
//   url: 'https://github.com/jailtoncruz/dev-radar'
// },
// {
//   title: 'Projeto Ecoleta',
//   description: 'Projeto desenvolvido com a rockeatseat',
//   thumbnail: URL_BASE_CDN.concat("ecoleta.png"),
//   url: 'https://github.com/jailtoncruz/ecoleta'
// },
// {
//   title: 'NLW Copa',
//   description: 'Projeto desenvolvido com a rockeatseat',
//   thumbnail: URL_BASE_CDN.concat("copa.png"),
//   url: 'https://github.com/jailtoncruz/nlw-copa'
// }
// ]

export default function Showcase() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get<Project[]>("/project")
      .then(res => setProjects(res.data))
      .catch(console.error)
  }, [])

  if (projects.length === 0) return null;

  return <div id="showcase"
    className="section-bg px-4 m-4 flex flex-col min-h-[450px]
      max-[800px]:flex-col max-[800px]:gap-16  max-[800px]:text-center
      max-[800px]:my-8" >
    <h1 className="font-bold text-white text-2xl mb-4 text-center ">
      Showcase
    </h1>

    <Carousel data={projects} />
  </div>
}