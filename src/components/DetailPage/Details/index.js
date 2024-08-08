"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Detail({ detailData }) {
  // Definindo o estilo do background com a cor primary e a imagem do catálogo
  const detailStyle = {
    backgroundColor: "rgba(13, 37, 63, 0.8)",
    backgroundImage: `
      linear-gradient(rgba(13, 37, 63, 0.1), rgba(13, 37, 63, 0.1)), 
      url(https://image.tmdb.org/t/p/original${detailData.backdrop_path})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay",
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  // Função para formatar a data no padrão dd/mm/yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  // Função para extrair o ano da data
  const getYear = (dateString) => {
    if (!dateString) return ''; // Evita tentar processar datas inválidas
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (
    <div className="shadow-lg items-center flex p-8 md:p-9" style={detailStyle}>
      <div className="shadow-lg mx-2 md:mx-10 relative group w-48 md:w-56">
        <Link href={detailData.homepage} target="blank">
          <div className="h-full w-full bg-black absolute rounded-xl opacity-0 group-hover:opacity-50 transition-all ease-in-out duration-300"></div>
          
          {/* Skeleton Loader enquanto a imagem carrega */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-xl">
              <div className="animate-pulse bg-gray-300 h-full w-full rounded-xl"></div>
            </div>
          )}
          
          <Image
            className={`rounded-xl transition-opacity duration-500 ease-in-out ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`}
            width={230}
            height={230}
            alt={detailData.title ? detailData.title : detailData.name}
            onLoadingComplete={() => setImageLoaded(true)}
            loading="lazy"
          />
        </Link>
      </div>
      
      <div className="font-bold text-white w-3/4 h-3/4 relative">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          {detailData.title ? detailData.title : detailData.name} ({getYear(detailData.release_date || detailData.last_air_date)})
        </h1>
        <div className="my-2 flex gap-4 items-center w-fit">
          <p className="text-sm md:text-lg font-bold">
            {detailData.release_date ? formatDate(detailData.release_date) : formatDate(detailData.last_air_date)}
          </p>
          <p className="text-sm font-normal md:text-base">
            {`Status: ${detailData.status}`}
          </p>
        </div>
        <ul className="items-center gap-2 grid grid-cols-2 sm:grid-cols-4 md:flex">
          {detailData.genres.map((genre) => (
            <li key={genre.id} className="hidden sm:inline text-sm px-4 py-2 bg-tertiary rounded-full text-primary w-fit">
              <p>{genre.name}</p>
            </li>
          ))}
        </ul>
        <div className="w-full p-2 hidden md:inline-block">
          <h2>{detailData.tagline}</h2>
          <p className="mt-3 font-normal text-lg">{detailData.overview}</p>
        </div>
      </div>
    </div>
  );
}
