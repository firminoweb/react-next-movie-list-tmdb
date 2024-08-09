'use client'

import CardSkeleton from "@/components/LoadingSkeleteon/CardSkeleton";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { CardProps } from "@/types";


export default function Card({ datas, propsData, onResetData, isLoading }: CardProps) {
    const [limitData, setLimitData] = useState(14);
    const [isShowAllData, setShowAllData] = useState(true);
    const [imageLoaded, setImageLoaded] = useState<boolean[]>(new Array(datas.length).fill(false));
    const [routeSegment, setRouteSegment] = useState<string | null>(null);

    useEffect(() => {
        const segment = getFirstPathSegment();
        setRouteSegment(segment);
    }, []);

    const handleSeeMoreData = () => {
        isShowAllData ? setLimitData(datas.length) : setLimitData(14);
        setShowAllData(!isShowAllData);
    };

    const handleImageLoad = (index: number) => {
        setImageLoaded((prev) => {
            const newLoadedState = [...prev];
            newLoadedState[index] = true;
            return newLoadedState;
        });
    };

    const getFirstPathSegment = (): string | null => {
        if (typeof window !== 'undefined') {
            const pathSegments = window.location.pathname.split('/').filter(Boolean);
            return pathSegments[0] || null;
        }
        return null;
    }

    const getLinkHref = (mediaType: string | undefined, id: string | number): string => {
        if (routeSegment) {
            return `/${routeSegment}/details/${id}`;
        } else if (mediaType) {
            return mediaType === "movie" ? `/movies/details/${id}` : `/series/details/${id}`;
        } else {
            return `/details/${id}`;
        }
    };

    return (
        <>
            {isLoading ? <CardSkeleton cards={10} /> :
                datas.length === 0 ? (
                    <div className="w-full p-20 flex items-center justify-center">
                        <div className="p-2">
                            <h1 className="text-xl text-gray-700 font-bold">{`O filme ou série não pode ser encontrado em: ${propsData.cardTitle}`}</h1>
                            <div className="m-2 flex items-center justify-center">
                                <button onClick={onResetData} className="p-2 px-4 text-white font-bold hover:bg-secondary duration-200 active:bg-tertiary bg-primary rounded-lg cursor-pointer">OK</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full">
                        <div className="flex justify-center p-6 items-center">
                            <div className="font-bold text-3xl">
                                <h1 className="text-sm sm:text-lg md:text-3xl text-primary">{propsData.cardTitle || "Carregando..."}</h1>
                            </div>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-bold p-2">
                            {datas.map((data, index) => {
                                if (index > limitData) return null;
                                return (
                                    <li key={data.id} className="hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 shadow-lg flex-none w-full max-w-[244px] rounded-md bg-white p-2">
                                        <Link href={getLinkHref(data.media_type, data.id)}>
                                            <div className="relative w-full pb-[150%]"> {/* Controla a altura da imagem */}
                                                {!imageLoaded[index] && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-md">
                                                        <Skeleton baseColor="#e0e0e0" highlightColor="#f5f5f5" className="w-full h-full"/>
                                                    </div>
                                                )}
                                                <Image
                                                    alt={data.title ? data.title : data.name || 'Imagem sem título'}
                                                    className={`absolute top-0 left-0 w-full h-full object-cover rounded-md transition-opacity duration-500 ease-in-out ${imageLoaded[index] ? "opacity-100" : "opacity-0"}`}
                                                    src={data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '/path/to/default/image.jpg'}
                                                    onLoad={() => handleImageLoad(index)}
                                                    loading="lazy"
                                                    layout="fill" // Faz a imagem ocupar todo o espaço do container
                                                />
                                            </div>
                                            <h1 className="p-2 text-center">{data.title ? data.title : data.name}</h1>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="flex justify-center m-2">
                            <div className="m-2 px-2 py-1 rounded-md bg-primary w-fit font-bold text-sm hover:bg-secondary hover:scale-105 active:bg-tertiary text-white cursor-pointer" onClick={handleSeeMoreData}>
                                <button>{isShowAllData ? "Ver mais" : "Mostrar menos"}</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
