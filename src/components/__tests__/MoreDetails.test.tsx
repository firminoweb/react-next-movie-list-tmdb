import { render, screen } from '@testing-library/react';
import MoreDetails from '../DetailPage/MoreDetails';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

jest.mock('next/image', () => (props: { src: string, alt: string }) => <img src={props.src} alt={props.alt} />);

describe('MoreDetails Component', () => {
  const mockDetailData = {
    tagline: 'This is a mock tagline',
    genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Drama' }],
    overview: 'This is a mock overview',
    runtime: 120,
    production_companies: [
      { id: 1, name: 'Mock Company 1', logo_path: '/mocklogo1.png' },
      { id: 2, name: 'Mock Company 2', logo_path: '/mocklogo2.png' },
    ],
  };

  it('renders the tagline, genres, overview, and runtime correctly', () => {
    render(<MoreDetails detailData={mockDetailData} />);

    expect(screen.getByText('This is a mock tagline')).toBeInTheDocument();
    expect(screen.getByText('Sinopse:')).toBeInTheDocument();
    expect(screen.getByText('This is a mock overview')).toBeInTheDocument();
    expect(screen.getByText('Duração: 2.0 horas')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Drama')).toBeInTheDocument();
  });

  it('renders the production companies logos correctly', () => {
    render(<MoreDetails detailData={mockDetailData} />);

    const logo1 = screen.getByAltText('Mock Company 1');
    const logo2 = screen.getByAltText('Mock Company 2');

    expect(logo1).toBeInTheDocument();
    expect(logo1).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/mocklogo1.png');

    expect(logo2).toBeInTheDocument();
    expect(logo2).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/mocklogo2.png');
  });

  it('renders a skeleton loader when the logo is not loaded yet', () => {
    const { container } = render(<MoreDetails detailData={mockDetailData} />);
    const skeletonLoader = container.querySelector('.animate-pulse');
    expect(skeletonLoader).toBeInTheDocument();
  });
});
