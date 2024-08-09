import HomePage from "@/components/HomePage";

export default function SeriesOnAir() {

    const propsData = {
        title: "Aqui estão as séries de TV no ar.",
        desc: "Aqui estão as séries de TV que irão ao ar nos próximos 7 dias.",
        placeholder: "Busque por séries de TV que irão ao ar nos próximos 7 dias...",
        cardTitle: "Séries de TV no Ar",
        mediaType: "tv"
    }

    return(
        <>
            <HomePage path={"/tv/on_the_air?language=pt-BR"} propsData={propsData} />
        </>
    )
} 