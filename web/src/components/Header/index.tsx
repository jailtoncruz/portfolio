export default function Header() {
  return <header id="header"
    className="flex flex-row flex-1 gap-2 px-4 m-4 text-white 
    items-center h-16 justify-between">
    <a href="#"><h1
      className="flex-1 font-bold text-white text-xl
      max-[600px]:text-lg
      ">
      Jailton Cruz
    </h1></a>
    <div id="menu"
      className="flex gap-16 font-medium text-base
       cursor-pointer text-gray-400
       max-[600px]:text-xs max-[600px]:gap-4"
    >
      <a href="#about">Sobre</a>
      <a href="#contact"> Contato</a>
      <a href="#showcase">Showcase</a>
      <a href="#blog">Blog</a>
    </div>
  </header>
}