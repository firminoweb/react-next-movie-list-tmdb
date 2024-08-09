import { render, screen } from '@testing-library/react';
import SeriesTopRated from '@/app/series/top-rated/page';
import HomePage from '@/components/HomePage';

jest.mock('@/components/HomePage', () => {
    return jest.fn(() => <div>Mocked HomePage</div>);
});

describe('SeriesTopRated Component', () => {
    it('renders the HomePage component with correct props', () => {
        render(<SeriesTopRated />);

        expect(HomePage).toHaveBeenCalledWith(
            {
                path: '/tv/top_rated?language=pt-BR',
                propsData: {
                    title: 'Aqui estão as séries de TV mais bem avaliadas.',
                    desc: 'Confira os detalhes das suas séries de TV favoritas abaixo.',
                    placeholder: 'Busque por séries mais bem avaliadas...',
                    cardTitle: 'Séries de TV Mais Bem Avaliadas',
                    mediaType: 'tv'
                }
            },
            {}
        );

        expect(screen.getByText('Mocked HomePage')).toBeInTheDocument();
    });
});
