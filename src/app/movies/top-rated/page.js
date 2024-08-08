import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Aqui estão os filmes mais bem avaliados.",
        desc: "Confira os detalhes dos seus filmes favoritos abaixo.",
        placeholder: "Busque por filmes mais bem avaliados aqui...",
        cardTitle: "Filmes Mais Bem Avaliados",
        mediaType: "movie"
    }

    return(
        <>
            <HomePage path={"/movie/top_rated"} propsData={propsData} />
        </>
    )
} 