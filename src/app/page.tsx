import HomePage from "@/components/HomePage";

export default function Home() {

  const propsData = {
    title: "Bem vindo.",
    desc: "Confira abaixo os detalhes dos seus filmes e séries de TV favoritos.",
    placeholder: "Pesquise filmes e séries populares...",
    cardTitle: "Filmes e Séries populares"
  }
  return (
    <HomePage path={"/trending/all/day?language=pt-BR"} propsData={propsData} />
  );
}
