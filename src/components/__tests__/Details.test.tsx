import { render, screen } from '@testing-library/react';
import Detail from '../DetailPage/Details';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

jest.mock('next/image', () => (props: { src: string, alt: string }) => <img src={props.src} alt={props.alt} />);

describe('Detail Component', () => {
  const mockDetailData = {
    backdrop_path: '/mockbackdrop.jpg',
    homepage: 'https://example.com',
    poster_path: '/mockposter.jpg',
    title: 'Mock Title',
    name: 'Mock Name',
    release_date: '2023-01-01',
    last_air_date: '2023-01-02',
    status: 'Released',
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Drama' },
    ],
    tagline: 'Mock Tagline',
    overview: 'This is a mock overview.',
  };

  it('renders the poster image and handles image loading', () => {
    render(<Detail detailData={mockDetailData} />);

    const posterImage = screen.getByAltText('Mock Title');

    expect(posterImage).toBeInTheDocument();
    expect(posterImage).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/mockposter.jpg');
  });

  it('renders the correct link for the homepage', () => {
    render(<Detail detailData={mockDetailData} />);

    const homepageLink = screen.getByRole('link', { name: /mock title/i });

    expect(homepageLink).toBeInTheDocument();
    expect(homepageLink).toHaveAttribute('href', 'https://example.com');
  });
});
