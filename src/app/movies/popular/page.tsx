import HomePage from "@/components/HomePage";

export default function MoviesPopular() {

    const propsData = {
        title: "Aqui estão os filmes populares.",
        desc: "Confira os detalhes dos seus filmes favoritos abaixo.",
        placeholder: "Busque por filmes populares aqui...",
        cardTitle: "Filmes Populares",
        mediaType: "movie"
    }

    return(
        <>
            <HomePage path={"/movie/popular?language=pt-BR"} propsData={propsData} />
        </>
    )
} 