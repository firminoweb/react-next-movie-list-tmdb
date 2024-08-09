import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Aqui estão as séries de TV mais bem avaliadas.",
        desc: "Confira os detalhes das suas séries de TV favoritas abaixo.",
        placeholder: "Busque por séries mais bem avaliadas...",
        cardTitle: "Séries de TV Mais Bem Avaliadas",
        mediaType: "tv"
    }

    return(
        <>
            <HomePage path={"/tv/top_rated?language=pt-BR"} propsData={propsData} />
        </>
    )
} 