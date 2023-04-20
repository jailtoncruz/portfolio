import Image from 'next/image';
import initialAsset from '../../../public/asset-1.png';
import { Link } from '../Link';
import { Bold } from '../Bold';

export default function About() {
  return <div id="about"
    className="section-bg px-4 m-4 flex flex-row  main-content
    max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-16  max-[800px]:text-center
    max-[800px]:my-8" >

    <div className="flex-1 flex flex-col justify-center max-[800px]:justify-end">
      <h1 className="font-bold text-purple-300 
      text-base mb-4 max-[800px]:text-xs">
        DESENVOLVEDOR FULL-STACK
      </h1>
      <h2 className="font-medium text-4xl text-white max-[800px]:text-3xl">
        Jailton Cruz
      </h2>
      <blockquote className="mt-2">
        <p className="text-base text-white  max-[800px]:text-xs">
          Desenvolvedor full-stack especializado em <Link href='https://www.typescriptlang.org/'><Bold>TypeScript</Bold></Link> (Front-end e Back-end)
          com experiencia real em DevOps com <Link href='https://www.docker.com/'><Bold>Docker</Bold></Link>, <Link href='https://www.nginx.com/'><Bold>NGinx</Bold></Link> e plataformas de Cloud
          como <Link href='https://azure.microsoft.com/pt-br/'><Bold>Azure</Bold></Link>, <Link href='https://cloud.google.com/'><Bold>Google Cloud</Bold></Link> e <Link href='https://www.oracle.com/br/cloud/'><Bold>Oracle Cloud</Bold></Link>.
        </p>
      </blockquote>
    </div>

    <div className="flex-1 flex flex-col justify-center items-end max-[800px]:justify-start">
      <Image
        src={initialAsset}
        alt="Computador com imagem escrito Desenvolvedor de software"
        className='w-auto max-[800px]:w-72'
      />
    </div>
  </div>
}