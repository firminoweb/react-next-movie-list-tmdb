import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Aqui estão os filmes populares.",
        desc: "Confira os detalhes dos seus filmes favoritos abaixo.",
        placeholder: "Busque por filmes populares aqui...",
        cardTitle: "Filmes Populares",
        mediaType: "movie"
    }

    return(
        <>
            <HomePage path={"/movie/popular"} propsData={propsData} />
        </>
    )
} 