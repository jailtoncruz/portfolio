import { Bold } from "../Bold";
import { Link } from '../Link';

export default function Blog() {
  return <div id="blog"
    className="section-bg px-4 m-4 flex flex-col  main-content
    max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-16  max-[800px]:text-center
    max-[800px]:my-8" >
    <h1 className="font-bold text-white text-2xl mb-4 text-center">
      Blog
    </h1>

    <p className="text-white text-center">
      Em breve criarei um blog para compartilhar experiencias, artigos, tutoriais, implementar algumas ideias e realizar provas de conceito no intuito de registrar o meu ponto de vista enquanto estudo.
    </p>
    <p className="text-white text-center">
      Criando esse portifolio eu coloquei em pratica algumas tecnologias que gosto muito e ainda as estudo mas nunca tive oportunidade de utilizar em um projeto real
      que é o <Link href="https://nextjs.org/"><Bold>NextJS</Bold></Link> e o <Link href="https://tailwindcss.com/"><Bold>TailwindCSS</Bold></Link>
    </p>

  </div>
}