'use client'

import CardSkeleton from "@/components/LoadingSkeleteon/CardSkeleton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Card({datas, propsData, onResetData, isLoading}) {
    const [limitData, setLimitData] = useState(14);
    const [isShowAllData, setShowAllData] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false); // Controle para o carregamento da imagem

    const handleSeeMoreData = () => {
        isShowAllData ? setLimitData(datas.length) : setLimitData(14)
        setShowAllData(!isShowAllData);
    }

    return (
        <>
        {
            isLoading ? <CardSkeleton cards={10} />  
            :
            datas.length === 0 ?
            <div className="w-full p-4 flex items-center justify-center">
                <div className="p-2 ">
                    <h1 className="text-xl text-gray-700 font-bold" >{`Os filmes ou séries não foram encontrados em ${propsData.cardTitle}`}</h1>
                    <div className="m-2 flex items-center justify-center">
                        <button onClick={onResetData} className="p-2 px-4 text-white font-bold hover:bg-secondary duration-200 active:bg-tertiary bg-primary rounded-lg cursor-pointer">OK</button>
                    </div>
                </div>
            </div>
            :
            <div className="w-full">
                <div className="flex justify-center p-6 items-center">
                    <div className="font-bold text-3xl">
                        <h1 className="text-sm sm:text-lg md:text-3xl text-primary">{propsData.cardTitle || "Carregando..."}</h1>
                    </div>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-bold p-2">
                    {
                    datas.map((data, index) => {
                        if(index > limitData) return null;
                        return (
                            <li key={data.id} className="hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit rounded-md bg-white p-2 " >
                                <Link href={data.media_type === "movie" ? `/movies/details/${data.id}` : `/series/details/${data.id}`} >
                                    <div className="relative w-[244px] h-[366px]">
                                        {/* Skeleton Loader enquanto a imagem carrega */}
                                        {!imageLoaded && (
                                            <div className="w-[700px] h-[700px] flex items-center justify-center bg-gray-200 rounded-md">
                                                <SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5">
                                                    <Skeleton height={700} width={700} />
                                                </SkeletonTheme>
                                            </div>
                                        )}
                                        <Image
                                            alt={data.title ? data.title : data.name}
                                            className={`rounded-md w-full h-auto transition-opacity duration-500 ease-in-out ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                                            width={244}
                                            height={366}
                                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                            onLoadingComplete={() => setImageLoaded(true)}
                                            loading="lazy"
                                        />
                                    </div>
                                    <h1 className="p-2" >{data.title ? data.title : data.name}</h1>
                                </Link>     
                            </li>
                        );
                    })
                    }
                </ul>
                <div className="flex justify-center m-2">
                    <div className="m-2 px-2 py-1 rounded-md bg-primary w-fit font-bold text-sm hover:bg-secondary hover:scale-105 active:bg-tertiary text-white cursor-pointer" onClick={handleSeeMoreData}>
                            <button>{isShowAllData ? "Ver mais" : "Mostrar menos"}</button>
                    </div>
                </div>
            </div>
        }
        </>
    )
}
