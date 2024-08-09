"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import arrowBackIcon from "@/../public/icon/arrow-back.svg";
import arrowForward from "@/../public/icon/arrow-forward.svg";
import BannerSkeleton from "@/components/LoadingSkeleteon/BannerSkeleton";
import { BannerProps } from "@/types";

// Tipos das props do componente

export default function Banner({ datas, propsData, onSearch, isLoading }: BannerProps) {
  const [index, setIndex] = useState(0);
  const [filterData, setFilterData] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  // Seleciona uma imagem aleatória ao carregar a página
  useEffect(() => {
    if (datas.length > 0) {
      const randomIndex = Math.floor(Math.random() * datas.length);
      setRandomImage(
        `url(https://image.tmdb.org/t/p/original${datas[randomIndex].backdrop_path})`
      );
    }
  }, [datas]);

  // Handlers
  const handlerNextImage = () => {
    setIndex(index === datas.length - 1 ? 0 : index + 1);
    setImageLoaded(false);
  };

  const handlerPrevImage = () => {
    setIndex(index === 0 ? datas.length - 1 : index - 1);
    setImageLoaded(false);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInput = e.currentTarget.elements.namedItem('searchInput') as HTMLInputElement;
    onSearch(searchInput.value);
    setFilterData("");
  };

  const bannerStyle = {
    backgroundImage: `
      linear-gradient(135deg, rgba(1, 180, 228, 0.5), rgba(144, 206, 161, 0.5)), 
      ${randomImage}
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="w-full -mt-1 mx-auto -z-10 flex gap-8 lg:gap-24 items-center p-12"
      style={bannerStyle}
    >
      <div className="text-white font-bold w-full md:w-1/2 p-4 h-full relative">
        <h1 className="text-4xl m-2">{propsData.title}</h1>
        <h1 className="text-2xl m-2">{propsData.desc}</h1>
        <form
          onSubmit={handlerSubmit}
          className="w-full rounded-full shadow-lg text-primary my-4 flex relative lg:mt-20 mt-10"
        >
          <input
            name="searchInput"
            value={filterData}
            onChange={(e) => setFilterData(e.target.value)}
            className="w-full font-normal rounded-full p-2 px-4 border-0"
            type="search"
            placeholder={propsData.placeholder}
          />
          <div
            className="p-2 px-4 text-white font-bold absolute -right-1 z-20 rounded-full hover:bg-primary transition-all ease-in-out duration-200 active:bg-tertiary cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #01b4e4, #0d253f)",
            }}
          >
            <button>Buscar</button>
          </div>
        </form>
      </div>
      <div className="group hidden md:flex items-center text-white w-1/2 gap-2">
        <div
          className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 cursor-pointer hover:scale-105 relative"
          onClick={handlerPrevImage}
        >
          <Image
            className="opacity-70"
            src={arrowBackIcon}
            alt="Back Icon"
            width={45}
            height={45}
            loading="lazy"
          />
        </div>
        <div className="relative hover:scale-105 transition-all ease-in-out duration-300 shadow-lg group/banner active:scale-100">
          {isLoading ? (
            <BannerSkeleton />
          ) : (
            datas.map((e, i) => {
              if (i === index) {
                return (
                  <Link
                    key={e.id}
                    href={
                      e.media_type === "movie"
                        ? `/movies/details/${e.id}`
                        : `/series/details/${e.id}`
                    }
                  >
                    <div className="relative h-full w-full flex justify-center items-center">
                      <div
                        className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl transition-opacity duration-500 ease-in-out ${
                          imageLoaded ? "opacity-0" : "opacity-100"
                        }`}
                      />
                      <Image
                        alt={e.title ? e.title : e.name || 'Imagem sem título'}
                        className={`rounded-2xl transition-opacity duration-500 ease-in-out ${
                          imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                        width={478}
                        height={268}
                        onLoad={() => setImageLoaded(true)}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black rounded-xl opacity-0 group-hover/banner:opacity-50 transition-all ease-in-out duration-300 cursor-pointer"></div>
                      <div className="absolute z-20 opacity-0 group-hover/banner:opacity-100 transition-all ease-in-out duration-300 font-bold p-4 bottom-4">
                        <h1 className="text-xl">
                          {e.title ? e.title : e.name}
                        </h1>
                      </div>
                    </div>
                  </Link>
                );
              }
              return null;
            })
          )}
        </div>
        <div
          className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 cursor-pointer hover:scale-105"
          onClick={handlerNextImage}
        >
          <Image
            className="opacity-70"
            src={arrowForward}
            alt="Forward"
            width={45}
            height={45}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
