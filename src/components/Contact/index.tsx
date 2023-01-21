import Image from 'next/image';
import me from '../../../public/me.jpeg';
import { Mail, GitHub, Linkedin } from 'react-feather'
import { Bold } from '../Bold';
import { Link } from '../Link';
export default function Contact() {
  return <div id="contact"
    className="section-bg px-4 m-4 flex flex-row  main-content
    max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-16  max-[800px]:text-center
    max-[800px]:my-8" >

    <div className="flex-1 flex flex-col justify-center items-center max-[800px]:justify-start">
      <div className='p-2 border-white border-4 rounded-full'>
        <Image
          src={me}
          alt="Foto de perfil de Jailton Cruz"
          className='w-48 h-48
          rounded-full'
        />
      </div>
      <h3 className="font-bold text-xl text-white text-center my-6
        max-[800px]:text-3xl">
        Jailton Cruz
      </h3>
      <div className='flex flex-row justify-between w-40'>
        <Link href='mailto:jailtoncruz01@gmail.com?subject=ViSeuPortifolio'>
          <Mail color='#FFF' className='cursor-pointer' />
        </Link>
        <Link href='https://github.com/jailtoncruz'>
          <GitHub color='#FFF' className='cursor-pointer' />
        </Link>
        <Link href='https://www.linkedin.com/in/jailtoncruz/'>
          <Linkedin color='#FFF' className='cursor-pointer' />
        </Link>
      </div>
    </div>

    <div className="flex-1 flex flex-col justify-center max-[800px]:justify-end">
      <h1 className="font-bold text-white text-2xl mb-4">
        SOBRE
      </h1>
      <h2 className="font-bold text-xl text-white max-[800px]:text-base">
        Conheça um pouco sobre mim
      </h2>
      <blockquote className="mt-2">
        <p className="text-base text-white  max-[800px]:text-xs my-4">
          Me chamo Jailton Cruz sou bacharel em <Link href='https://www.uninove.br/cursos/graduacao/presencial/sistemas-de-informacao'><Bold>Sistemas da Informação</Bold></Link>,
          programo a 5 anos em <Bold>TypeScript</Bold>,
          iniciei meus estudos com a stack <Bold>Java Spring Boot 3 + Angular 6</Bold> e
          depois mudei para a stack atual <Bold>NodeJS + ReactJS</Bold>.
        </p>
        <p className="text-base text-white  max-[800px]:text-xs">
          Iniciei minha carreira como suporte técnico em 2013 e o inicio dos meus estudos eram voltados servidores (<Bold>Windows Server e Linux</Bold>) e infraestrutura
          (<Bold>redes, armazenamento, virtualização, etc.</Bold>) e isso me deu uma base bem sólida para realizar tarefas de <Bold>DevOps</Bold>.
        </p>
      </blockquote>
    </div>


  </div>
}