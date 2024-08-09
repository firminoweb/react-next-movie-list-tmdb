"use client";

import Link from "next/link";
import { useState } from "react";
import { Route, ListContentProps } from "@/types";


export default function ContentHeader() {
  const [isMovieHovered, setMovieHovered] = useState(false);
  const [isSeriesHovered, setSeriesHovered] = useState(false);

  const routeMovies: Route = {
    popular: "/movies/popular",
    topRated: "/movies/top-rated",
    upComing: "/movies/upcoming",
  };

  const routeSeries: Route = {
    popular: "/series/popular",
    topRated: "/series/top-rated",
    onTheAir: "/series/on-the-air",
  };

  return (
    <div className={`flex justify-center items-center gap-5 font-bold text-white`}>
      <Link href={"/"} className="text-2xl cursor-pointer mr-10 text-tertiary">
        Pilar Movies
      </Link>
      <ul className="flex gap-7 text-base">
        <li
          className="group"
          onMouseEnter={() => setMovieHovered(true)}
          onMouseLeave={() => setMovieHovered(false)}
        >
          <input type="button" className="cursor-pointer" value={"Filmes"} />
          <ListContent isHovered={isMovieHovered} route={routeMovies} />
        </li>
        <li
          className="group"
          onMouseEnter={() => setSeriesHovered(true)}
          onMouseLeave={() => setSeriesHovered(false)}
        >
          <input type="button" className="cursor-pointer" value={"Séries"} />
          <ListContent isHovered={isSeriesHovered} route={routeSeries} />
        </li>
      </ul>
    </div>
  );
}

function ListContent({ isHovered, route }: ListContentProps) {
  return (
    <ul
      className={
        "absolute rounded-md w-fit h-auto px-4 py-2 bg-white font-medium text-primary shadow-md transition-opacity duration-300 ease-in-out " +
        (isHovered ? "opacity-100 visible" : "opacity-0 invisible")
      }
    >
      <li className="transform transition-transform duration-300 py-1 hover:translate-x-1 ease-in-out">
        <Link href={route.popular}>
          Popular
        </Link>
      </li>
      <li className="transform transition-transform duration-300 py-1 hover:translate-x-1 ease-in-out">
        <Link href={route.topRated}>
          Mais votados
        </Link>
      </li>
      <li className="transform transition-transform duration-300 py-1 hover:translate-x-1 ease-in-out">
        <Link href={route.upComing || route.onTheAir || ""}>
          {route.upComing ? `Em breve` : "No Ar"}
        </Link>
      </li>
    </ul>
  );
}

