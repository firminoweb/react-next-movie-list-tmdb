"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Banner";
import Card from "./Card";
import { DataItem, HomePageProps } from "@/types";


export default function HomePage({ path, propsData }: HomePageProps) {
    const [data, setData] = useState<DataItem[]>([]);
    const [oriData, setOriData] = useState<DataItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`
            }
        };
        try {
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT + path}`, options);
            const dataWithDefaults = result.data.results.map((item: DataItem) => ({
                ...item,
                poster_path: item.poster_path || '',
            }));
            setData(dataWithDefaults);
            setOriData(dataWithDefaults);
            setIsLoading(false);
        } catch (e) {
            throw new Error((e as Error).message);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const handlerSearchData = (filteringData: string) => {
        if (!filteringData) {
            setData(oriData);
            return;
        };
        const regex = new RegExp(filteringData, "i");
        const filteredData = data.filter(data => data.title ? regex.test(data.title) : regex.test(data.name || ""));
        setData(filteredData);
    };    

    const handlerResetData = () => {
        setData(oriData); 
    };

    return (
        <main className="min-h-screen items-center py-16 bg-gray-100">
            <Banner datas={data} propsData={propsData} onSearch={handlerSearchData} isLoading={isLoading} />
            <Card datas={data} propsData={propsData} onResetData={handlerResetData} isLoading={isLoading} />
        </main>
    );
}
