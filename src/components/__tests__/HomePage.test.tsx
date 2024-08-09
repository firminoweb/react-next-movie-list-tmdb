import React from 'react';
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import axios from 'axios';
import HomePage from '@/components/HomePage';
import { HomePageProps, DataItem } from '@/types';

jest.mock('axios');
jest.mock('../HomePage/Banner', () => ({ onSearch }: { onSearch: (s: string) => void }) => (
  <div data-testid="mock-banner">
    <input data-testid="search-input" onChange={(e) => onSearch(e.target.value)} />
  </div>
));
jest.mock('../HomePage/Card', () => ({ onResetData }: { onResetData: () => void }) => (
  <div data-testid="mock-card">
    <button data-testid="reset-button" onClick={onResetData}>Reset</button>
  </div>
));

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('HomePage', () => {
  const mockPath = '/some-path';
  const mockPropsData: HomePageProps['propsData'] = {
    title: 'Test Title',
    desc: 'Test Description',
    placeholder: 'Test Placeholder',
    cardTitle: 'Test Card Title'
  };
  
  const mockApiResponse = {
    data: {
      results: [
        { id: 1, title: 'Movie 1', poster_path: '/path1.jpg' },
        { id: 2, name: 'TV Show 1', poster_path: '/path2.jpg' },
      ]
    }
  };

  beforeEach(() => {
    mockedAxios.get.mockResolvedValue(mockApiResponse);
  });

  it('renders HomePage and fetches data', async () => {
    await act(async () => {
      render(<HomePage path={mockPath} propsData={mockPropsData} />);
    });

    expect(screen.getByTestId('mock-banner')).toBeInTheDocument();
    expect(screen.getByTestId('mock-card')).toBeInTheDocument();

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.stringContaining(mockPath),
        expect.any(Object)
      );
    });
  });

  it('handles search functionality', async () => {
    await act(async () => {
      render(<HomePage path={mockPath} propsData={mockPropsData} />);
    });

    const searchInput = screen.getByTestId('search-input');
    
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'Movie' } });
    });
  });

  it('handles reset functionality', async () => {
    await act(async () => {
      render(<HomePage path={mockPath} propsData={mockPropsData} />);
    });

    const resetButton = screen.getByTestId('reset-button');
    
    await act(async () => {
      fireEvent.click(resetButton);
    });
  });
});