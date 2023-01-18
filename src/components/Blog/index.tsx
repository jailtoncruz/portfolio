export default function Blog() {
  return <div id="blog"
    className="section-bg px-4 m-4 flex flex-col  main-content
    max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-16  max-[800px]:text-center
    max-[800px]:my-8" >
    <h1 className="font-bold text-white text-2xl mb-4 text-center">
      Blog
    </h1>
    <div className="flex-1 flex flex-col justify-center items-center max-[800px]:justify-start">
    </div>

    <div className="flex-1 flex flex-col justify-center max-[800px]:justify-end">
    </div>
  </div>
}