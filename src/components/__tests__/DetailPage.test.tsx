import { render, screen } from '@testing-library/react';
import DetailPage from '../DetailPage';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

jest.mock('../DetailPage/Details', () => () => <div>Mocked Detail</div>);
jest.mock('../DetailPage/MoreDetails', () => () => <div>Mocked MoreDetails</div>);

describe('DetailPage Component', () => {
  const mockDetailData = {
    id: 1,
    title: 'Mock Title',
    name: 'Mock Name',
    release_date: '2024-07-20',
    last_air_date: '2024-07-15',
    poster_path: '/mockposter.jpg',
    backdrop_path: '/mockbackdrop.jpg',
    homepage: 'https://example.com',
    status: 'Released',
    tagline: 'This is a mock tagline',
    overview: 'This is a mock overview',
    genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Drama' }],
    runtime: 120,
    media_type: 'movie',
    production_companies: [{ id: 1, name: 'Mock Company', logo_path: '/mocklogo.png' }],
  };

  it('renders Detail and MoreDetails components with the provided data', () => {
    render(<DetailPage detailData={mockDetailData} />);

    expect(screen.getByText('Mocked Detail')).toBeInTheDocument();
    expect(screen.getByText('Mocked MoreDetails')).toBeInTheDocument();
  });
});
