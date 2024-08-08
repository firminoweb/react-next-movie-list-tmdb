"use client";

import Image from "next/image";
import { useState } from "react";

export default function MoreDetails({ detailData }) {
  return (
    <div className="h-fit bg-white shadow-lg items-center p-9">
      <div className="text-primary w-full">
        <h2 className="text-2xl font-bold my-2 text-primary">
          {detailData.tagline}
        </h2>
        <ul className="items-center gap-2 grid grid-cols-2 md:grid-cols-3 sm:hidden font-bold">
          {detailData.genres.map((genre) => {
            return (
              <li
                key={genre.id}
                className="sm:inline text-sm px-2 bg-white rounded-full text-black w-fit"
              >
                <p>{genre.name}</p>
              </li>
            );
          })}
        </ul>
        <p className="text-lg my-3 font-semibold">Sinopse: </p>
        <p className="text-xl mb-3">{detailData.overview}</p>
        {detailData.runtime ? (
          <p className="text-lg font-semibold">{`Duração: ${(detailData.runtime / 60).toFixed(1)} horas`}</p>
        ) : (
          ""
        )}
      </div>
      <div className="items-center w-full">
        <div className="flex justify-center p-4 items-center">
          <h1 className="text-primary font-bold text-2xl mb-4">
            Empresas Produtoras
          </h1>
        </div>
        <ul className="grid grid-cols-2 md:flex w-full gap-8 justify-center items-center">
          {detailData.production_companies.map((companies) => (
            <CompanyLogo key={companies.id} logoPath={companies.logo_path} name={companies.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function CompanyLogo({ logoPath, name }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <li className="w-32 sm:w-36 md:w-48">
      {/* Skeleton Loader enquanto a imagem carrega */}
      {!logoPath || !imageLoaded ? (
        <div className="w-[192px] h-[120px] flex items-center justify-center bg-gray-200 rounded-xl">
          <span className="animate-pulse bg-gray-300 h-full w-full rounded-xl" />
        </div>
      ) : null}

      {/* Imagem da empresa produtora */}
      {logoPath && (
        <Image
          src={`https://image.tmdb.org/t/p/w500${logoPath}`}
          width={192}
          height={120}
          alt={name}
          className={`rounded-xl transition-opacity duration-500 ease-in-out ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
          loading="lazy"
        />
      )}
    </li>
  );
}
