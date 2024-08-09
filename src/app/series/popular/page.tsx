import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Aqui estão as séries de TV populares.",
        desc: "Confira os detalhes das suas séries de TV favoritas abaixo.",
        placeholder: "Busque por séries populares...",
        cardTitle: "Séries de TV Populares",
        mediaType: "tv"
    }

    return(
        <>
            <HomePage path={"/tv/popular?language=pt-BR"} propsData={propsData} />
        </>
    )
} 