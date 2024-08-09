import { render, screen } from '@testing-library/react';
import SeriesOnAir from '@/app/series/on-the-air/page';
import HomePage from '@/components/HomePage';

jest.mock('@/components/HomePage', () => {
    return jest.fn(() => <div>Mocked HomePage</div>);
});

describe('SeriesOnAir Component', () => {
    it('renders the HomePage component with correct props', () => {
        render(<SeriesOnAir />);

        expect(HomePage).toHaveBeenCalledWith(
            {
                path: '/tv/on_the_air?language=pt-BR',
                propsData: {
                    title: "Aqui estão as séries de TV no ar.",
                    desc: "Aqui estão as séries de TV que irão ao ar nos próximos 7 dias.",
                    placeholder: "Busque por séries de TV que irão ao ar nos próximos 7 dias...",
                    cardTitle: "Séries de TV no Ar",
                    mediaType: "tv"
                }
            },
            {}
        );

        expect(screen.getByText('Mocked HomePage')).toBeInTheDocument();
    });
});
