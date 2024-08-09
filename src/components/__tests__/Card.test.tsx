import { render, screen, fireEvent } from '@testing-library/react';
import Card from '@/components/HomePage/Card';
import '@testing-library/jest-dom';
import { CardProps } from '@/types';
import { jest } from '@jest/globals';

// Mocks
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

jest.mock('react-loading-skeleton', () => ({
  __esModule: true,
  default: (props: any) => {
    return <div {...props}>Mocked Skeleton</div>;
  },
}));

jest.mock('@/components/LoadingSkeleteon/CardSkeleton', () => () => <div>Mocked CardSkeleton</div>);

describe('Card Component', () => {
  const propsData = {
    cardTitle: "Test Card Title",
  };

  const mockData = [
    {
      id: 1,
      title: "Mock Movie 1",
      poster_path: "/mockpath1.jpg",
      media_type: "movie",
    },
    {
      id: 2,
      name: "Mock Show 1",
      poster_path: "/mockpath2.jpg",
      media_type: "tv",
    },
  ];

  const setup = (overrideProps?: Partial<CardProps>) => {
    const props: CardProps = {
      datas: mockData,
      propsData: propsData,
      onResetData: jest.fn(),
      isLoading: false,
      ...overrideProps,
    };

    return render(<Card {...props} />);
  };

  it('renders Card component with correct elements', () => {
    setup();

    expect(screen.getByText('Test Card Title')).toBeInTheDocument();
    expect(screen.getByText('Mock Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Mock Show 1')).toBeInTheDocument();
  });

  it('renders CardSkeleton when loading', () => {
    setup({ isLoading: true });

    expect(screen.getByText('Mocked CardSkeleton')).toBeInTheDocument();
  });

  it('handles "Ver mais" and "Mostrar menos" functionality', () => {
    setup();

    const seeMoreButton = screen.getByText('Ver mais');
    fireEvent.click(seeMoreButton);

    expect(screen.getByText('Mostrar menos')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Mostrar menos'));

    expect(screen.getByText('Ver mais')).toBeInTheDocument();
  });

  it('calls onResetData when there are no items and the button is clicked', () => {
    const mockOnResetData = jest.fn();
    setup({ datas: [], onResetData: mockOnResetData });

    const resetButton = screen.getByText('OK');
    fireEvent.click(resetButton);

    expect(mockOnResetData).toHaveBeenCalled();
  });

  it('handles image loading state correctly', () => {
    setup();

    const firstImage = screen.getByAltText('Mock Movie 1');
    fireEvent.load(firstImage);

    expect(firstImage).toHaveClass('opacity-100');
  });
});
