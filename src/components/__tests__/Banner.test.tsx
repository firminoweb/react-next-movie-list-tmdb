// import { render, screen, fireEvent } from '@testing-library/react';
// import Banner from '../HomePage/Banner';
// import '@testing-library/jest-dom';
// import { jest } from '@jest/globals';
// import { useRouter } from 'next/navigation';

// jest.mock('next/navigation', () => ({
//   useRouter: jest.fn(),
// }));

// jest.mock('@/components/LoadingSkeleteon/BannerSkeleton', () => () => <div>Mocked BannerSkeleton</div>);

// describe('Banner Component', () => {
//   const mockPush = jest.fn();
//   const mockOnSearch = jest.fn();

//   const propsData = {
//     title: "Test Title",
//     desc: "Test Description",
//     placeholder: "Search...",
//   };

//   const mockData = [
//     {
//       id: 1,
//       title: "Mock Movie 1",
//       backdrop_path: "/mockpath1.jpg",
//       media_type: "movie",
//     },
//     {
//       id: 2,
//       name: "Mock Show 1",
//       backdrop_path: "/mockpath2.jpg",
//       media_type: "tv",
//     },
//   ];

//   beforeEach(() => {
//     (useRouter as jest.Mock).mockReturnValue({
//       push: mockPush,
//       query: { search: '' },
//     });
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renders the Banner component with the correct elements', () => {
//     render(<Banner datas={mockData} propsData={propsData} onSearch={mockOnSearch} isLoading={false} />);

//     expect(screen.getByText('Test Title')).toBeInTheDocument();
//     expect(screen.getByText('Test Description')).toBeInTheDocument();
//     expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
//   });

//   it('renders BannerSkeleton when loading', () => {
//     render(<Banner datas={[]} propsData={propsData} onSearch={mockOnSearch} isLoading={true} />);
//     expect(screen.getByText('Mocked BannerSkeleton')).toBeInTheDocument();
//   });

//   it('triggers search function and updates URL on form submit', () => {
//     render(<Banner datas={mockData} propsData={propsData} onSearch={mockOnSearch} isLoading={false} />);

//     const searchInput = screen.getByPlaceholderText('Search...');
//     fireEvent.change(searchInput, { target: { value: 'Test Search' } });

//     const submitButton = screen.getByText('Buscar');
//     fireEvent.click(submitButton);

//     expect(mockOnSearch).toHaveBeenCalledWith('Test Search');
//     expect(mockPush).toHaveBeenCalledWith('?search=Test%20Search');
//   });

//   it('cycles through images using next and previous buttons', () => {
//     render(<Banner datas={mockData} propsData={propsData} onSearch={mockOnSearch} isLoading={false} />);

//     const nextButton = screen.getByAltText('Forward');
//     const prevButton = screen.getByAltText('Back Icon');

//     fireEvent.click(nextButton);
//     fireEvent.click(prevButton);
//   });
// });
