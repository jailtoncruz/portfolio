import Image from 'next/image';
import ilustration from '../../../public/ilustration-dev.png';

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
          Desenvolvedor full-stack especializado em TypeScript (Front-end e Back-end) com experiencia real em DevOps com Docker, Nginx e plataformas de Cloud como Azure, Google Cloud e Oracle Cloud.
        </p>
      </blockquote>
    </div>

    <div className="flex-1 flex flex-col justify-center items-end max-[800px]:justify-start">
      <Image
        src={ilustration}
        alt="Ilustração de desenvolvedor"
        className='w-auto max-[800px]:w-72'
      />
    </div>
  </div>
}