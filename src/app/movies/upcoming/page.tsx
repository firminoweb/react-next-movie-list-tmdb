import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Filmes que estão por vir.",
        desc: "Aqui estão os filmes que serão lançados em breve.",
        placeholder: "Busque pelos filmes aqui...",
        cardTitle: "Filmes serão lançados em breve",
        mediaType: "movie"
    }

    return(
        <>
            <HomePage path={"/movie/upcoming?language=pt-BR"} propsData={propsData} />
        </>
    )
} 