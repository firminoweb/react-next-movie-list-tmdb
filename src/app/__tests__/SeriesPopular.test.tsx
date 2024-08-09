import { render, screen } from '@testing-library/react';
import SeriesPopular from '@/app/series/popular/page';
import HomePage from '@/components/HomePage';

jest.mock('@/components/HomePage', () => {
    return jest.fn(() => <div>Mocked HomePage</div>);
});

describe('SeriesPopular Component', () => {
    it('renders the HomePage component with correct props', () => {
        render(<SeriesPopular />);

        expect(HomePage).toHaveBeenCalledWith(
            {
                path: '/tv/popular?language=pt-BR',
                propsData: {
                    title: 'Aqui estão as séries de TV populares.',
                    desc: 'Confira os detalhes das suas séries de TV favoritas abaixo.',
                    placeholder: 'Busque por séries populares...',
                    cardTitle: 'Séries de TV Populares',
                    mediaType: 'tv'
                }
            },
            {}
        );

        expect(screen.getByText('Mocked HomePage')).toBeInTheDocument();
    });
});
