import { ShowcaseItem } from "@/core/domain/ShowcaseItem";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'react-feather';

interface CarouselParams {
  data: ShowcaseItem[];
}

export function Carousel({ data }: CarouselParams) {
  const [current, setCurrent] = useState<ShowcaseItem>(data[0]);

  function getNext() {
    return data.indexOf(current) === data.length - 1 ? data[0] : data[data.indexOf(current) + 1];
  }

  function getPrevious() {
    return data.indexOf(current) === 0 ? data[data.length - 1] : data[data.indexOf(current) - 1];
  }

  const nextItem = getNext();
  const lastItem = getPrevious();

  return <div className="flex-1 flex flex-row max-h-96">

    <div id="preview-previous"
      className="my-8 grow-0 rounded-l-lg bg-left bg-no-repeat bg-cover shadow-lg opacity-80
      flex items-center p-2"
      style={{
        minWidth: '15%',
        backgroundImage: `url(${lastItem.thumbnail})`
      }}>
      <ChevronLeft size={32}
        className="text-gray-800 cursor-pointer hover:scale-110 transition"
        onClick={() => setCurrent(getPrevious())}
      />
    </div>


    <div
      id="atual"
      className="grow  rounded-lg bg-no-repeat bg-cover shadow-lg flex flex-col justify-end cursor-pointer"
      style={{
        backgroundImage: `url(${current.thumbnail})`
      }} onClick={() => window.open(current.url, "_blank")}>
      <div className=" bg-opacity-70 bg-white flex items-center justify-center flex-col shadow-sm shadow-black py-1
      rounded-b-lg">
        <h1 className="font-medium uppercase text-gray-700 select-none">{current.title}</h1>
        <h2 className="text-xs text-gray-600 mx-2 select-none">{current.description}</h2>
      </div>

    </div>


    <div id="preview-next"
      className="  my-8 grow-0 rounded-r-lg bg-right bg-no-repeat bg-cover shadow-lg opacity-80
      flex items-center p-2 justify-end"
      style={{
        minWidth: '15%',
        backgroundImage: `url(${nextItem.thumbnail})`
      }}>
      <ChevronRight
        size={32}
        className="text-gray-800 cursor-pointer hover:scale-110 transition"
        onClick={() => setCurrent(getNext())}
      />
    </div>
  </div>
}