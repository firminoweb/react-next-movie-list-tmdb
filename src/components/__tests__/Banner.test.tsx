import { render, screen, fireEvent } from '@testing-library/react';
import Banner from '@/components/HomePage/Banner';
import { jest } from '@jest/globals';
import '@testing-library/jest-dom';
import { BannerProps } from '@/types';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt={props.alt} />;
  },
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: (props: any) => {
    return <a {...props} href={props.href}>{props.children}</a>;
  },
}));

jest.mock('@/components/LoadingSkeleteon/BannerSkeleton', () => () => <div>Mocked BannerSkeleton</div>);

describe('Banner Component', () => {
  const propsData = {
    title: "Test Title",
    desc: "Test Description",
    placeholder: "Search...",
  };

  const mockData = [
    {
      id: 1,
      title: "Mock Movie 1",
      backdrop_path: "/mockpath1.jpg",
      media_type: "movie",
    },
    {
      id: 2,
      name: "Mock Show 1",
      backdrop_path: "/mockpath2.jpg",
      media_type: "tv",
    },
  ];

  it('renders the Banner component with the correct elements', () => {
    render(<Banner datas={mockData} propsData={propsData} onSearch={jest.fn()} isLoading={false} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders BannerSkeleton when loading', () => {
    render(<Banner datas={[]} propsData={propsData} onSearch={jest.fn()} isLoading={true} />)
    expect(screen.getByText('Mocked BannerSkeleton')).toBeInTheDocument();
  });

  it('triggers search function on form submit', () => {
    const mockOnSearch = jest.fn();

    render(<Banner datas={mockData} propsData={propsData} onSearch={mockOnSearch} isLoading={false} />);

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'Test Search' } });

    const submitButton = screen.getByText('Buscar');
    fireEvent.click(submitButton);

    expect(mockOnSearch).toHaveBeenCalledWith('Test Search');
  });

  it('cycles through images using next and previous buttons', () => {
    render(<Banner datas={mockData} propsData={propsData} onSearch={jest.fn()} isLoading={false} />);

    const nextButton = screen.getByAltText('Forward');
    const prevButton = screen.getByAltText('Back Icon');

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
  });
});
