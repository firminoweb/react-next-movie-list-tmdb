# Movie List (TMDB) | React + Next.js

## Visão geral
**Movie List (TMDB)** é uma aplicação web desenvolvida com **Next.js**, **React.js**, **TypeScript** e uma série de outros recursos para fornecer uma experiência de usuário rica em informações sobre filmes e séries. A aplicação permite que os usuários explorem, pesquisem e obtenham detalhes sobre suas produções favoritas.

## Tecnologias Utilizadas
* **Next.js**: Framework React para produção com suporte a renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
* **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
* **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
* **Axios**: Cliente HTTP baseado em Promises para realizar requisições à API.
* **Jest**: Framework de testes em JavaScript com foco em simplicidade.
* **React Testing Library**: Conjunto de utilitários para teste de componentes React.
* **Next/Image**: Componente otimizado de imagem do Next.js para carregamento eficiente de imagens.
* **React-Loading-Skeleton**: Componente para exibição de skeleton loaders durante o carregamento de conteúdos.

## Rotas Implementadas
* **/**: Página inicial com um banner que apresenta os filmes e séries mais populares.
* **/movies/popular**: Exibe uma lista dos filmes mais populares.
* **/movies/top-rated**: Exibe uma lista dos filmes mais bem avaliados.
* **/movies/upcoming**: Exibe uma lista dos próximos lançamentos de filmes.
* **/series/popular**: Exibe uma lista das séries mais populares.
* **/series/top-rated**: Exibe uma lista das séries mais bem avaliadas.
* **/series/on-the-air**: Exibe uma lista das séries que estão no ar.
* **/movies/details/**: Exibe os detalhes de um filme específico, incluindo sinopse, gêneros, e mais.
* **/series/details/**: Exibe os detalhes de uma série específica, incluindo sinopse, gêneros, e mais

**OBS**: O Filtro/Busca vai funcionar como catalizador exclusivo de informação restrito á rota que estiver, por exemplo: Se estiver na home, ele vai filtrar os resultados da home, caso esteja em uma categoria específica como Filmes ou Séries, ele vai filtrar correspondente a categoria que estiver.

## Instalação e Inicialização do Projeto

### Pré-requisitos
* Node.js (versão 14 ou superior)
* npm ou yarn

### Passo a Passo

#### 1. Clone o repositório:
```
https://github.com/firminoweb/teste-pilar.git
cd teste-pilar
```

#### 2. Instale as dependências:
- Se estiver usando NPM:
```
npm install
```

- Se estiver usando YARN:
```
yarn install
```

#### 3. Configuração das variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```
NEXT_PUBLIC_API_KEY: "SUA_API_KEY",
NEXT_PUBLIC_API_BASE_ENDPOINT: "https://api.themoviedb.org/3/"
NEXT_PUBLIC_API_ACCESS_TOKEN: "SEU_API_ACCESS_TOKEN"
```

#### 4. Inicialize o projeto:
- Se estiver usando NPM:
```
npm run dev
```

- Se estiver usando YARN:
```
yarn dev
```

#### 5. Acesse a aplicação:
Abra o navegador e acesse `http://localhost:3000`.

### Rodando os Testes
Para rodar os testes unitários, utilize o comando:
```
npm test
```

Ou, se estiver usando yarn:
```
yarn test
```

