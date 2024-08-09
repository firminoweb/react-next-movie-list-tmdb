import { render, screen } from '@testing-library/react';
import MoviesUpcoming from '@/app/movies/upcoming/page';
import HomePage from '@/components/HomePage';

jest.mock('@/components/HomePage', () => {
    return jest.fn(() => <div>Mocked HomePage</div>);
});

describe('MoviesUpcoming Component', () => {
    it('renders the HomePage component with correct props', () => {
        render(<MoviesUpcoming />);

        expect(HomePage).toHaveBeenCalledWith(
            {
                path: '/movie/upcoming?language=pt-BR',
                propsData: {
                    title: 'Filmes que estão por vir.',
                    desc: 'Aqui estão os filmes que serão lançados em breve.',
                    placeholder: 'Busque pelos filmes aqui...',
                    cardTitle: 'Filmes serão lançados em breve',
                    mediaType: 'movie'
                }
            },
            {}
        );

        expect(screen.getByText('Mocked HomePage')).toBeInTheDocument();
    });
});
