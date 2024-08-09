import { render, screen } from '@testing-library/react';
import MoviesPopular from '@/app/movies/popular/page';
import HomePage from '@/components/HomePage';

jest.mock('@/components/HomePage', () => {
    return jest.fn(() => <div>Mocked HomePage</div>);
});

describe('SeriesPopular Component', () => {
    it('renders the HomePage component with correct props', () => {
        render(<MoviesPopular />);

        expect(HomePage).toHaveBeenCalledWith(
            {
                path: '/movie/popular?language=pt-BR',
                propsData: {
                    title: "Aqui estão os filmes populares.",
                    desc: "Confira os detalhes dos seus filmes favoritos abaixo.",
                    placeholder: "Busque por filmes populares aqui...",
                    cardTitle: "Filmes Populares",
                    mediaType: "movie"
                }
            },
            {}
        );

        expect(screen.getByText('Mocked HomePage')).toBeInTheDocument();
    });
});
