import { render, screen } from '@testing-library/react';
import MoviesTopRated from '@/app/movies/top-rated/page';
import HomePage from '@/components/HomePage';

jest.mock('@/components/HomePage', () => {
    return jest.fn(() => <div>Mocked HomePage</div>);
});

describe('SeriesTopRated Component', () => {
    it('renders the HomePage component with correct props', () => {
        render(<MoviesTopRated />);

        expect(HomePage).toHaveBeenCalledWith(
            {
                path: '/movie/top_rated?language=pt-BR',
                propsData: {
                    title: "Aqui estão os filmes mais bem avaliados.",
                    desc: "Confira os detalhes dos seus filmes favoritos abaixo.",
                    placeholder: "Busque por filmes mais bem avaliados aqui...",
                    cardTitle: "Filmes Mais Bem Avaliados",
                    mediaType: "movie"
                }
            },
            {}
        );

        expect(screen.getByText('Mocked HomePage')).toBeInTheDocument();
    });
});
