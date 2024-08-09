"use client";

import DetailPage from "@/components/DetailPage";
import Card from "@/components/HomePage/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { SeriesDetailProps, DetailDataSerie, DataItemSerie } from "@/types";

const fetchData = async (path: string): Promise<any> => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
    },
  };
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT + path}`, options);
    return res.data;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export default function MoviesDetail({ params }: SeriesDetailProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState<DetailDataSerie | null>(null);
    const [recommendations, setRecommendations] = useState<DataItemSerie[]>([]);
  
    useEffect(() => {
      const fetchDataAsync = async () => {
        try {
          const movieDetailData = await fetchData(`/movie/${params.id}`);
          const recommendationsData = await fetchData(`/movie/${params.id}/recommendations`);
          setMovieDetail(movieDetailData);
          setRecommendations(recommendationsData.results || []);
          setIsLoading(false);
        } catch (error) {
          console.error("Failed to fetch movie details or recommendations", error);
          setIsLoading(false);
        }
      };
  
      fetchDataAsync();
    }, [params.id]);
  
    // Handler para resetar os dados
    const handlerResetData = () => {
      setRecommendations([]);
    };
  
    if (isLoading) {
      return <Loading />;
    }
  
    return (
      <>
        {movieDetail && <DetailPage detailData={movieDetail} />}
        <Card 
          propsData={{ cardTitle: "Recomendações" }} 
          datas={recommendations} 
          onResetData={handlerResetData} 
          isLoading={isLoading} 
        />
      </>
    );
}
